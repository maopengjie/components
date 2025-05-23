/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-06 09:56:12
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-22 21:22:24
 * @FilePath: /components/src/router/demos.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// router/demos.ts
const demoModules = import.meta.glob('@/components/**/test.vue') // 匹配所有 test.vue 文件

const demoRoutes = Object.keys(demoModules).map((path) => {
  // 提取组件目录名（去掉 `/test.vue` 部分）
  const name = path.match(/\/([^/]+)\/test\.vue$/)?.[1] || 'demo'

  // 生成路由路径，保持原始大小写格式
  const routePath = path
    .replace(/^.*\/components\//, '/') // 替换公共部分为 `/`
    .replace(/\/test\.vue$/, '') // 去除 `/test.vue`
    .replace(/\/([a-z])/g, (match, p1) => `/${p1.toUpperCase()}`) // 保证每个路径的首字母大写
// /components/文件名
  return {
    path: '/components'+routePath,
    name: name, // 路由名称为组件的目录名称
    component: demoModules[path], // 动态导入组件
  }
})

export default demoRoutes
