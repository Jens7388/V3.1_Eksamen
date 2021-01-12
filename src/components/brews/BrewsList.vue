<template>
  <ul>
      <brews-list-item></brews-list-item>
  </ul>
</template>
  <script>
    import BrewsListItem from "./BrewsListItem.vue";
    export default {
      components: {
        BrewsListItem,
      },
    };
  </script>