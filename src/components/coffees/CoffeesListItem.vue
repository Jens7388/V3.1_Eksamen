 <template>
  <li class="border border-gray px-8 pb-7 my-3 mx-4 max-w-lg">
    <router-link to="/coffees/brews">
      <header class="my-9">
        <h1 class="font-extrabold text-xl">CALAHUTE ALTO</h1>
        <p class="text-sm text-gray-500 font-semibold">Nordhavn Coffee</p>
      </header>
      <article>
        <p class="my-6 text-gray-500">
          Very smooth with a full and round body accompanied by notes of dried
          fruit and ripe banana, rounded by a mild acidity reminicent of tart
          fuit.
        </p>
        <section class="flex flex-row pt-5">
          <ul class="flex flex-col mr-12">
            <li class="mb-4">
              <h2 class="text-gray-400">PROCESS</h2>
              <p class="text-base">Washed</p>
            </li>
            <li>
              <h2 class="text-gray-400">VARIETIES</h2>
              <p>Castilo, Caturra</p>
            </li>
          </ul>
          <ul class="flex flex-col">
            <li class="mb-4">
              <h2 class="text-gray-400">ROAST PROFILE</h2>
              <p>Medium</p>
            </li>
            <li>
              <h2 class="text-gray-400">COUNTRY</h2>
              <p>Guatemala</p>
            </li>
          </ul>
        </section>
      </article>
    </router-link>
  </li>
</template>