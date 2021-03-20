import { Scene } from 'phaser'

import star from '@/assets/game/star.png'
import planet from '@/assets/game/planet.png'

export default class StarMap extends Scene {
  constructor(systems) {
    super({ key: 'StarMap' })
    this.systems = systems
  }

  preload() {
    this.load.image('star', star)
    this.load.image('planet', planet)
  }

  cam = null

  star = null
  texture = null

  max = 400
  distance = 300
  speed = 6
  xx = []
  yy = []
  zz = []

  create() {
    this.cam = this.cameras.main
    this.texture = this.add.renderTexture(0, 0, 800, 600).setOrigin(0)

    this.star = this.add.image(400, 300, 'star')

    this.texture.draw('star', 200, 200)

    // Create star coordinates
    for (let i = 0; i < this.max; i++) {
      this.xx[i] = Math.floor(Math.random() * 800) - 400
      this.yy[i] = Math.floor(Math.random() * 600) - 300
      this.zz[i] = Math.floor(Math.random() * 1700) - 100
    }

    this.input.on('pointermove', (p) => {
      if (!p.isDown) return

      this.cam.scrollX -= (p.x - p.prevPosition.x) / this.cam.zoom
      this.cam.scrollY -= (p.y - p.prevPosition.y) / this.cam.zoom
    })
  }

  update() {}
}
