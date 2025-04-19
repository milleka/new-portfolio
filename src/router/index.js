import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ORIGIN),
  routes: [
    {
      component: HomeView,
      name: "home",
      path: "/"
    },
  ],
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
