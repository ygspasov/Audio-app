import { defineStore } from "pinia";
import "@/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export const authStore = defineStore("auth", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    loginUser() {
      this.userLoggedIn = true;
    },
    async authenticate(email, password) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("successful login");
          console.log("userCredential", userCredential);
          this.userLoggedIn = true;
          // Signed in
          // const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log("error", error.message);
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    },
  },
});
