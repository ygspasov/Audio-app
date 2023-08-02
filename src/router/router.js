import { createRouter, createWebHistory } from "vue-router";
import SongsList from "@/components/SongsList.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: SongsList }],
});
