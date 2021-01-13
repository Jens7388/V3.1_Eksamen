<template>
  <h2 class="text-gray-400">FAVOURITE RECIPE</h2>
  <ul>
    <brewing-method
      v-for="brewingMethod in favoriteBrewingMethods"
      :key="brewingMethod.id"
      :id="brewingMethod.id"
      :icon="brewingMethod.icon"
      :title="brewingMethod.title"
      :beanAmount="brewingMethod.beanAmount"
      :waterAmount="brewingMethod.waterAmount"
      :profile="brewingMethod.profile"
      :time="brewingMethod.time"
      :coffeeId="coffeeId"
    ></brewing-method>
  </ul>
  <h2 class="text-gray-400 mt-20">TRY A NEW RECIPE</h2>
  <ul>
    <brewing-method
      v-for="brewingMethod in brewingMethods"
      :key="brewingMethod.id"
      :id="brewingMethod.id"
      :icon="brewingMethod.icon"
      :title="brewingMethod.title"
      :beanAmount="brewingMethod.beanAmount"
      :waterAmount="brewingMethod.waterAmount"
      :profile="brewingMethod.profile"
      :time="brewingMethod.time"
      :coffeeId="coffeeId"
    ></brewing-method>
  </ul>
</template>

  <script>
import BrewingMethod from "./BrewingMethod.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { BrewingMethod },
  data(){
  return{
      coffeeId: parseInt(this.$route.params.coffeeId)
  }
  },
  methods: {
    ...mapActions(["fetchBrewingMethods"]),
  },
  computed: {
    ...mapGetters(["allBrewingMethods"]),
    favoriteBrewingMethods: function () {
      return this.allBrewingMethods.filter(
        (brewingMethod) => brewingMethod.isFavorite === true
      );
    },
    brewingMethods: function () {
      return this.allBrewingMethods.filter(
        (brewingMethod) => brewingMethod.isFavorite === false
      );
    },
  },
  created() {
    this.fetchBrewingMethods();
  },
};
</script>