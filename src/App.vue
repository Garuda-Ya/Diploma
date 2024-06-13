<template>
<div class = "wrapper">
    <Header/>
    <div class = "content">
        <ConferenceNavBar/>
        <router-view></router-view>
    </div>
    <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import ConferenceNavBar from '@/components/NavBar/BaseNavBar.vue'

export default {
    components:{
        Header,
        Footer,
        ConferenceNavBar,
    },

}
</script>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    height:100vh;
}
.content{
    display: flex;
    flex-grow:1;
    flex-direction: column;

    align-self: center;
    max-width: 1200px;
    width: 100%;
}
</style>