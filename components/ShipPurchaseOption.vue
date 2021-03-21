<template>
  <div class="flex justify-between items-center p-1">
    <nuxt-link
      :to="`/locations/${purchaseOption.location}`"
      class="flex-1 text-xl font-bold hover:text-blue-600"
    >
      {{ purchaseOption.location }}
    </nuxt-link>
    <div class="flex-1 items-center space-x-2">
      <button
        class="py-1 px-2 font-semibold bg-gray-700 w-full text-white rounded-lg shadow-sm hover:text-white hover:bg-blue-800 hover:shadow-lg"
        @click="purchase()"
        @mouseover="hover = true"
        @mouseout="hover = false"
      >
        <div v-if="hover" class="inline-flex items-center justify-between">
          <svg
            class="w-8 h-8 mr-2 flex-initial"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <span class="font-semibold text-2xl flex-initial">Buy</span>
        </div>

        <div v-else class="inline-flex items-center justify-between">
          <svg
            class="w-8 h-8 mr-2 flex-initial"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span class="flex-initial font-semibold text-2xl">
            {{ purchaseOption.price.toLocaleString() }}
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    purchaseOption: {
      type: Object,
      default: null,
    },
    shipType: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    async purchase() {
      try {
        await this.$store.dispatch('ships/buyShip', {
          location: this.purchaseOption.location,
          type: this.shipType,
        })
      } catch (e) {
        //
      }
    },
  },
}
</script>

<style></style>
