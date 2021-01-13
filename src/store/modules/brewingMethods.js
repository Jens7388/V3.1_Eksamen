const state = {
  brewingMethods: [],
  };
  
  const getters = {
    allBrewingMethods: (state) => state.brewingMethods,
  };
  
  const actions = {
    async fetchBrewingMethods({ commit }) {
      const brewingMethods = [
        {
          id: 1,
          icon: "#aeropress",
          title: "AeroPress",
          beanAmount: 16,
          waterAmount: 230,
          profile: "Medium",
          time: 1,
          isFavorite: true,
          recipeSteps: {
            one: "Add ground coffee to Inverse Aeropress",
            two: "Start timer",
            three: "Add 50g of 93c water to aeropress for 10s",
            four: "Stir five times",
            five: "Add last 180g of water and stir to mix",
            six: "After 1 min gently press coffee into cup",
          },
        },
        {
          id: 2,
          icon: "#french",
          title: "French Press",
          beanAmount: 33,
          waterAmount: 500,
          profile: "Coarse",
          time: 4,
          isFavorite: false,
          recipeSteps: {
            one: "Add ground coffee to French Press",
            two: "Start timer and pour water over coffee",
            three: "Stir with a spoon",
            four:
              "After 4 min, break through the crust of the coffee on the top to let the coffee fall to the bottom",
            five: "Remove big particles and foam still floating on top",
            six: "Let coffee sit for 30 sec. Then gently press down the handle",
          },
        },
        {
          id: 3,
          icon: "#kalita",
          title: "Kalita Wave",
          beanAmount: 16,
          waterAmount: 230,
          profile: "Medium",
          time: 5,
          isFavorite: false,
          recipeSteps: {
            one: "Add ground coffee to Inverse Aeropress",
            two: "Start timer",
            three: "Add 50g of 93c water to aeropress for 10s",
            four: "Stir five times",
            five: "Add last 180g of water and stir to mix",
            six: "After 5 min gently press coffee into cup",
          },
        },
        {
          id: 4,
          icon: "#infusion",
          title: "Cold Infusion",
          beanAmount: 16,
          waterAmount: 230,
          profile: "Medium",
          time: 120,
          isFavorite: false,
          recipeSteps: {
            one: "Add ground coffee to Inverse Aeropress",
            two: "Start timer",
            three: "Add 50g of 93c water to aeropress for 10s",
            four: "Stir five times",
            five: "Add last 180g of water and stir to mix",
            six: "After 1 min gently press coffee into cup",
          },
        },
        {
          id: 5,
          icon: "#chemex",
          title: "Chemex",
          beanAmount: 16,
          waterAmount: 230,
          profile: "Fine",
          time: 3,
          isFavorite: false,
          recipeSteps: {
            one: "Add ground coffee to French Press",
            two: "Start timer and pour water over coffee",
            three: "Stir with a spoon",
            four:
              "After 4 min, break through the crust of the coffee on the top to let the coffee fall to the bottom",
            five: "Remove big particles and foam still floating on top",
            six: "Let coffee sit for 30 sec. Then gently press down the handle",
          },
        },
      ];
      commit("setBrewingMethods", brewingMethods);
    },

    };
    const mutations ={
      setBrewingMethods: (state, brewingMethods) =>(state.brewingMethods = brewingMethods),
    };
  
  export default {
    state,
    getters,
    actions,
    mutations,
  };