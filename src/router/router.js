import { createRouter, createWebHistory, createMemoryHistory } from "vue-router"

import Authorisation from "@/views/Authorisation.vue";
import Registration from "@/views/Registration.vue";
import ConferenceArticles from "@/views/ConferenceArticles.vue";
import About from "@/views/About.vue";
const routes = [
    {
        path:'/',
        name: 'home',
        component: ConferenceArticles
    },
    {
        path:'/authorisation',
        name: 'auth',
        component: Authorisation
    },
    {
        path:'/registration',
        name: 'registration',
        component: Registration
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