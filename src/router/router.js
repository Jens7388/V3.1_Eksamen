
import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/home.vue";
import Coffees from "../views/coffees.vue";
import Brews from "../views/brews.vue"

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
  },
  {
    path:"/coffees/brews",
    name: "Brews",
    component: Brews
  }
];

const router = createRouter({ history, routes });

export default router;
