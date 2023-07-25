import { defineStore } from "pinia";

export const musicStore = defineStore("music", {
  state: () => ({
    counter: 0,
  }),
});
