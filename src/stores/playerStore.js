import { defineStore } from "pinia";

export const playerStore = defineStore("player", {
  state: () => ({
    currentSong: {},
  }),
  actions: {
    async newSong(song) {
      this.currentSong = song;
      console.log("this.currentSong", this.currentSong);
    },
  },
});
