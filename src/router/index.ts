import { createRouter, createWebHistory } from "vue-router";
import PageA from "../views/PageA.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pageA",
      component: PageA,
    },
    {
      path: "/pageB",
      name: "pageB",
      component: () => import("../views/PageB.vue"),
    },
  ],
});

export default router;
