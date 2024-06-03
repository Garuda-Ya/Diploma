import './assets/main.css'
//import components from '@/components'
import router from './router/router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router).mount('#app')
