// src/engine/Steve.ts
import * as THREE from 'three';

/**
 * Steve 模型类 - 完整还原 Minecraft 皮肤 UV 贴图
 */
export class Steve extends THREE.Group {
    private texture: THREE.Texture;
    private material: THREE.MeshBasicMaterial;

    constructor(textureUrl: string) {
        super();

        // 加载贴图
        this.texture = new THREE.TextureLoader().load(textureUrl);
        this.texture.magFilter = THREE.NearestFilter;
        this.texture.minFilter = THREE.NearestFilter;

        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
            side: THREE.FrontSide
        });

        // 按照原版比例创建身体部位
        this.add(this.createHead());
        this.add(this.createBody());
        this.add(this.createArm(true));  // 右手
        this.add(this.createArm(false)); // 左手
        this.add(this.createLeg(true));  // 右腿
        this.add(this.createLeg(false)); // 左腿
    }

    /** 创建头部 */
    private createHead(): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(8, 8, 8);
        this.setHeadUV(geometry); // 头部 UV 区域
        const mesh = new THREE.Mesh(geometry, this.material);
        mesh.position.set(0, 20, 0);
        return mesh;
    }

    /** 创建身体 */
    private createBody(): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(8, 12, 4);
        this.setBodyUV(geometry); // 身体 UV
        const mesh = new THREE.Mesh(geometry, this.material);
        mesh.position.set(0, 10, 0);
        return mesh;
    }

    /** 创建手臂 */
    private createArm(isRight: boolean): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(4, 12, 4);
        this.setArmUV(geometry); // 手臂 UV
        const mesh = new THREE.Mesh(geometry, this.material);
        mesh.position.set(isRight ? -6 : 6, 10, 0);
        return mesh;
    }

    /** 创建腿部 */
    private createLeg(isRight: boolean): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(4, 12, 4);
        this.setLegUV(geometry); // 腿部 UV
        const mesh = new THREE.Mesh(geometry, this.material);
        mesh.position.set(isRight ? -2 : 2, -2, 0);
        return mesh;
    }

    /**
     * 设置头部 UV 映射
     */
    private setHeadUV(geometry: THREE.BoxGeometry) {
        const uvAttr = geometry.getAttribute('uv');
        if (!uvAttr || !(uvAttr instanceof THREE.BufferAttribute)) return;

        const uvs: number[] = [];
        const texWidth = 64;
        const texHeight = 64;

        // 头部 UV 映射 (8x8 像素区域)
        const headUVs = {
            front: { u1: 8, v1: 8, u2: 16, v2: 16 },
            back: { u1: 24, v1: 8, u2: 32, v2: 16 },
            top: { u1: 8, v1: 0, u2: 16, v2: 8 },
            bottom: { u1: 16, v1: 0, u2: 24, v2: 8 },
            right: { u1: 0, v1: 8, u2: 8, v2: 16 },
            left: { u1: 16, v1: 8, u2: 24, v2: 16 }
        };

        this.generateBoxUVs(uvs, headUVs, texWidth, texHeight);
        this.applyUVs(uvAttr, uvs);
    }

    /**
     * 设置身体 UV 映射
     */
    private setBodyUV(geometry: THREE.BoxGeometry) {
        const uvAttr = geometry.getAttribute('uv');
        if (!uvAttr || !(uvAttr instanceof THREE.BufferAttribute)) return;

        const uvs: number[] = [];
        const texWidth = 64;
        const texHeight = 64;

        // 身体 UV 映射 (8x12 像素区域)
        const bodyUVs = {
            front: { u1: 20, v1: 20, u2: 28, v2: 32 },
            back: { u1: 32, v1: 20, u2: 40, v2: 32 },
            top: { u1: 28, v1: 16, u2: 36, v2: 20 },
            bottom: { u1: 32, v1: 16, u2: 40, v2: 20 },
            right: { u1: 16, v1: 20, u2: 20, v2: 32 },
            left: { u1: 28, v1: 20, u2: 32, v2: 32 }
        };

        this.generateBoxUVs(uvs, bodyUVs, texWidth, texHeight);
        this.applyUVs(uvAttr, uvs);
    }

    /**
     * 设置手臂 UV 映射
     */
    private setArmUV(geometry: THREE.BoxGeometry) {
        const uvAttr = geometry.getAttribute('uv');
        if (!uvAttr || !(uvAttr instanceof THREE.BufferAttribute)) return;

        const uvs: number[] = [];
        const texWidth = 64;
        const texHeight = 64;

        // 手臂 UV 映射 (4x12 像素区域)
        const armUVs = {
            front: { u1: 44, v1: 20, u2: 48, v2: 32 },
            back: { u1: 52, v1: 20, u2: 56, v2: 32 },
            top: { u1: 48, v1: 16, u2: 52, v2: 20 },
            bottom: { u1: 52, v1: 16, u2: 56, v2: 20 },
            right: { u1: 40, v1: 20, u2: 44, v2: 32 },
            left: { u1: 48, v1: 20, u2: 52, v2: 32 }
        };

        this.generateBoxUVs(uvs, armUVs, texWidth, texHeight);
        this.applyUVs(uvAttr, uvs);
    }

    /**
     * 设置腿部 UV 映射
     */
    private setLegUV(geometry: THREE.BoxGeometry) {
        const uvAttr = geometry.getAttribute('uv');
        if (!uvAttr || !(uvAttr instanceof THREE.BufferAttribute)) return;

        const uvs: number[] = [];
        const texWidth = 64;
        const texHeight = 64;

        // 腿部 UV 映射 (4x12 像素区域)
        const legUVs = {
            front: { u1: 4, v1: 20, u2: 8, v2: 32 },
            back: { u1: 12, v1: 20, u2: 16, v2: 32 },
            top: { u1: 8, v1: 16, u2: 12, v2: 20 },
            bottom: { u1: 12, v1: 16, u2: 16, v2: 20 },
            right: { u1: 0, v1: 20, u2: 4, v2: 32 },
            left: { u1: 8, v1: 20, u2: 12, v2: 32 }
        };

        this.generateBoxUVs(uvs, legUVs, texWidth, texHeight);
        this.applyUVs(uvAttr, uvs);
    }

    /**
     * 应用 UV 坐标到几何体
     */
    private applyUVs(uvAttr: THREE.BufferAttribute, uvs: number[]) {
        for (let i = 0; i < uvs.length; i += 2) {
            const u = uvs[i];
            const v = uvs[i + 1];

            // 添加安全检查，确保 u 和 v 不是 undefined
            if (u === undefined || v === undefined) continue;

            // 确保索引是整数
            const vertexIndex = Math.floor(i / 2);
            uvAttr.setXY(vertexIndex, u, v);
        }
        uvAttr.needsUpdate = true;
    }

    /**
     * 生成立方体 UV 坐标
     */
    private generateBoxUVs(
        uvs: number[],
        faceUVs: { [face: string]: { u1: number; v1: number; u2: number; v2: number } },
        texWidth: number,
        texHeight: number
    ) {
        const faces = ['front', 'back', 'top', 'bottom', 'right', 'left'];

        for (const face of faces) {
            const faceData = faceUVs[face];
            if (!faceData) continue;

            const { u1, v1, u2, v2 } = faceData;

            // 转换为 0-1 范围的 UV 坐标
            const uMin = u1 / texWidth;
            const uMax = u2 / texWidth;
            const vMin = 1 - v2 / texHeight; // 翻转 V 坐标
            const vMax = 1 - v1 / texHeight;

            // 每个面 2 个三角形 (6 个顶点)
            // 三角形 1
            uvs.push(uMin, vMax);
            uvs.push(uMax, vMax);
            uvs.push(uMin, vMin);

            // 三角形 2
            uvs.push(uMax, vMax);
            uvs.push(uMax, vMin);
            uvs.push(uMin, vMin);
        }
    }
}