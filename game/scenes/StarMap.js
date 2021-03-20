import * as THREE from 'three'

import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'

import star from '~/assets/game/star.png'
import planet from '~/assets/game/planet.png'

const starCount = 12000
const starBoxMaxX = 2000
const starBoxMaxY = 600
const starBoxMaxZ = 2000

function createStars(scene) {
  const starSprite = new THREE.TextureLoader().load(star)

  const starMaterial = new THREE.PointsMaterial({
    size: 0.7,
    map: starSprite,
    transparent: true,
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

  const stars = new THREE.Points(starGeo, starMaterial)
  scene.add(stars)
}

function createSystems(scene, systems) {
  const planetSprite = new THREE.TextureLoader().load(planet)
  const planetMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 5,
    map: planetSprite,
    transparent: true,
  })

  const locations = []
  // const labels = []
  const planetGeo = new THREE.BufferGeometry()
  for (const system of systems) {
    for (const location of system.locations) {
      locations.push(location.x)
      locations.push(10)
      locations.push(location.y)
    }
  }

  planetGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(locations, 3)
  )

  const planets = new THREE.Points(planetGeo, planetMaterial)
  scene.add(planets)
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
      const labelDiv = document.createElement('div')
      labelDiv.className = 'font-semibold cursor-pointer'
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
