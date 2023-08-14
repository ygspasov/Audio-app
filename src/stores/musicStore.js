import { defineStore } from "pinia";

export const musicStore = defineStore("music", {
  state: () => ({
    songsLoading: false,
    songId: "",
  }),
  actions: {
    loadSongs(val) {
      val === "yes" ? (this.songsLoading = true) : (this.songsLoading = false);
    },
    setSongId(val) {
      this.songId = val;
    },
  },
});
