import { defineStore } from "pinia";

export const musicStore = defineStore("music", {
  state: () => ({
    songsLoaded: false,
  }),
  actions: {
    loadSongs() {
      this.songsLoaded = true;
    },
  },
});
