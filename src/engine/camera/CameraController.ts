// src/engine/CameraController.ts
import * as THREE from 'three';

export class CameraController {
    private camera: THREE.PerspectiveCamera;
    private domElement: HTMLElement;

    private moveSpeed = 0.15;
    private lookSpeed = 0.002;

    private keys: Record<string, boolean> = {};
    private pitch = 0;
    private yaw = 0;
    private isLocked = false;

    constructor(camera: THREE.PerspectiveCamera, domElement: HTMLElement) {
        this.camera = camera;
        this.domElement = domElement;
        this.initEventListeners();
    }

    private initEventListeners() {
        // 键盘控制
        window.addEventListener('keydown', (e) => (this.keys[e.key.toLowerCase()] = true));
        window.addEventListener('keyup', (e) => (this.keys[e.key.toLowerCase()] = false));

        // 鼠标锁定
        this.domElement.addEventListener('click', () => {
            this.domElement.requestPointerLock();
        });

        document.addEventListener('pointerlockchange', () => {
            this.isLocked = document.pointerLockElement === this.domElement;
        });

        // 鼠标移动
        document.addEventListener('mousemove', (event) => {
            if (!this.isLocked) return;

            this.yaw -= event.movementX * this.lookSpeed;
            this.pitch -= event.movementY * this.lookSpeed;

            // 限制上下视角范围
            this.pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.pitch));
        });
    }

    update() {
        // 使用四元数或欧拉角设置相机旋转
        this.camera.rotation.order = 'YXZ'; // 设置旋转顺序
        this.camera.rotation.y = this.yaw;
        this.camera.rotation.x = this.pitch;

        // 计算移动方向
        const direction = new THREE.Vector3();
        this.camera.getWorldDirection(direction);

        // 水平移动（忽略Y轴）
        const horizontalDirection = new THREE.Vector3(direction.x, 0, direction.z).normalize();
        const right = new THREE.Vector3();
        right.crossVectors(horizontalDirection, new THREE.Vector3(0, 1, 0)).normalize();

        // 移动
        if (this.keys['w']) this.camera.position.addScaledVector(horizontalDirection, this.moveSpeed);
        if (this.keys['s']) this.camera.position.addScaledVector(horizontalDirection, -this.moveSpeed);
        if (this.keys['a']) this.camera.position.addScaledVector(right, -this.moveSpeed);
        if (this.keys['d']) this.camera.position.addScaledVector(right, this.moveSpeed);

        // 垂直移动
        if (this.keys[' ']) 
            this.camera.position.y += this.moveSpeed; // 空格上升
        if (this.keys['shift']) 
            this.camera.position.y -= this.moveSpeed; // Shift下降
    }
}