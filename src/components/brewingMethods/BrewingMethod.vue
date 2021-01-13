<template>
  <li class="flex flex-row border border-gray px-3 py-5 my-3 max-w-lg">
      <router-link
      :to="{
        path: '/coffees/' + this.coffeeId + '/brews/' + this.id + '/recipe/',
      }"
    >
    <svg class="h-14 w-14 text-black">
      <use :xlink:href="icon"></use>
    </svg>
    <div>
      <header>
        <h1 class="font-bold">{{title}}</h1>
      </header>
      <ul class="mt-1 flex flex-row">
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#bean"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{beanAmount}}g</p>
        </li>
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#water"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{waterAmount}}ml</p>
        </li>
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#grind"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{profile}}</p>
        </li>
        <li class="flex flex-row mr-3">
          <svg class="h-3 w-3 text-grayer mr-1">
            <use xlink:href="#time"></use>
          </svg>
          <p class="font-extralight text-xs text-grayer">{{time}}</p>
        </li>
      </ul>
    </div>
      </router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    icon: String,
    title: String,
    beanAmount: Number,
    waterAmount: Number,
    profile: String,
    time: Number,
    isFavourite: Boolean,
    coffeeId: Number
  },
};
</script>