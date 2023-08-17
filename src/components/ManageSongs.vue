<template>
  <div id="manageSongs" class="max-w-screen-2lg mx-auto">
    <AlertMessage v-if="showAlert" />
    <div
      class="h-screen flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center"
    >
      <UploadFile />
      <MySongs />
    </div>
  </div>
</template>
<script>
import { authStore } from "@/stores/authStore";
import { alertStore } from "@/stores/alertStore";
import { mapState } from "pinia";
import AlertMessage from "./AlertMessage.vue";
import UploadFile from "./UploadFile.vue";
import MySongs from "./MySongs.vue";

export default {
  name: "ManageSongs",
  data() {
    return {
      // showAlert: false,
    };
  },
  components: {
    UploadFile,
    MySongs,
    AlertMessage,
  },
  beforeRouteEnter(to, from, next) {
    const auth = authStore();
    if (auth.userLoggedIn) {
      next();
    } else {
      next("/");
    }
  },
  methods: {},
  computed: {
    ...mapState(alertStore, ["showAlert", "alertText"]),
  },
};
</script>
<style></style>
