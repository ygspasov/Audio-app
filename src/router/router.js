import { createRouter, createWebHistory } from "vue-router";
import SongsList from "@/components/SongsList.vue";
import ManageSongs from "@/components/ManageSongs.vue";
import NotFound from "@/components/NotFound.vue";
import SingleSong from "@/components/SingleSong.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: SongsList },
    {
      path: "/manage",
      name: "Manage",
      component: ManageSongs,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    {
      path: "/song/:id:songTitle:genre:comment_count",
      name: "SingeSong",
      component: SingleSong,
    },
  ],
  linkExactActiveClass: "text-sky-700",
});

export { router };
