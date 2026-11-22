onload = () =>{
        document.body.classList.remove("container");
};
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 50

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// === PARTICLES ===
const count = 3000
const geometry = new THREE.BufferGeometry()
const positions = new Float32Array(count * 3)

for (let i = 0; i < count; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 50
  positions[i * 3 + 1] = (Math.random() - 0.5) * 50
  positions[i * 3 + 2] = (Math.random() - 0.5) * 50
}

geometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
)

const material = new THREE.PointsMaterial({
  color: 0x00ffff,
  size: 0.3
})

const particles = new THREE.Points(geometry, material)
scene.add(particles)

// === ANIMATE LOOP (INI KUNCINYA) ===
function animate() {
  requestAnimationFrame(animate)

  particles.rotation.y += 0.002
  particles.rotation.x += 0.001

  renderer.render(scene, camera)
}

animate()
