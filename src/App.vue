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

export default {
  name: "App",
  components: { Navbar, HeroSection, SongsList },
};
</script>

<style></style>
