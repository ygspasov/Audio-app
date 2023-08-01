import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import SongsList from "@/components/SongsList.vue";
import "./index.css";
import "flowbite";
import "./firebase/firebase";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: SongsList }],
});
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
