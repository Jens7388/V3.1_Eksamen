<template>
  <div class="h-full max-w-5xl my-5 mx-auto border"> 
    <router-view></router-view>
  </div>
   <icons> </icons>
</template>

<script>
import Icons from "./components/Icons.vue";
export default {
  components: {
    Icons,
  },
};
</script>