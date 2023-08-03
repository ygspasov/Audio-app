import { createRouter, createWebHistory } from "vue-router";
import SongsList from "@/components/SongsList.vue";
import ManageSongs from "@/components/ManageSongs.vue";
import NotFound from "@/components/NotFound.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: SongsList },
    { path: "/manage", name: "Manage", component: ManageSongs },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  linkExactActiveClass: "text-sky-700",
});
