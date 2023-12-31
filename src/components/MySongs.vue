<template>
  <div class="basis-1/2 mx-1 p-6 bg-blue-500 border border-gray-200 rounded-lg shadow">
    <div class="flex items-center justify-between w-full px-1">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">My Songs</h5>
      <i class="fa-solid fa-music text-white"></i>
    </div>
    <!-- Loading indicator -->
    <div
      v-if="loading"
      class="flex items-center justify-center w-100 h-56 border border-gray-200 rounded-lg bg-gray-50 my-2"
    >
      <div
        class="px-3 py-1 text-sm font-medium leading-none text-center bg-blue-200 rounded-full animate-pulse"
      >
        loading...
      </div>
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left">
        <thead class="text-xs uppercase bg-secondary text-white">
          <tr class="tr-class">
            <th scope="col" class="px-6 py-3">Song</th>
            <th scope="col" class="px-6 py-3">Genre</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="tr-class text-primary border-b bg-blue-200"
            v-for="song in sortedSongs"
            :key="song.uid"
            v-show="song"
          >
            <th scope="row" class="px-6 py-4 font-medium text-primary">
              {{ song.modified_name || song.original_name }}
            </th>
            <td class="px-6 py-4">{{ song.genre || "Unspecified" }}</td>
            <td class="flex items-center md:items-start justify-start px-6 py-4">
              <a @click="edit(song.id)"><EditModal /></a>
              <a @click="deleteSong(song.id)" class="mx-1"
                ><i class="fa-solid fa-trash mx-1"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {
  collection,
  getDocs,
  getFirestore,
  app,
  query,
  where,
  getAuth,
  deleteDoc,
  doc,
} from "@/firebase/firebase";
import { mapState, mapActions } from "pinia";
import { musicStore } from "@/stores/musicStore";
import { alertStore } from "@/stores/alertStore";
import EditModal from "./EditModal.vue";

const db = getFirestore(app);
const songsRef = collection(db, "songs");

export default {
  data() {
    return {
      songs: [],
      loading: false,
    };
  },
  components: { EditModal },
  methods: {
    ...mapState(musicStore, ["songsLoading", "songId"]),
    ...mapActions(musicStore, ["loadSongs", "setSongId"]),
    ...mapActions(alertStore, ["setAlert"]),
    async getSongs() {
      this.loading = true;
      this.songs = [];
      const auth = getAuth();
      const q = query(songsRef, where("uid", "==", auth.currentUser.uid));
      await getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let song = doc.data();
            song.id = doc.id;
            this.songs.push(song);
          });
        })
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });

      this.loadSongs("no");
      //Fixing a bug with the edit modal not working on last table row
      this.songs.push("");
    },
    edit(id) {
      this.setSongId(id);
    },
    async deleteSong(id) {
      this.setSongId(id);
      await deleteDoc(doc(db, "songs", this.songId())).then(() => {
        this.setAlert("Song deleted", "text-green-800 border-green-300 bg-green-50");
        this.getSongs();
      });
    },
  },
  watch: {
    dataLoaded() {
      this.getSongs();
    },
  },
  computed: {
    dataLoaded() {
      return this.songsLoading();
    },
    sortedSongs() {
      //slice used to return a new array
      return this.songs.slice().sort((a, b) => {
        return new Date(b.datePosted) - new Date(a.datePosted);
      });
    },
  },
  created() {
    this.getSongs();
  },
};
</script>
<style>
.tr-class {
  @apply flex flex-col mb-4 sm:table-row;
}
</style>
