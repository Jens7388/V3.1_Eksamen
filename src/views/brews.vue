<template>
  <div class="my-5 mx-4">
    <header class="flex flex-row my-8 ml-3">
      <router-link to="/">
        <svg class="h-6 w-6 text-black mr-1">
          <use xlink:href="#arrowBack"></use>
        </svg>
      </router-link>
      <h1 class="font-medium ml-4">How do you want to brew?</h1>
    </header>
    <div class="mx-5">
      <h2 class="text-gray-400">FAVOURITE RECIPE</h2>
      <brews-list-item class="mb-16"></brews-list-item>
      <h2 class="text-gray-400">TRY A NEW RECIPE</h2>
      <brews-list></brews-list>
    </div>
  </div>
</template>

<script>
import BrewsList from "../components/brews/BrewsList.vue";
import BrewsListItem from "../components/brews/BrewsListItem.vue";
export default {
  components: {
    BrewsList,
    BrewsListItem,
  },
};
</script>