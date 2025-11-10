import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

/**
 * 路由
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/3d',
    name: 'index',
    component: () => import('@/views/3d/index.vue')
  },

]

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router;