<template>
  <div class="mx-4 text-primary">
    <Navbar />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";

import { mapState, mapActions } from "pinia";
import { authStore } from "@/stores/authStore";
import "./firebase/firebase";
import { getAuth } from "firebase/auth";
const auth = getAuth();

export default {
  name: "App",
  data() {
    return {};
  },
  components: { Navbar },
  computed: {
    ...mapState(authStore, ["userLoggedIn"]),
  },
  methods: {
    ...mapActions(authStore, ["loginUser", "authenticate"]),
  },
  async created() {
    setTimeout(() => {
      if (auth.currentUser) {
        this.loginUser(auth.currentUser.email);
      }
    }, 1000);
  },
};
</script>

<style>
body {
  font-family: "Roboto";
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
a {
  cursor: pointer;
}
</style>
