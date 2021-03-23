<template>
  <div
    class="bg-contain bg-no-repeat bg-center h-56 my-2 pixelart"
    :style="`background-image: url(${image});`"
  ></div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      ships: {
        extraSmall: require('~/assets/ships/model-2.png'),
        small: require('~/assets/ships/model-3.png'),
        medium: require('~/assets/ships/model-6.png'),
        large: require('~/assets/ships/model-4.png'),
        extraLarge: require('~/assets/ships/model-5.png'),
        extraExtraLarge: require('~/assets/ships/model-1.png'),
      },
    }
  },
  computed: {
    image() {
      if (this.size <= 100) {
        return this.ships.extraSmall
      } else if (this.size <= 250) {
        return this.ships.small
      } else if (this.size <= 500) {
        return this.ships.medium
      } else if (this.size <= 1000) {
        return this.ships.large
      } else if (this.size <= 5000) {
        return this.ships.extraLarge
      } else {
        return this.ships.extraExtraLarge
      }
    },
  },
}
</script>

<style>
.pixelart {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
</style>
