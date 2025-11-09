<template>
  <div class="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import blockTextureUrl from '/assets/textures/blocks/cobblestone.png';
import gold_ore_textureUrl from '/assets/textures/blocks/gold_ore.png';

const canvas = ref<HTMLCanvasElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let cube: THREE.Mesh;
let cube2: THREE.Mesh;
let animationId: number;

function createCube(textureUrl: string, x: number) {
  const geometry = new THREE.BoxGeometry();
  const texture = new THREE.TextureLoader().load(textureUrl);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  return cube;
}

function resizeRenderer() {
  if (!canvas.value) return;
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

onMounted(() => {
  if (!canvas.value) return;

  // 创建渲染器并绑定 canvas
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true
  });

  // 创建场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  // 创建相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // 创建立方体
  cube = createCube(blockTextureUrl, -1);
  cube2 = createCube(gold_ore_textureUrl, 1);
  scene.add(cube, cube2);

  // 设置初始大小
  resizeRenderer();

  // 监听窗口变化
  window.addEventListener('resize', resizeRenderer);

  // 动画循环
  const animate = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.01;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  renderer.dispose();
  window.removeEventListener('resize', resizeRenderer);
});
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
}

.container {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}


</style>