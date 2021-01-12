<template>
  <div class="flex-grow max-w-lg">
    <h3 class="text-grayed mx-6 mt-8">LATEST BREWS</h3>
    <ul class="mx-6">
      <li class="flex flex-row border-gray-300 border p-5">
        <svg class="h-14 w-14 text-black">
          <use xlink:href="#infusion"></use>
        </svg>
        <div>
          <header>
            <h1 class="font-bold">BEZA</h1>
            <p class="font-extralight text-xs text-grayed">Impact Roasters</p>
          </header>
          <ul class="mt-1 flex flex-row">
            <li class="flex flex-row">
              <svg class="h-5 w-5 text-grayed">
                <use xlink:href="#bean"></use>
              </svg>
              <p class="font-extralight text-xs text-grayed">40g</p>
            </li>
            <li class="flex flex-row">
              <svg class="h-5 w-5 text-grayed">
                <use xlink:href="#water"></use>
              </svg>
              <p class="font-extralight text-xs text-grayed">500ml</p>
            </li>
            <li class="flex flex-row">
              <svg class="h-5 w-5 text-grayed">
                <use xlink:href="#grind"></use>
              </svg>
              <p class="font-extralight text-xs text-grayed">Coarse</p>
            </li>
            <li class="flex flex-row">
              <svg class="h-5 w-5 text-grayed">
                <use xlink:href="#time"></use>
              </svg>
              <p class="font-extralight text-xs text-grayed">12 timer</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>