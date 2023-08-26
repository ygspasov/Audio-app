import { defineStore } from "pinia";
import { Howl } from "howler";
import helper from "@/utility/helper";
export const playerStore = defineStore("player", {
  state: () => ({
    currentSong: {},
    sound: {},
    seek: "00:00",
    duration: "00:00",
    playerProgress: "0%",
  }),
  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing();
      }
      return false;
    },
  },
  actions: {
    async newSong(song) {
      //Unloading the song to prevent memory leak
      if (this.sound instanceof Howl) {
        this.sound.unload();
      }

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
      this.sound.on("play", () => {
        requestAnimationFrame(this.progress);
      });
    },
    progress() {
      this.seek = helper.formatTime(this.sound.seek());
      this.duration = helper.formatTime(this.sound.duration());
      this.playerProgress = `${(this.sound.seek() / this.sound.duration()) * 100}%`;
      if (this.sound.playing()) {
        requestAnimationFrame(this.progress);
      }
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
    updateSeek(e) {
      //You only want to move the progress bar if the sound is playing
      if (!this.sound.playing) {
        return;
      }

      //Get the click position from the event
      const { x, width } = e.currentTarget.getBoundingClientRect();

      const clickX = e.clientX - x;
      const percentage = clickX / width;
      const seconds = this.sound.duration() * percentage;

      this.sound.seek(seconds);
      this.sound.once("seek", this.progress);
    },
  },
});
