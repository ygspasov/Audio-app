import { defineStore } from "pinia";
import "@/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export const authStore = defineStore("auth", {
  state: () => ({
    userLoggedIn: false,
    userEmail: "",
  }),
  actions: {
    loginUser(email) {
      this.userLoggedIn = true;
      this.userEmail = email;
    },
    async authenticate(email, password) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("successful login");
          console.log("userCredential", userCredential);
          this.userLoggedIn = true;
          this.userEmail = email;
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
