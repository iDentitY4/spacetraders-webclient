<template>
  <div>
    <div
      v-if="myShips.length"
      class="flex flex-wrap flex-row py-6 sm:px-6 lg:px-8"
    >
      <ship v-for="(ship, i) in myShips" :key="i" :ship="ship" />
    </div>
    <div v-else class="flex-1 flex flex-col">
      <div class="font-semibold text-3xl">You don't own any ships yet.</div>
      <div class="text-xl text-gray-300">
        <p>
          Go to the
          <nuxt-link
            to="/ships/shop"
            class="inline-flex items-center text-blue-300"
          >
            <svg
              class="w-4 h-4 mr-1"
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
            shop
          </nuxt-link>
          to purchase one.
        </p>
        <p>
          If you don't have enough money, you can request a
          <nuxt-link to="/loans" class="inline-flex items-center text-blue-300">
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            loan
          </nuxt-link>
          at the bank.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ship from '~/components/Ship'

export default {
  components: { Ship },
  async fetch() {
    const { store } = this.$nuxt.context
    await store.dispatch('ships/getMyShips')
  },
  computed: {
    ...mapGetters('ships', ['myShips']),
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
}
</script>

<style></style>
