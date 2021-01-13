<template>
  <div class="my-5 mx-4">
    <header class="flex flex-row my-8 ml-3">
      <router-link to="/coffees">
        <svg class="h-6 w-6 text-black mr-1">
          <use xlink:href="#arrowBack"></use>
        </svg>
      </router-link>
      <h1 class="font-medium ml-4">How do you want to brew?</h1>
    </header>
    <div class="mx-5">
      <brewing-method-list></brewing-method-list>
    </div>
  </div>
</template>

<script>
import BrewingMethodList from '../components/brewingMethods/BrewingMethodList.vue';
export default {
  components: {
    BrewingMethodList,
  }
};
</script>