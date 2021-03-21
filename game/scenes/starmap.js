import * as THREE from 'three'

import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'

import star from '~/assets/game/star.png'
import galaxyBackdrop from '~/assets/game/galaxy.jpg'
import planet from '~/assets/game/planet.png'
import moon from '~/assets/game/moon.png'
import nebula from '~/assets/game/nebula.png'
import asteroid from '~/assets/game/asteroid.png'
import wormhole from '~/assets/game/wormhole.png'
import miscObject from '~/assets/game/misc.png'

const starCount = 12000
const starBoxMaxX = 2000
const starBoxMaxY = 600
const starBoxMaxZ = 2000

function createStars(scene) {
  const starSprite = new THREE.TextureLoader().load(star)
  const galaxySprite = new THREE.TextureLoader().load(galaxyBackdrop)

  const starMaterial = new THREE.PointsMaterial({
    size: 0.7,
    map: starSprite,
    transparent: true,
  })

  const galaxyMaterial = new THREE.MeshBasicMaterial({
    map: galaxySprite,
    color: 0x333333,
  })

  const positions = []

  const starGeo = new THREE.BufferGeometry()
  for (let i = 0; i < starCount; i++) {
    positions.push(Math.random() * starBoxMaxX - starBoxMaxX / 2)
    positions.push(Math.random() * starBoxMaxY - starBoxMaxY / 2)
    positions.push(Math.random() * starBoxMaxZ - starBoxMaxZ / 2)
  }
  starGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  )

  const galaxyGeo = new THREE.PlaneGeometry(16000, 9000)

  const stars = new THREE.Points(starGeo, starMaterial)
  scene.add(stars)

  const galaxy = new THREE.Mesh(galaxyGeo, galaxyMaterial)
  galaxy.position.y = -5000
  galaxy.rotation.x = -Math.PI / 2
  scene.add(galaxy)
}

function createSystems(scene, systems) {
  const planetSprite = new THREE.TextureLoader().load(planet)
  const moonSprite = new THREE.TextureLoader().load(moon)
  const nebulaSprite = new THREE.TextureLoader().load(nebula)
  const asteroidSprite = new THREE.TextureLoader().load(asteroid)
  const wormholeSprite = new THREE.TextureLoader().load(wormhole)
  const miscSprite = new THREE.TextureLoader().load(miscObject)

  const planetMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 8,
    map: planetSprite,
    transparent: true,
  })

  const moonMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 3,
    map: moonSprite,
    transparent: true,
  })

  const nebulaMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 20,
    map: nebulaSprite,
    transparent: true,
  })

  const asteroidMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 5,
    map: asteroidSprite,
    transparent: true,
  })

  const wormholeMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 15,
    map: wormholeSprite,
    transparent: true,
  })

  const miscMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 5,
    map: miscSprite,
    transparent: true,
  })

  const planetCoords = []
  const moonCoords = []
  const nebulaCoords = []
  const asteroidCoords = []
  const wormholeCoords = []
  const miscCoords = []

  for (const system of systems) {
    for (const location of system.locations) {
      switch (location.type) {
        case 'PLANET':
        case 'GAS_GIANT':
          planetCoords.push(location.x)
          planetCoords.push(10)
          planetCoords.push(location.y)
          break
        case 'MOON':
          moonCoords.push(location.x)
          moonCoords.push(10)
          moonCoords.push(location.y)
          break
        case 'NEBULA':
          nebulaCoords.push(location.x)
          nebulaCoords.push(10)
          nebulaCoords.push(location.y)
          break
        case 'ASTEROID':
          asteroidCoords.push(location.x)
          asteroidCoords.push(10)
          asteroidCoords.push(location.y)
          break
        case 'WORMHOLE':
          wormholeCoords.push(location.x)
          wormholeCoords.push(10)
          wormholeCoords.push(location.y)
          break
        default:
          miscCoords.push(location.x)
          miscCoords.push(10)
          miscCoords.push(location.y)
          break
      }
    }
  }

  const planetGeo = new THREE.BufferGeometry()
  const moonGeo = new THREE.BufferGeometry()
  const nebulaGeo = new THREE.BufferGeometry()
  const asteroidGeo = new THREE.BufferGeometry()
  const wormholeGeo = new THREE.BufferGeometry()
  const miscGeo = new THREE.BufferGeometry()

  planetGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(planetCoords, 3)
  )

  moonGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(moonCoords, 3)
  )

  nebulaGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(nebulaCoords, 3)
  )

  asteroidGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(asteroidCoords, 3)
  )

  wormholeGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(wormholeCoords, 3)
  )

  miscGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(miscCoords, 3)
  )

  const planets = new THREE.Points(planetGeo, planetMaterial)
  const moons = new THREE.Points(moonGeo, moonMaterial)
  const nebulas = new THREE.Points(nebulaGeo, nebulaMaterial)
  const asteroids = new THREE.Points(asteroidGeo, asteroidMaterial)
  const wormholes = new THREE.Points(wormholeGeo, wormholeMaterial)
  const misc = new THREE.Points(miscGeo, miscMaterial)

  scene.add(planets)
  scene.add(moons)
  scene.add(nebulas)
  scene.add(asteroids)
  scene.add(wormholes)
  scene.add(misc)
}

function createLabels(scene, systems) {
  const labelGeometry = new THREE.BufferGeometry()
  const labelMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
  })
  const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial)
  scene.add(labelMesh)

  for (const system of systems) {
    for (const location of system.locations) {
      const labelDiv = document.createElement('a')
      labelDiv.href = `/locations/${location.symbol}`
      labelDiv.className = 'location-label'
      labelDiv.textContent = location.name
      labelDiv.style.marginTop = '-1em'
      const label = new CSS2DObject(labelDiv)
      label.position.set(location.x, 10, location.y)
      labelMesh.add(label)
    }
  }
}

export default function createScene({ systems }) {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  createStars(scene)
  createSystems(scene, systems)
  createLabels(scene, systems)

  return scene
}
