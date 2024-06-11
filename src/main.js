import './assets/main.css'
//import components from '@/components'
import router from './router/router'
import store from '@/store'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app
    .use(router)
    .use(store)
    .mount('#app')
