import { createRouter, createWebHistory, createMemoryHistory } from "vue-router"

//#region  Components import
import Authorisation from "@/views/RegAndAuth/Authorisation.vue";
import About from "@/views/About.vue";
import ConferenceArticles from "@/views/Articles/ConferenceArticles.vue";
import FAQ from "@/views/FAQ.vue";
import MainPage from "@/views/Conference/MainPage.vue";
import Particapants from "@/views/Particapants.vue";
import Profile from "@/views/Profile.vue";
import Registration from "@/views/RegAndAuth/Registration.vue";
import Reviews from "@/views/Reviews.vue";
import SingleArticle from "@/views/Articles/SingleArticle.vue";
//#endregion
import PageNotFound from "@/views/PageNotFound.vue";

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
        path:'/articles',
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
    {
        path:`/faq`,
        name: 'faq',
        component: FAQ,
    },
    {
        path:`/reviews`,
        name: 'reviews',
        component: Reviews,
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