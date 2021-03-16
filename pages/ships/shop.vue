<template>
  <div class="flex flex-wrap flex-row py-6 sm:px-6 lg:px-8">
    <ShipOffer v-for="(ship, i) in availableShips" :key="i" :ship="ship" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShipOffer from '~/components/ShipOffer'

export default {
  components: { ShipOffer },
  async fetch({ store }) {
    await store.dispatch('ships/getAvailableShips')
  },
  computed: {
    ...mapGetters('ships', ['availableShips']),
  },
}
</script>

<style></style>
