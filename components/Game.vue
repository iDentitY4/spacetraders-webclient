<template>
  <div ref="game" class="cursor-pointer z0"></div>
</template>

<script>
export default {
  props: {
    systems: {
      type: Array,
      default: null,
    },
    ships: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      game: null,
      width: window.innerWidth,
      height: window.innerHeight,
    }
  },
  mounted() {
    this.game = this.$game({
      container: this.$refs.game,
      width: this.width,
      height: this.height,
      systems: this.systems,
      ships: this.ships,
    })
    this.game.start()
  },
}
</script>

<style>
.location-label {
  @apply text-white;
  @apply font-semibold;
  @apply cursor-pointer;
}

.location-label:hover {
  @apply text-blue-400;
}
</style>
