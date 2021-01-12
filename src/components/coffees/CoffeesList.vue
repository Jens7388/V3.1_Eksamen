<template>
    <ul class="flex">
        <coffees-list-item></coffees-list-item>
    </ul>
</template>
<script>
    import CoffeesListItem from "./CoffeesListItem.vue";
    export default {
      components: {
        CoffeesListItem,
      },
    };
  </script>