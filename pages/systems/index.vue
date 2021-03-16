<template>
  <div class="m-6">
    <div v-for="(system, i) in systems" :key="i">
      <div class="text-lg font-semibold">{{ system.name }}</div>
      <div v-for="(location, j) in system.locations" :key="j">
        <div>
          {{ location.symbol }} | {{ location.name }} | {{ location.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('systems/getSystems')
  },
  computed: {
    ...mapGetters('systems', ['systems']),
  },
}
</script>

<style></style>
