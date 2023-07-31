<template>
  <div>
    <!-- Modal toggle -->
    <a
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      href="#"
      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >{{ userEmail || "Login/Register" }}</a
    >

    <!-- Main modal -->
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              @click="signInOrRegister('signin')"
              type="button"
              class="hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-6/12"
              :class="{ 'bg-blue-700': loginOrRegister, 'text-white': loginOrRegister }"
            >
              Sign in
            </button>
            <button
              @click="signInOrRegister('register')"
              type="button"
              class="hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-6/12"
              :class="{ 'bg-blue-700': !loginOrRegister, 'text-white': !loginOrRegister }"
            >
              Register
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6">
            <AuthForms
              :loginOrRegister="loginOrRegister"
              @l_valid="(valid) => (this.l_valid = valid)"
              @r_valid="(valid) => (this.r_valid = valid)"
              @registration="(registration) => (this.registrationData = registration)"
              @login="(login) => (this.loginData = login)"
            />
          </div>

          <!-- Success text -->
          <div
            v-if="this.successText"
            class="p-4 mb-4 mx-6 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">{{ successText }}</span>
          </div>

          <!-- Error text -->
          <div
            v-if="errorText"
            class="p-4 mb-4 mx-6 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">{{ errorText }}</span>
          </div>

          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              v-show="loginOrRegister"
              :disabled="!l_valid"
              data-modal-hide="defaultModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-60"
              @click.prevent="authenticateUser"
            >
              Login
            </button>
            <button
              v-show="!loginOrRegister"
              :disabled="!r_valid"
              data-modal-hide="defaultModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-60"
              @click="register"
            >
              Register
            </button>
            <button
              data-modal-hide="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AuthForms from "./AuthForms.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, collection, addDoc, getFirestore } from "firebase/firestore";
import { mapState, mapActions } from "pinia";
import { authStore } from "@/stores/authStore";

export default {
  data() {
    return {
      loginOrRegister: true,
      l_valid: false,
      r_valid: false,
      registrationData: {},
      loginData: {},
      successText: "",
      errorText: "",
    };
  },
  computed: {
    ...mapState(authStore, ["userLoggedIn", "userEmail"]),
  },
  components: {
    AuthForms,
  },
  methods: {
    ...mapActions(authStore, ["loginUser", "authenticate"]),
    signInOrRegister(val) {
      val == "signin" ? (this.loginOrRegister = true) : (this.loginOrRegister = false);
    },

    async authenticateUser() {
      console.log("loginData", this.loginData);
      await this.authenticate(this.loginData.email, this.loginData.password);
    },
    async register() {
      const auth = getAuth();
      const db = getFirestore(app);
      createUserWithEmailAndPassword(
        auth,
        this.registrationData.email,
        this.registrationData.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          this.loginUser(this.registrationData.email);
          this.successText = "User created!";
          setTimeout(() => {
            this.successText = "";
          }, 3000);
          console.log("userLoggedIn", this.userLoggedIn);
          addDoc(collection(db, "users"), {
            first: this.registrationData.firstName,
            last: this.registrationData.lastName,
            phone: this.registrationData.phone,
            address: this.registrationData.address,
            email: this.registrationData.email,
            uid: user.uid,
          })
            .then(() => {
              console.log("collection updated");
            })
            .catch((error) => {
              console.log("error", error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.errorText = errorMessage;
          setTimeout(() => {
            this.errorText = "";
          }, 3000);
        });
    },
  },
};
</script>
<style></style>
