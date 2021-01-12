 <template>
  <li class="border border-gray px-8 pb-7 my-3 mx-4 max-w-lg">
    <router-link :to="{ path: '/coffees/brews/' + this.id }">
      <header class="my-9">
        <h1 class="font-extrabold text-xl">{{ title }}</h1>
        <p class="text-sm text-gray-500 font-semibold">{{ location }}</p>
      </header>
      <article>
        <p class="my-6 text-gray-500">
          {{ description }}
        </p>
        <section class="flex flex-row pt-5">
          <ul class="flex flex-col mr-12">
            <li class="mb-4">
              <h2 class="text-gray-400">PROCESS</h2>
              <p class="text-base">{{ process }}</p>
            </li>
            <li>
              <h2 class="text-gray-400">VARIETIES</h2>
              <p>{{ varieties }}</p>
            </li>
          </ul>
          <ul class="flex flex-col">
            <li class="mb-4">
              <h2 class="text-gray-400">ROAST PROFILE</h2>
              <p>{{ roastProfile }}</p>
            </li>
            <li>
              <h2 class="text-gray-400">COUNTRY</h2>
              <p>{{ country }}</p>
            </li>
          </ul>
        </section>
      </article>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    location: String,
    description: String,
    process: String,
    varieties: String,
    roastProfile: String,
    country: String,
  },
};
</script>