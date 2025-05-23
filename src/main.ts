/*
 * @Author: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @Date: 2025-05-05 17:14:49
 * @LastEditors: maopengjie 113440530+maopengjie@users.noreply.github.com
 * @LastEditTime: 2025-05-23 10:38:36
 * @FilePath: /components/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './assets/main.css'
import showMessage from './utils/showMessage'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
import vLoading from './directives/loading.js'
app.directive("loading",vLoading)

app.config.globalProperties.$showMessage = showMessage
window.$showMessage = showMessage
import './mock/index.js' // 引入 mock 数据
// import './api/banner.js' // 引入 api 数据
app.mount('#app')
