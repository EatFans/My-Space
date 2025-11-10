<template>
  <div class="container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, render } from 'vue';
import * as THREE from 'three';
import blockTextureUrl from '/assets/textures/blocks/cobblestone.png';
import gold_ore_textureUrl from '/assets/textures/blocks/gold_ore.png';
import steveTextureUrl from '/assets/textures/entity/steve.png';
import { CameraController } from '@/engine/camera/CameraController';
import { Sky } from 'three/examples/jsm/Addons.js';

const canvas = ref<HTMLCanvasElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let cube: THREE.Mesh;
let cube2: THREE.Mesh;
let animationId: number;

let cameraController: CameraController;

function createCube(textureUrl: string, x: number, y: number) {
  const geometry = new THREE.BoxGeometry();
  const texture = new THREE.TextureLoader().load(textureUrl);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  const material = new THREE.MeshBasicMaterial({ map: texture });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  cube.position.y = y;
  return cube;
}

function createSteve(textureUrl: string): THREE.Group {
  const group = new THREE.Group();
  const texture = new THREE.TextureLoader().load(textureUrl);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;

  const material = new THREE.MeshBasicMaterial({ map: texture });

  // 创建身体部件
  const head = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
  head.position.set(0, 1.5, 0);

  const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.5), material);
  body.position.set(0, 0.25, 0);

  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.5), material);
  armR.position.set(-0.75, 0.25, 0);

  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.5), material);
  armL.position.set(0.75, 0.25, 0);

  const legR = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.5), material);
  legR.position.set(-0.25, -1.25, 0);

  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.5, 0.5), material);
  legL.position.set(0.25, -1.25, 0);

  group.add(head, body, armR, armL, legR, legL);

  return group;
}

function resizeRenderer() {
  if (!canvas.value) return;
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

interface SkyParameters {
  turbidity: number;
  rayleigh: number;
  mieCoefficient: number;
  mieDirectionalG: number;
  elevation: number;    // 太阳高度角
  azimuth: number;      // 太阳方位角
}

function createSky(scene: THREE.Scene, parameters: SkyParameters): Sky {
  const sky = new Sky();
  sky.scale.setScalar(450000);

  const sun = new THREE.Vector3();

  const skyUniforms = sky.material.uniforms as {
    turbidity: { value: number };
    rayleigh: { value: number };
    mieCoefficient: { value: number };
    mieDirectionalG: { value: number };
    sunPosition: { value: THREE.Vector3 };
    up: { value: THREE.Vector3 };
  };

  // 设置uniforms
  skyUniforms.turbidity.value = parameters.turbidity;
  skyUniforms.rayleigh.value = parameters.rayleigh;
  skyUniforms.mieCoefficient.value = parameters.mieCoefficient;
  skyUniforms.mieDirectionalG.value = parameters.mieDirectionalG;

  // 计算太阳位置
  const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
  const theta = THREE.MathUtils.degToRad(parameters.azimuth);
  sun.setFromSphericalCoords(1, phi, theta);
  skyUniforms.sunPosition.value.copy(sun);

  skyUniforms.up.value = new THREE.Vector3(0, 1, 0);

  scene.add(sky);
  return sky;
}

function init(){
    // 添加网格辅助线
    const gridHelper = new THREE.GridHelper(100, 100, 0x000000, 0x000000);
    gridHelper.material.opacity = 0.2;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
   
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

  // 创建相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  // camera.position.z = 5;
  camera.position.set(0, 2, 5); // 改成俯视角度

  cameraController = new CameraController(camera,renderer.domElement);

  // 创建添加立体坐标轴
  const materialX = new THREE.LineBasicMaterial({ color: 0xff0000 }); // 红色 X
  const materialY = new THREE.LineBasicMaterial({ color: 0x00ff00 }); // 绿色 Y
  const materialZ = new THREE.LineBasicMaterial({ color: 0x0000ff }); // 蓝色 Z

  const pointsX = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 0, 0)];
  const pointsY = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 5, 0)];
  const pointsZ = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 5)];

  const geometryX = new THREE.BufferGeometry().setFromPoints(pointsX);
  const geometryY = new THREE.BufferGeometry().setFromPoints(pointsY);
  const geometryZ = new THREE.BufferGeometry().setFromPoints(pointsZ);

  const lineX = new THREE.Line(geometryX, materialX);
  const lineY = new THREE.Line(geometryY, materialY);
  const lineZ = new THREE.Line(geometryZ, materialZ);

  scene.add(lineX, lineY, lineZ);

  const floorGeometry = new THREE.PlaneGeometry(10, 10); // 宽度和高度

  init();

  const skyParameters: SkyParameters = {
    turbidity: 5,
    rayleigh: 2,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.8,
    elevation: 25,
    azimuth: 180,
  };

  const sky = createSky(scene, skyParameters);
  scene.add(sky);

  // 创建立方体
  cube = createCube(blockTextureUrl, -1,2);
  cube2 = createCube(gold_ore_textureUrl, 1,2);
  scene.add(cube, cube2);

  // 创建史蒂夫实体
  const steve = createSteve(steveTextureUrl);
  scene.add(steve);
  steve.position.x = 4;
  steve.position.y = 2;

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

    cameraController.update();

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

canvas {
  display: block;
  width: 100%;
  height: 100%;
  cursor: crosshair;
  user-select: none;
}

canvas:focus {
  outline: none;
}

</style>