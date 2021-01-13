const state = {
    brews: [],
  };
  
  const getters = {
    allBrews: (state) => state.brews,
  };
  
  const actions = {
    async addBrew({ commit }, newBrew) {
      const oldBrews = JSON.parse(localStorage.getItem("brews")) || [];
  
      newBrew.id = Date.now();
  
      oldBrews.push(newBrew);
  
      localStorage.setItem("brews", JSON.stringify(oldBrews));
  
      commit("newBrew", newBrew);
    },
    async fetchBrews({ commit }) {
      const brews = JSON.parse(localStorage.getItem("brews")) || [];
  
      commit("setBrews", brews);
    },
    async deleteBrew({ commit }, id) {
      let brews = JSON.parse(localStorage.getItem("brews")) || [];
  
      brews = brews.filter((brew) => brew.id !== id);
      localStorage.setItem("brews", JSON.stringify(brews));

      commit("removeBrew", id);
    },
  };
  
  const mutations = {
    setBrews: (state, brews) => (state.brews = brews),
    newBrew: (state, brew) => state.brews.unshift(brew),
    removeBrew: (state, id) =>
      (state.brews = state.brews.filter((brew) => brew.id !== id)),
  };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };