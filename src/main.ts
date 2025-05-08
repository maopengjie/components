import './assets/main.css'
import showMessage from './utils/showMessage'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$showMessage = showMessage
window.$showMessage = showMessage

app.mount('#app')
