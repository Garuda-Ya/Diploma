import { createRouter, createWebHistory, createMemoryHistory } from "vue-router"

import Authorisation from "@/views/RegAndAuth/Authorisation.vue";
import Registration from "@/views/RegAndAuth/Registration.vue";
import ConferenceArticles from "@/views/Articles/ConferenceArticles.vue";
import About from "@/views/About.vue";
import SingleArticle from "@/views/Articles/SingleArticle.vue";
import MainPage from "@/views/Conference/MainPage.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import Profile from "@/views/Profile.vue";
import Particapants from "@/views/Particapants.vue";
const routes = [
    {
        path:'/',
        name: 'home',
        component: About
    },
    {
        path:'/auth',
        name: 'authorisation',
        component: Authorisation
    },
    {
        path:'/reg',
        name: 'registration',
        component: Registration
    },
    {
        path:'/about',
        name: 'articles',
        component: ConferenceArticles
    },
    {
        path:'/conference',
        name: 'conference',
        component: MainPage
    },
    {
        path:`/articles/:id`,
        name: 'single-article',
        component: SingleArticle
    },
    {
        path:`/profile`,
        name: 'user-profile',
        component: Profile
    },
    {
        path:`/particapants`,
        name: 'particapants',
        component: Particapants
    },
    /*
    { 
        path: '/404', 
        name: 'pageNotFound',
        component: PageNotFound 
    },
    { 
        path: "/:catchAll(.*)",
        redirect: '/404'
    },
    */
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router; 