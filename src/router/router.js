import { createRouter, createWebHistory } from "vue-router";
import SongsList from "@/components/SongsList.vue";
import ManageSongs from "@/components/ManageSongs.vue";
import NotFound from "@/components/NotFound.vue";
import SingleSong from "@/components/SingleSong.vue";
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    //used for the hash scrolling to work
    if (to.hash) {
      return {
        el: to.hash,
      };
    }
  },
  routes: [
    { path: "/", name: "Home", component: SongsList },
    {
      path: "/manage",
      name: "Manage",
      component: ManageSongs,
    },
    {
      path: "/song/",
      name: "SingleSong",
      component: SingleSong,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  linkExactActiveClass: "text-sky-700",
});

export { router };
