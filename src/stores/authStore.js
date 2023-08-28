import { defineStore } from "pinia";
import { auth, signInWithEmailAndPassword } from "@/firebase/firebase";

export const authStore = defineStore("auth", {
  state: () => ({
    userLoggedIn: false,
    userEmail: "",
    displayName: "",
  }),
  actions: {
    loginUser(email) {
      this.userLoggedIn = true;
      this.userEmail = email;
    },
    logOutUser() {
      this.userLoggedIn = false;
      this.userEmail = "";
    },
    async authenticate(email, password) {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.userLoggedIn = true;
          this.userEmail = email;
          this.displayName = email.match(/^([^@]*)@/)[1];
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch(() => {});
    },
  },
});
