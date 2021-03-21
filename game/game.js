import * as THREE from 'three'

import { MapControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer'
import { Interaction } from 'three.interaction'

import starmap from '~/game/scenes/starmap.js'

let camera, controls, scene, renderer, labelRenderer

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

export default function createGame({ container, width, height, systems }) {
  scene = starmap({ systems })

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)

  container.appendChild(renderer.domElement)

  labelRenderer = new CSS2DRenderer()
  labelRenderer.setSize(window.innerWidth, window.innerHeight)
  labelRenderer.domElement.className = 'z-10'
  labelRenderer.domElement.style.position = 'absolute'
  labelRenderer.domElement.style.top = '0px'
  container.appendChild(labelRenderer.domElement)

  // camera = new THREE.OrthographicCamera(
  //   width / -2,
  //   width / 2,
  //   height / 2,
  //   height / -2,
  //   1,
  //   1000
  // )
  camera = new THREE.PerspectiveCamera(
    60, // Vertial FOV
    window.innerWidth / window.innerHeight, // Aspect ratio
    1, // Frustum near plane
    6000 // Frustum far plane
  )
  camera.position.set(0, 0, 0)

  controls = new MapControls(camera, labelRenderer.domElement)
  controls.target.set(0, 0, 0)

  controls.enableZoom = true
  controls.enablePan = true
  controls.enableRotate = false

  controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05

  controls.screenSpacePanning = false

  controls.minDistance = 100
  controls.maxDistance = 500

  // eslint-disable-next-line no-unused-vars
  const interaction = new Interaction(renderer, scene, camera)

  // controls.maxPolarAngle = Math.PI / 2

  window.addEventListener('resize', resize)

  return {
    start: animate,
  }
}

function animate() {
  requestAnimationFrame(animate)

  controls.update() // only required if controls.enableDamping = true, or if controls.autoRotate = true

  render()
}

function render() {
  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
}
