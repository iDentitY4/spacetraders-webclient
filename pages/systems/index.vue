<template>
  <game v-if="systems && systems.length" :systems="systems"></game>
</template>

<script>
import { mapGetters } from 'vuex'
import Game from '~/components/Game'

export default {
  components: { Game },
  layout: 'game',
  async fetch() {
    const { store } = this.$nuxt.context
    await store.dispatch('systems/getSystems')
  },
  computed: {
    ...mapGetters('systems', ['systems']),
  },
}
</script>

<style></style>
