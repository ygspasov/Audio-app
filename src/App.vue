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
import { mapState } from "pinia";
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
  created() {
    console.log("auth.currentUser", auth.currentUser);
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
body {
  font-family: "Roboto";
}
</style>
