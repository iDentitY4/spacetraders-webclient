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
      systems: this.systems,
      width: this.width,
      height: this.height,
    })
    this.game.start()
  },
}
</script>

<style></style>
