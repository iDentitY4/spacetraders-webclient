<template>
  <div class="flex flex-wrap flex-row py-6 sm:px-6 lg:px-8">
    <ship v-for="(ship, i) in availableShips" :key="i" :ship="ship" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ship from '~/components/Ship'

export default {
  components: [Ship],
  async fetch({ store }) {
    await store.dispatch('ships/getAvailableShips')
  },
  computed: {
    ...mapGetters('ships', ['availableShips']),
  },
}
</script>

<style></style>
