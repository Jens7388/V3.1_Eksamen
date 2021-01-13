import vuex from "vuex";

import coffees from "./modules/coffees";
import brewingMethods from "./modules/brewingMethods";
import brews from "./modules/brews"

export default new vuex.Store({
  modules: {
    coffees,
    brewingMethods,
    brews
  },
});