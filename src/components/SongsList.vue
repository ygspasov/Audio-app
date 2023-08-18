<template>
  <div>
    <div class="flex items-center justify-center ml-4 sm:ml-0">
      <table v-if="userLoggedIn" class="w-full md:w-3/4 text-sm border-separate border-spacing-y-2">
        <thead class="w-full">
          <tr class="w-full">
            <th class="td-class">Song</th>
            <th class="td-class">Genre</th>
            <th class="td-class">Status</th>
          </tr>
        </thead>
        <tbody class="" v-for="song in songs" :key="song.id">
          <tr class="tr-class">
            <td class="td-class text-center">{{ song.modified_name }}</td>
            <td class="td-class text-center">{{ song.genre || "Unspecified" }}</td>
            <td class="td-class flex">
              <span
                class="mx-auto rounded-md bg-green-600/50 px-4 py-px text-xs font-semibold uppercase text-green-900 antialiased"
                >Active</span
              >
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="text-red-600">Please, sign in to access your music.</p>
    </div>
  </div>
</template>
<script>
import { collection, getFirestore, getDocs, app, query, where, getAuth } from "@/firebase/firebase";
import { musicStore } from "@/stores/musicStore";
import { mapActions, mapState } from "pinia";
import { authStore } from "@/stores/authStore";
const db = getFirestore(app);
const songsRef = collection(db, "songs");
const auth = getAuth();
export default {
  data() {
    return {
      songs: [],
    };
  },
  methods: {
    ...mapActions(musicStore, ["loadSongs", "setSongId"]),
    async getSongs() {
      this.loading = true;
      this.songs = [];

      const q = query(songsRef, where("uid", "==", auth.currentUser.uid));
      getDocs(q)
        .then((querySnapshot) => {
          console.log("querySnapshot", querySnapshot);
          querySnapshot.forEach((doc) => {
            let song = doc.data();
            song.id = doc.id;
            this.songs.push(song);
          });
        })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          console.log("err", err);
          this.loading = false;
        });

      this.loadSongs("no");
    },
  },
  computed: {
    ...mapState(authStore, ["userLoggedIn"]),
  },
  watch: {
    userLoggedIn(val) {
      if (val === true) {
        this.getSongs();
      }
    },
  },
  created() {
    if (this.userLoggedIn) {
      this.getSongs();
    }
  },
};
</script>
<style>
@media only screen and (max-width: 640px) {
  thead {
    display: none !important;
  }
}
.suspended-text {
  @apply text-gray-500;
}
.tr-class {
  @apply flex flex-col mb-4 sm:table-row;
}

.td-class {
  @apply px-4 py-3 bg-gray-100 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg;
}
</style>
