<template>
  <div class="flex flex-wrap flex-row py-6 sm:px-6 lg:px-8">
    <ship v-for="(ship, i) in myShips" :key="i" :ship="ship" />
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
