const state = {
  coffees: [],
};

const getters = {
  allCoffees: (state) => state.coffees,
};

const actions = {
  async fetchCoffees({ commit }) {
    const coffees = [
      {
        id: 1,
        title: "Calahute Alto",
        location: "Nordhavn Coffee",
        description:
          "Very smooth with a full and round body accompanied by notes of dried fruit and ripe banana, rounded by a mild acidity reminicent of tart fuit.",
        process: "Washed",
        varieties: "Castilo, Caturra",
        roastProfile: "Medium",
        country: "Guatemala",
      },
      {
        id: 2,
        title: "Beza",
        location: "Impact Roasters",
        description:
          "Strong, rich taste combined with a deep spicy, citrus, and floral aroma.",
        process: "Sun dried",
        varieties: "Castilo, Caturra",
        roastProfile: "Medium",
        country: "Ethiopia",
      },
    ];

    commit("setCoffee", coffees);
  },
};

const mutations = {
  setCoffee: (state, coffees) => (state.coffees = coffees)
};

export default {
  state,
  getters,
  actions,
  mutations,
};