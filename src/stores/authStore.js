import { defineStore } from "pinia";

export const authStore = defineStore("auth", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    loginUser() {
      this.userLoggedIn = true;
    },
  },
});
