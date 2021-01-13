import vuex from "vuex";

// Import module
import coffees from "./modules/coffees";
import brewingMethods from "./modules/brewingMethods";
import brews from "./modules/brews"

// Create store
export default new vuex.Store({
  modules: {
    coffees,
    brewingMethods,
    brews
  },
});