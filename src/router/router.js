import { createRouter, createWebHistory } from "vue-router";
import SongsList from "@/components/SongsList.vue";
import ManageSongs from "@/components/ManageSongs.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: SongsList },
    { path: "/manage", name: "Manage", component: ManageSongs },
  ],
});
