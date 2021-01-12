<template>
  <li class="flex flex-row border border-gray px-3 py-5 my-3 max-w-lg">
    <svg class="h-14 w-14 text-black">
      <use xlink:href="#infusion"></use>
    </svg>
    <div>
      <header>
        <h1 class="font-bold">BEZA</h1>
        <p class="font-extralight text-xs text-grayed">Impact Roasters</p>
      </header>
      <ul class="mt-1 flex flex-row">
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#bean"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">40g</p>
        </li>
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#water"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">500ml</p>
        </li>
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#grind"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">Coarse</p>
        </li>
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#time"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">12 timer</p>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    beanAmount: Number,
    waterAmount: Number,
    profile: String,
    time: Number,
  },
};
</script>