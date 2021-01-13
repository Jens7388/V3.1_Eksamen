<template>
  <header class="flex flex-row my-8 ml-3">
    <router-link
      :to="{ path: '/coffees/' + this.coffeeId + '/brews/' }"
      class="mr-5"
    >
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowBack"></use>
      </svg>
    </router-link>
    <brewing-method
      :icon="selectedBrewingMethod.icon"
      :title="selectedBrewingMethod.title"
      :beanAmount="selectedBrewingMethod.beanAmount"
      :waterAmount="selectedBrewingMethod.waterAmount"
      :profile="selectedBrewingMethod.profile"
      :time="selectedBrewingMethod.time"
    ></brewing-method>
  </header>
  <article class="flex flex-grow">

    <ul class="flex flex-col justify-start ml-5 mt-4 pr-16">
      <recipe-steps
        :stepOne="selectedBrewingMethod.recipeSteps.one"
        :stepTwo="selectedBrewingMethod.recipeSteps.two"
        :stepThree="selectedBrewingMethod.recipeSteps.three"
        :stepFour="selectedBrewingMethod.recipeSteps.four"
        :stepFive="selectedBrewingMethod.recipeSteps.five"
        :stepSix="selectedBrewingMethod.recipeSteps.six"
      >
      </recipe-steps>
    </ul>
  </article>
  <footer class="flex justify-end mr-6 mb-12">
    <router-link
      :to="{path: '/'}"
      @click="saveBrew()"
      class="flex flex-row mx-5"
    >
      <button class="mr-4 font-bold">FINISH</button>
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowForward"></use>
      </svg>
    </router-link>
  </footer>
</template>


<script>
import RecipeSteps from "../components/brewingMethods/RecipeSteps.vue";
import { mapGetters, mapActions } from "vuex";
import BrewingMethod from '../components/brewingMethods/BrewingMethod.vue';
export default {
  name: "Recipe",
  components: {
    RecipeSteps,
    BrewingMethod,
  },
  methods: {
    // Spread map actions
    ...mapActions(["fetchBrewingMethods", "fetchCoffees", "addBrew"]),
    saveBrew() {
      const newBrew = {
        id: 0,
        icon: this.selectedBrewingMethod.icon,
        title: this.selectedCoffee.title,
        location: this.selectedCoffee.location,
        beanAmount: this.selectedBrewingMethod.beanAmount,
        waterAmount: this.selectedBrewingMethod.waterAmount,
        profile: this.selectedBrewingMethod.profile,
        time: this.selectedBrewingMethod.time,
      };
      this.addBrew(newBrew);
    },
  },
  computed: {
    ...mapGetters(["allBrewingMethods", "allCoffees"]),
    selectedBrewingMethod: function () {
      return this.allBrewingMethods.filter(
        (brewingMethod) => brewingMethod.id === parseInt(this.$route.params.brewId)
      )[0];
    },
    selectedCoffee: function () {
      return this.allCoffees.filter(
        (coffee) => coffee.id === parseInt(this.$route.params.coffeeId)
      )[0];
    },
    coffeeId() {
      return parseInt(this.$route.params.coffeeId);
    },
  },
  created() {
    this.fetchBrewingMethods();
    this.fetchCoffees();
  },
};
</script>