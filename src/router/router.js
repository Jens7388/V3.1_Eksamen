
import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/home.vue";
import Coffees from "../views/coffees.vue";

const history = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coffees",
    name: "Coffees",
    component: Coffees
  }
];

const router = createRouter({ history, routes });

export default router;
