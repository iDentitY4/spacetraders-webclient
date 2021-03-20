<template>
  <div ref="game"></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'game',
  data() {
    return {
      game: null,
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  async fetch({ store }) {
    await store.dispatch('systems/getSystems')
  },
  computed: {
    ...mapGetters('systems', ['systems']),
  },
  mounted() {
    this.game = this.$game({
      width: this.width,
      height: this.height,
      parent: this.$refs.game,
    })
  },
  methods: {
    createLocations() {
      for (const system of this.systems) {
        for (const location of system.locations) {
          console.log(location)
        }
      }
    },
    dragStart() {},
    dragStop() {},
    dragMove() {},
    animate(event) {},
  },
}
</script>

<style></style>
