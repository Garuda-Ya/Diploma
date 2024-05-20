import { createRouter, createWebHistory, createMemoryHistory } from "vue-router"
import Authorisation from "@/views/Authorisation.vue";
import ConferenceArticles from "@/views/ConferenceArticles.vue";
import About from "@/views/About.vue";
const routes = [
    {
        path:'/',
        name: 'home',
        component: ConferenceArticles
    },
    {
        path:'/auth',
        name: 'auth',
        component: Authorisation
    },
    {
        path:'/about',
        name: 'about',
        component: About
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router; 