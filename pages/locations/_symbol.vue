<template>
  <div v-if="location" class="flex flex-wrap flex-row py-6 sm:px-6 lg:px-8">
    <div id="info" class="max-w-sm w-full sm:w-1/2 lg:w-1/4 py-6 px-3">
      <div class="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <div
          class="bg-contain bg-no-repeat bg-center h-64 p-4"
          :style="`background-image: url(${require('~/assets/images/locations/' +
            location.type.toLowerCase() +
            '.png')}`"
        ></div>
        <div class="p-4">
          <p class="tracking-wide text-sm font-bold text-gray-400">
            {{ location.symbol }}
          </p>
          <p class="text-3xl text-gray-100 font-bold">{{ location.name }}</p>
          <p class="text-sm font-semibold text-gray-500">
            Type: {{ location.type }}
          </p>
        </div>
        <div class="p-4 border-t border-gray-500">
          <nuxt-link
            to="/systems"
            class="bg-blue-500 text-white hover:bg-blue-800 rounded-md text-lg font-bold py-4 px-6 ml-2 flex items-center"
          >
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              ></path>
            </svg>
            Space map
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex-1 py-6 px-3">
        <div class="text-3xl text-gray-100 font-bold">Marketplace</div>
        <div v-if="marketplaceAvailable">
          <div v-if="!loadingMarketplace" class="overflow-x-auto">
            <div class="py-2 align-middle min-w-full">
              <div
                class="flex shadow overflow-hidden border-b border-gray-600 sm:rounded-lg"
              >
                <table class="flex-1 divide-y divide-gray-600">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Resource
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price per Unit
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Volume per Unit
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Available units
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-800 divide-y divide-gray-600">
                    <tr v-for="(item, i) in marketplace" :key="i">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center space-x-2">
                          <div class="text-3xl font-semibold text-white">
                            {{ item.symbol }}
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center space-x-2">
                          <svg
                            class="w-8 h-8"
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
                          <div class="text-3xl font-semibold text-white">
                            {{ item.pricePerUnit.toLocaleString() }}
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-3xl font-semibold text-white">
                          {{ item.volumePerUnit.toLocaleString() }}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-3xl font-semibold text-white">
                          {{ item.quantityAvailable.toLocaleString() }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div v-else class="flex justify-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-20 w-20 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
        <div v-else class="flex-1 py-6 px-3">
          <div class="text-2xl font-semibold text-red-400">
            Marketplace not available
          </div>
          <div class="text-lg font-semibold text-gray-400">
            None of your ships is docked here
          </div>
        </div>
      </div>
      <div v-if="dockedShips" class="flex-1 py-6 px-3">
        <div class="overflow-hidden">
          <div class="text-3xl text-gray-100 font-bold">Docked Ships</div>
          <div class="p-4 grid grid-cols-4 gap-4">
            <div
              v-for="(ship, i) in dockedShips"
              :key="i"
              class="flex items-center rounded-md overflow-hidden px-3 py-2"
            >
              <img
                class="h-10 w-10 rounded-full"
                :src="require('~/assets/images/logo.svg')"
                alt=""
              />
              <div class="ml-4">
                <div class="text-xl text-gray-100 font-bold">
                  {{ ship.username }}
                </div>
                <div class="text-gray-300 font-semibold">
                  {{ ship.shipType }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loadingMarketplace: true,
      marketplaceAvailable: true,
    }
  },
  async fetch() {
    const { store, params } = this.$nuxt.context
    await store.dispatch('locations/getLocation', { symbol: params.symbol })
    await store.dispatch('locations/getDockedShips', { symbol: params.symbol })
    try {
      await store.dispatch('locations/getMarketplace', {
        symbol: params.symbol,
      })
    } catch (e) {
      this.marketplaceAvailable = false
    }
    this.loadingMarketplace = false
  },
  computed: {
    ...mapGetters('locations', ['location', 'dockedShips', 'marketplace']),
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  },
}
</script>

<style></style>
