
import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/home.vue";

const history = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({ history, routes });

export default router;
