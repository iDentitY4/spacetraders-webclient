<template>
  <div v-if="location">
    <h1 class="text-xl font-semibold">Location</h1>
    <p>{{ location.symbol }}</p>
    <p>{{ location.type }}</p>
    <p>{{ location.name }}</p>
    <div v-if="dockedShips">
      <h2 class="text-lg font-semibold">Ships</h2>
      <p v-for="(ship, i) in dockedShips" :key="i">
        {{ ship.shipId }} | {{ ship.username }} | {{ ship.shipType }}
      </p>
    </div>
    <div v-if="marketplace">
      <h2 class="text-lg font-semibold">Marketplace</h2>
      <p v-for="(item, i) in marketplace" :key="i">
        {{ item.symbol }} | $ {{ item.pricePerUnit }} | Volume:
        {{ item.volumePerUnit }} | Available: {{ item.quantityAvailable }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch() {
    const { store, params } = this.$nuxt.context
    await store.dispatch('locations/getLocation', { symbol: params.symbol })
    await store.dispatch('locations/getDockedShips', { symbol: params.symbol })
    await store.dispatch('locations/getMarketplace', { symbol: params.symbol })
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
