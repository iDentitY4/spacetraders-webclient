<template>
  <div class="flex flex-wrap flex-row py-6 sm:px-6 lg:px-8">
    <template v-if="$fetchState.pending">
      <ship-offer-skeleton v-for="i in 8" :key="i" />
    </template>
    <template v-else>
      <ship-offer v-for="(ship, i) in availableShips" :key="i" :ship="ship" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShipOffer from '~/components/ShipOffer.vue'
import ShipOfferSkeleton from '~/components/skeletons/ShipOfferSkeleton.vue'

export default {
  components: { ShipOffer, ShipOfferSkeleton },
  async fetch() {
    const { store } = this.$nuxt.context
    await store.dispatch('ships/getAvailableShips')
  },
  computed: {
    ...mapGetters('ships', ['availableShips']),
  },
}
</script>

<style></style>
