import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    counter: 0,
  }),
});
