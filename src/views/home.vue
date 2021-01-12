<template>
<div class="my-5 mx-4">
  <div class="flex flex-row justify-between">
    <h1 class="text-gray-500 font-bold text-lg">Brewista</h1>
     <svg class="h-8 w-8 text-grayed">
      <use xlink:href="#user" />
    </svg>
  </div>
  
  <brews-list></brews-list>
  <navigation-button></navigation-button>
</div>
  
</template>

<script>
import NavigationButton from "../components/other/NavigationButton.vue";
import BrewsList from "../components/brews/BrewsList.vue"

export default {
  name: "Home",
  components: {
    NavigationButton,
    BrewsList
  }
};
</script>