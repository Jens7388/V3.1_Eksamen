<template>
  <ul>
    <brews-list-item
      v-for="brew in allBrews"
      :key="brew.id"
      :id="brew.id"
      :icon="brew.icon"
      :title="brew.title"
      :location="brew.location"
      :beanAmount="brew.beanAmount"
      :waterAmount="brew.waterAmount"
      :profile="brew.profile"
      :time="brew.time"
    ></brews-list-item>
  </ul>
</template>
  <script>
import BrewsListItem from "./BrewsListItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    BrewsListItem,
  },
  methods: {
    ...mapActions(["fetchBrews"]),
  },
  computed: {
    ...mapGetters(["allBrews"]),
  },
  provide: {
    deleteBrew: function (id) {
      this.deleteLatestBrew(id);
    },
  },
  created() {
    this.fetchBrews();
  },
};
</script>