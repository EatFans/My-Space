<script setup lang="ts">
import { onMounted, onUnmounted, ref, render } from 'vue';
import * as Three from 'three';
import blockTextureUrl from '/assets/textures/blocks/cobblestone.png';
import gold_ore_textureUrl from '/assets/textures/blocks/gold_ore.png';

const container = ref<HTMLDivElement | null>(null);

let scene: Three.Scene;
let camera: Three.PerspectiveCamera;
let renderer: Three.WebGLRenderer;
let cube: Three.Mesh;
let cube2: Three.Mesh;
let animationId: number;

onMounted(() => {
  if (!container.value)
    return;

  // 创建场景
  scene = new Three.Scene();
  scene.background = new Three.Color(0x4B0082);

  // 创建相机
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5

  // 创建渲染器
  renderer = new Three.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width,height);
  container.value.appendChild(renderer.domElement);

  // 加载图片材质
  const textureLoader = new Three.TextureLoader();
  const texture = textureLoader.load(
    blockTextureUrl,
    () => console.log('加载成功'),
    undefined,
    () => console.error('加载失败')
  );
  texture.magFilter = Three.NearestFilter;  // 放大时保持像素
  texture.minFilter = Three.NearestFilter;  // 缩小时保持像素

  const texture2 = textureLoader.load(
    gold_ore_textureUrl,
  );
  texture2.magFilter = Three.NearestFilter;  // 放大时保持像素
  texture2.minFilter = Three.NearestFilter;  // 缩小时保持像素

  // 创建立方体
  // 创建几何体 geometry
  const geometry = new Three.BoxGeometry();
  const material = new Three.MeshBasicMaterial({
    map: texture
  });
  cube = new Three.Mesh(geometry,material);

  const geometry2 = new Three.BoxGeometry();
  const material2 = new Three.MeshBasicMaterial({
    map: texture2
  });
  cube2 = new Three.Mesh(geometry2,material2);
  
  // 将立方体添加到场景中
  scene.add(cube);
  scene.add(cube2);

  cube.position.set(-1.5, 0, 0)  // 左移
  cube2.position.set(1.5, 0, 0)  // 右移

  const animate = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    cube2.rotation.x += 0.02
    cube2.rotation.y += 0.01

    animationId = requestAnimationFrame(animate);
    renderer.render(scene, camera);
    
  }
  animate();

});

onUnmounted(() => {
  // 释放资源
  cancelAnimationFrame(animationId);
  renderer.dispose();
}); 


</script>

<template>
  <div ref="container" class="canvas-container"></div>
</template>

<style scoped>
.canvas-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
