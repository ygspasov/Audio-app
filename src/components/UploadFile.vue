<template>
  <div
    class="basis-1/4 mb-4 md:mb-0 mx-1 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    :class="{ 'bg-gray-300 border-gray-400 border-solid': isDraggedOver }"
    @drag.prevent.stop=""
    @dragstart.prevent.stop=""
    @dragend.prevent.stop="isDraggedOver = false"
    @dragover.prevent.stop="isDraggedOver = true"
    @dragenter.prevent.stop="isDraggedOver = true"
    @dragleave.prevent.stop="isDraggedOver = false"
    @drop.prevent.stop="uploadFiles($event)"
  >
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Upload</h5>
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        :class="{ 'bg-gray-300 border-gray-400 border-solid': isDraggedOver }"
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
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
    <div class="my-1 text-base font-medium text-blue-700 dark:text-blue-500">
      Gamma Ray - Pale Rider
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
    </div>
  </div>
</template>
<script>
import { storage, ref, uploadBytes } from "@/firebase/firebase";
export default {
  data() {
    return {
      isDraggedOver: false,
    };
  },
  methods: {
    uploadFiles(event) {
      this.isDraggedOver = false;
      const files = [...event.dataTransfer.files];
      files.forEach((file) => {
        const storageRef = ref(storage);
        const songsRef = ref(storageRef, `songs/${file.name}`);
        uploadBytes(songsRef, file).then((snapshot) => {
          console.log("Uploaded a blob or file!", snapshot);
        });
      });
      console.log("files", files);
    },
  },
  created() {
    console.log("storage", storage);
  },
};
</script>
<style></style>