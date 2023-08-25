import { defineStore } from "pinia";
import { Howl } from "howler";

export const playerStore = defineStore("player", {
  state: () => ({
    currentSong: {},
    sound: {},
  }),
  actions: {
    async newSong(song) {
      if (this.sound.playing) {
        this.stopAudio();
      }
      this.currentSong = song;
      console.log("this.currentSong", this.currentSong);
      this.sound = new Howl({
        src: [song.song_url],
        html5: true,
      });
      this.sound.play();
    },
    async toggleAudio() {
      //Check if the Howl object exists
      if (!this.sound.playing) {
        return;
      }
      //Check if the song is playing
      if (this.sound.playing()) {
        this.sound.pause();
      } else {
        this.sound.play();
      }
    },
    async stopAudio() {
      if (this.sound.playing()) {
        this.sound.pause();
      }
    },
  },
});
