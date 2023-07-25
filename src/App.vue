<template>
  <div class="mx-4">
    <Navbar></Navbar>
    <HeroSection />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";

export default {
  name: "App",
  components: { Navbar, HeroSection },
};
</script>

<style></style>
