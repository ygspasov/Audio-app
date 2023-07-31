<template>
  <div class="mx-4">
    <Navbar></Navbar>
    <HeroSection />
    <SongsList />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import SongsList from "./components/SongsList.vue";
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
  components: { Navbar, HeroSection, SongsList },
  computed: {
    ...mapState(authStore, ["userLoggedIn"]),
  },
  methods: {
    ...mapActions(authStore, ["loginUser", "authenticate"]),
  },
  async created() {
    setTimeout(() => {
      if (auth.currentUser) {
        console.log("auth.currentUser", auth.currentUser);
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
</style>
