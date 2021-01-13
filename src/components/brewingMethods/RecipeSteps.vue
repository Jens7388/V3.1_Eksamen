<template>
  <li class="my-3">
    <h3 class="text-gray-600 text-xs">STEP 1</h3>
    <p class="text-gray-400 text-xl">{{ stepOne }}</p>
  </li>
  <li class="my-3">
    <h3 class="text-gray-600 text-xs">STEP 2</h3>
    <p class="text-gray-400 text-xl">{{ stepTwo }}</p>
  </li>
  <li class="my-3">
    <h3 class="text-gray-600 text-xs">STEP 3</h3>
    <p class="text-gray-400 text-xl">{{ stepThree }}</p>
  </li>
  <li class="my-3">
    <h3 class="text-gray-600 text-xs">STEP 4</h3>
    <p class="text-gray-400 text-xl">{{ stepFour }}</p>
  </li>
  <li class="my-3">
    <h3 class="text-gray-600 text-xs">STEP 5</h3>
    <p class="text-gray-400 text-xl">{{ stepFive }}</p>
  </li>
  <li class="my-3">
    <h3 class="text-gray-600 text-xs">STEP 6</h3>
    <p class="text-gray-400 text-xl">{{ stepSix }}</p>
  </li>
</template>

<script>
export default {
  props: {
    stepOne: String,
    stepTwo: String,
    stepThree: String,
    stepFour: String,
    stepFive: String,
    stepSix: String,
  },
};
</script>