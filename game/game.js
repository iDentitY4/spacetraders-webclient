import Phaser from 'phaser'
import StarMap from './scenes/StarMap'
import Store from './plugins/Store'

export default (parent, width, height) => {
  const config = {
    type: Phaser.AUTO,
    parent,
    width,
    height,
    pixelArt: true,
    scene: [StarMap],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 300,
        },
      },
    },
    plugins: {
      global: [{ key: 'Store', plugin: Store, start: true }],
    },
  }
  return new Phaser.Game(config)
}
