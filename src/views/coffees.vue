<template>
  <header class="flex flex-row my-8 ml-3">
    <router-link to="/">
      <svg class="h-6 w-6 text-black mr-1">
        <use xlink:href="#arrowBack"></use>
      </svg>
    </router-link>
    <h1 class="font-medium ml-4">Pick your Coffee</h1>
  </header>
  <coffees-list></coffees-list>
</template>

<script>
import CoffeesList from "../components/coffees/CoffeesList.vue";
export default {
  components: {
    CoffeesList,
  },
};
</script>