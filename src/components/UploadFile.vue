<template>
  <div
    class="basis-1/4 mb-4 md:mb-0 mx-1 p-6 bg-blue-500 order border-gray-200 rounded-lg shadow"
    :class="{ 'bg-hover border-blue-400 border-solid': isDraggedOver }"
    @drag.prevent.stop=""
    @dragstart.prevent.stop=""
    @dragend.prevent.stop="isDraggedOver = false"
    @dragover.prevent.stop="isDraggedOver = true"
    @dragenter.prevent.stop="isDraggedOver = true"
    @dragleave.prevent.stop="isDraggedOver = false"
    @drop.prevent.stop="uploadFiles($event)"
  >
    <div class="flex items-center justify-between w-full px-1">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-white">Upload</h5>
      <i class="fa-solid fa-upload text-white"></i>
    </div>

    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white"
        :class="{ 'bg-blue-300 border-blue-400 border-solid': isDraggedOver }"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 px-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop audio files.
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          multiple
          @change="uploadFiles($event)"
        />
      </label>
    </div>
    <div class="mb-4" v-for="upload of uploads" :key="upload.name">
      <div class="my-1 text-base font-medium text-white" :class="upload.text_class">
        <i :class="upload.icon" class="mr-2"></i>{{ upload.name }}
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          class="h-2.5 rounded-full"
          :class="upload.variant"
          :style="{ width: upload.current_progress + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  app,
  storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  auth,
  getDownloadURL,
  collection,
  addDoc,
  getFirestore,
} from "@/firebase/firebase";
import { mapActions } from "pinia";
import { musicStore } from "@/stores/musicStore";
import { alertStore } from "@/stores/alertStore";

export default {
  data() {
    return {
      isDraggedOver: false,
      uploads: [],
    };
  },
  methods: {
    ...mapActions(musicStore, ["loadSongs"]),
    ...mapActions(alertStore, ["setAlert"]),
    async uploadFiles(event) {
      this.isDraggedOver = false;
      const files = event.dataTransfer ? [...event.dataTransfer.files] : [...event.target.files];

      files.forEach((file) => {
        let song = {};
        const storageRef = ref(storage);
        const songsRef = ref(storageRef, `songs/${file.name}`);
        let fileData = {};
        uploadBytes(songsRef, file).then((snapshot) => {
          fileData = snapshot;
          song = {
            uid: auth.currentUser.uid,
            display_name: auth.currentUser.displayName,
            original_name: fileData.metadata.name,
            modified_name: fileData.metadata.name,
            genre: "Unspecified",
            comment_count: 0,
            song_url: "",
            datePosted: new Date().toString(),
          };
        });
        const uploadIndex =
          this.uploads.push({
            fileData,
            current_progress: 0,
            name: file.name,
            variant: "bg-blue-600",
            icon: "fa-solid fa-spinner fa-spin",
            text_class: "",
          }) - 1;
        const uploadTask = uploadBytesResumable(songsRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            0;
            if (this.uploads.length > 0) {
              this.uploads[uploadIndex].current_progress = progress;
              if (this.uploads[uploadIndex].current_progress == 100) {
                this.uploads[uploadIndex].icon = "";
              }
            }
          },
          (error) => {
            this.uploads[uploadIndex].variant = "bg-red-500";
            this.uploads[uploadIndex].icon = "fa-solid fa-xmark";
            this.uploads[uploadIndex].text_class = "text-red-500";
            console.log("error", error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              song.song_url = downloadURL;
            });

            if (this.uploads.length > 0) {
              this.uploads[uploadIndex].variant = "bg-green-500";
              this.uploads[uploadIndex].icon = "fa-solid fa-check";
              this.uploads[uploadIndex].text_class = "text-green-500";
            }

            const db = getFirestore(app);
            await addDoc(collection(db, "songs"), song)
              .then(() => {
                this.loadSongs("yes");
                this.setAlert("Song added", "text-green-800 border-green-300 bg-green-50");
                this.uploads = [];
              })
              .catch((error) => {
                console.log("error", error);
              });
          }
        );
      });
    },
  },
  computed: {},
  created() {},
};
</script>
<style></style>
