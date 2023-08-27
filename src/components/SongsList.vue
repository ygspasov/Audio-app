<template>
  <div>
    <HeroSection />
    <div class="flex items-center justify-center ml-4 sm:ml-0">
      <table
        id="song-list"
        v-if="userLoggedIn"
        class="w-full md:w-3/4 text-sm border-separate border-spacing-y-2"
      >
        <thead class="w-full">
          <tr class="w-full">
            <th class="td-class">Song</th>
            <th class="td-class">Genre</th>
            <th class="td-class">Comments</th>
          </tr>
        </thead>
        <tbody class="w-100" v-for="song in songs" :key="song.id">
          <tr class="tr-class">
            <td class="td-class text-center text-lg">
              <router-link
                class="block"
                :to="{
                  name: 'SingeSong',
                  query: {
                    id: song.id,
                    genre: song.genre,
                    comment_count: Number(song.comment_count),
                    modified_name: song.modified_name,
                    original_name: song.original_name,
                    song_url: song.song_url,
                    uid: song.uid,
                  },
                }"
              >
                {{ song.modified_name }}</router-link
              >
            </td>
            <td class="td-class text-center text-lg">{{ song.genre }}</td>
            <td class="td-class text-center text-lg">
              <i class="fa-regular fa-comment mr-2"></i>{{ song.comment_count }}
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="text-red-600">Please, sign in to access your music.</p>
    </div>
  </div>
</template>
<script>
import {
  collection,
  getFirestore,
  getDocs,
  app,
  query,
  limit,
  where,
  getAuth,
  startAfter,
  orderBy,
} from "@/firebase/firebase";
import { musicStore } from "@/stores/musicStore";
import { mapActions, mapState } from "pinia";
import { authStore } from "@/stores/authStore";
import HeroSection from "@/components/HeroSection.vue";
const db = getFirestore(app);
const songsRef = collection(db, "songs");
const auth = getAuth();
export default {
  data() {
    return {
      songs: [],
      resultsPerPage: 20,
      pendingRequest: false,
      lastDoc: {},
    };
  },
  components: { HeroSection },
  methods: {
    ...mapActions(musicStore, ["loadSongs", "setSongId"]),
    async getDocuments(rest) {
      let q = query(
        songsRef,
        where("uid", "==", auth.currentUser.uid),
        orderBy("original_name"),
        limit(this.resultsPerPage)
      );
      await getDocs(rest || q)
        .then((querySnapshot) => {
          console.log("querySnapshot", querySnapshot);
          querySnapshot.forEach((doc) => {
            let song = doc.data();
            song.id = doc.id;
            this.songs.push(song);
          });
          // Get the last visible document
          this.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          console.log("err", err);
          this.loading = false;
        });

      this.loadSongs("no");
      this.pendingRequest = false;
    },
    async getSongs() {
      if (this.pendingRequest) {
        return;
      }
      this.pendingRequest = true;

      if (this.lastDoc) {
        const rest = query(
          songsRef,
          where("uid", "==", auth.currentUser.uid),
          orderBy("original_name"),
          startAfter(this.lastDoc),
          limit(this.resultsPerPage)
        );
        this.getDocuments(rest);
        this.pendingRequest = false;
      }
    },
    handleScroll() {
      console.log("handleScroll");
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;
      if (bottomOfWindow) {
        console.log("Bottom of window reached");
        this.getSongs();
      }
    },
  },
  computed: {
    ...mapState(authStore, ["userLoggedIn"]),
  },
  watch: {
    userLoggedIn(val) {
      if (val === true) {
        this.getDocuments();
      }
    },
  },
  created() {
    if (this.userLoggedIn) {
      this.getDocuments();
      console.log("songs", this.songs);
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
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
