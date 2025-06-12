/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-05 17:14:49
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-23 15:13:54
 * @FilePath: /components/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
       {
      path: '/components/RightList',
      name: 'RightList',
      component: () => import('@/views/Blog/components/RightList-test.vue'),
    },
  ],
  mode: 'history',
})

export default router
