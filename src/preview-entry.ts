// 预览入口文件
// 该文件是用来预览组件的，通常在开发过程中使用
// src/preview-entry.ts
import { createApp } from 'vue'

// 获取环境变量或命令行参数来动态选择组件
const componentName = import.meta.env.VITE_COMPONENT_NAME || 'Pager' // 默认为 Pager

// 动态导入相应的组件
const component = import(`./components/${componentName}/test.vue`)

component.then((module) => {
  createApp(module.default).mount('#app')
})
