<template>
  <ul class="flex">
    <coffees-list-item
      v-for="coffee in allCoffees"
      :key="coffee.id"
      :id="coffee.id"
      :title="coffee.title"
      :location="coffee.location"
      :description="coffee.description"
      :process="coffee.process"
      :varieties="coffee.varieties"
      :roastProfile="coffee.roastProfile"
      :country="coffee.country"
    ></coffees-list-item>
  </ul>
</template>
<script>
import CoffeesListItem from "./CoffeesListItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    CoffeesListItem,
  },
  methods: {
    // Spread map actions
    ...mapActions(["fetchCoffees"]),
  },
  computed: mapGetters(["allCoffees"]),
  created() {
    // Fetch coffees
    this.fetchCoffees();
  },
};
</script>