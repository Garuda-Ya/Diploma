<template>
    <Header/>
    <div className = "content">
        <router-view></router-view>
    </div>
    <Footer/>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    components:{
        Header,
        Footer,
    },

}
</script>

<style scoped>
.content{
    min-height: 89vh;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
</style>