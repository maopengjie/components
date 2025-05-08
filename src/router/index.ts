import { createRouter, createWebHistory } from 'vue-router'
import demoRoutes from './demos' // 动态导入的路由
import home from './home'
console.log('home', home);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...demoRoutes, // 动态导入的路由
    ...home,
    {
      path: '/components',
      name: 'abcomponentout',
      component: () => import('@/views/Component/index.vue'),
    },
  ],
  mode: 'history',
})

export default router
