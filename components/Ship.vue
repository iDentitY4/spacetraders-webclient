<template>
  <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
    <div class="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
      <div
        class="bg-cover bg-center h-56 p-4"
        style="
          background-image: url(https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80);
        "
      ></div>
      <div class="p-4">
        <p class="tracking-wide text-sm font-bold text-gray-400">
          {{ ship.manufacturer }} {{ ship.class }}
        </p>
        <p class="text-3xl text-gray-100 font-bold">{{ ship.type }}</p>
      </div>
      <div
        class="flex justify-between p-4 border-t border-gray-600 text-gray-100"
      >
        <div class="flex-initial inline-flex items-center space-x-2">
          <svg
            class="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          <p class="font-semibold text-xl">{{ ship.maxCargo }}</p>
        </div>
        <div class="flex-initial inline-flex items-center space-x-2">
          <svg
            class="w-6 h-6 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
            ></path>
          </svg>
          <p class="font-semibold text-xl">{{ ship.speed }}</p>
        </div>
        <div class="flex-initial inline-flex items-center space-x-2">
          <svg
            class="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
          </svg>
          <p class="font-semibold text-xl">{{ ship.plating }}</p>
        </div>
        <div class="flex-initial inline-flex items-center space-x-2">
          <svg
            class="w-6 h-6 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            ></path>
          </svg>
          <p class="font-semibold text-xl">{{ ship.weapons }}</p>
        </div>
      </div>
      <div class="px-4 pt-3 pb-4 border-t border-gray-300">
        <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">
          Parked at
        </div>
        <div class="flex flex-col space-y-2">
          <nuxt-link
            :to="`/systems/${ship.location}`"
            class="text-xl font-semibold text-white hover:text-blue-600"
          >
            {{ ship.location }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ship: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style></style>
