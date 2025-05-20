<template>
  <div class="relative w-full h-screen">
    <!-- Message d'orientation mobile -->
    <div
      v-if="isPortrait"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-center p-6"
    >
      <p class="text-2xl mb-4">📱 Veuillez tourner votre appareil</p>
      <p class="text-lg">Ce jeu se joue en mode paysage</p>
    </div>

    <div :class="{'portrait': isPortrait}" class="quit-game">
      <a href="/">Quitter le jeu</a>
    </div>

    <!-- Score display -->
    <div v-if="!gameOver && !isPortrait" class="drop-shadow">
      <div>Score: {{ score }}</div>
    </div>

    <!-- Game Over / Restart -->
    <div v-if="gameOver" class="score-game-over">
      <div class="block">
        <h2 class="text-3xl mb-4">💥 GAME OVER - Vous avez été touché !</h2>
        <p class="final-score">Score final : {{ score }}</p>
        <button @click="restartGame" class="restart-game">Rejouer</button>
      </div>
    </div>

    <div ref="gameContainer" class="w-full h-full"></div>

    <!-- Mobile controls -->
    <div class="block-button-mobile">
      <button @touchstart="moveLeft" class="w-16 h-16 bg-white/20 text-white text-3xl rounded-full">←</button>
      <button @touchstart="moveRight" class="w-16 h-16 bg-white/20 text-white text-3xl rounded-full">→</button>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue'
  import * as THREE from 'three'

  const gameContainer = ref(null)
  let scene, camera, renderer
  let player, obstacles = []
  let animationId
  let clock = new THREE.Clock()
  let loader = new THREE.TextureLoader()

  const score = ref(0)
  const gameOver = ref(false)
  const isPortrait = ref(false)
  let isGamePaused = false

  let speed = 0.05
  let spawnRate = 0.02
  let difficultyTimer = null

  function checkOrientation() {
    const portrait = window.matchMedia("(orientation: portrait)").matches
    isPortrait.value = portrait

    if (portrait && !isGamePaused) {
      pauseGame()
    } else if (!portrait && isGamePaused && !gameOver.value) {
      resumeGame()
    }
  }

  function onWindowResize() {
    if (!camera || !renderer) return

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function pauseGame() {
    cancelAnimationFrame(animationId)
    isGamePaused = true
  }

  function resumeGame() {
    isGamePaused = false
    animate()
  }

  function init() {
    score.value = 0
    gameOver.value = false
    obstacles = []
    speed = 0.05
    spawnRate = 0.02
    isGamePaused = false

    scene = new THREE.Scene()
    loader.load('/assets/images/bugDodger/background.jpg', texture => {
      scene.background = texture
    })

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    gameContainer.value.innerHTML = ''
    gameContainer.value.appendChild(renderer.domElement)

    loader.load('/assets/images/bugDodger/player.png', texture => {
      const geometry = new THREE.PlaneGeometry(1, 1)
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
      player = new THREE.Mesh(geometry, material)
      player.position.y = -3
      scene.add(player)
    })

    const light = new THREE.AmbientLight(0xffffff)
    scene.add(light)

    window.addEventListener('keydown', handleKey)

    difficultyTimer = setInterval(() => {
      speed += 0.01
      spawnRate = Math.min(spawnRate + 0.005, 0.1)
    }, 10000)

    checkOrientation()
    if (!isPortrait.value) animate()
  }

  function spawnObstacle() {
    loader.load('/assets/images/bugDodger/bug.png', texture => {
      const geometry = new THREE.PlaneGeometry(0.6, 0.6)
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
      const bug = new THREE.Mesh(geometry, material)
      bug.position.x = (Math.random() - 0.5) * 10
      bug.position.y = 4
      scene.add(bug)
      obstacles.push(bug)
    })
  }

  function animate() {
    if (isPortrait.value || isGamePaused || gameOver.value) return
    animationId = requestAnimationFrame(animate)
    clock.getDelta()

    obstacles.forEach((bug, index) => {
      bug.position.y -= speed

      if (bug.position.y < -5) {
        scene.remove(bug)
        obstacles.splice(index, 1)
        score.value += 1
      }

      if (player &&
          Math.abs(bug.position.x - player.position.x) < 0.5 &&
          Math.abs(bug.position.y - player.position.y) < 0.5) {
        endGame()
      }
    })

    if (Math.random() < spawnRate) spawnObstacle()
    renderer.render(scene, camera)
  }

  function handleKey(e) {
    if (!player) return
    if (e.key === 'ArrowLeft') moveLeft()
    if (e.key === 'ArrowRight') moveRight()
  }

  function clampPlayerPosition() {
    if (!player) return
    const limit = 4.5
    player.position.x = Math.max(-limit, Math.min(limit, player.position.x))
  }

  function moveLeft() {
    if (player) {
      player.position.x -= 0.3
      clampPlayerPosition()
    }
  }
  function moveRight() {
    if (player) {
      player.position.x += 0.3
      clampPlayerPosition()
    }
  }

  function endGame() {
    cancelAnimationFrame(animationId)
    clearInterval(difficultyTimer)
    gameOver.value = true
    isGamePaused = false
  }

  function restartGame() {
    cancelAnimationFrame(animationId)
    clearInterval(difficultyTimer)
    window.removeEventListener('keydown', handleKey)
    init()
    onWindowResize()
  }

  onMounted(() => {
    init()
    window.addEventListener("orientationchange", checkOrientation)
    window.addEventListener("resize", checkOrientation)
    window.addEventListener('resize', onWindowResize)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(animationId)
    clearInterval(difficultyTimer)
    window.removeEventListener('keydown', handleKey)
    window.removeEventListener("orientationchange", checkOrientation)
    window.removeEventListener("resize", checkOrientation)
    window.removeEventListener('resize', onWindowResize)
  })
</script>

<style lang="scss" scoped>
  @forward "../../scss/miniProject/bugDodger.scss"
</style>
