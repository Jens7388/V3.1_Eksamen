import vuex from "vuex";

import todos from "./modules/todos";

export default new vuex.Store({
  modules: {
    todos,
  },
});
