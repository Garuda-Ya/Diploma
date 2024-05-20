<template>
    <Header/>
    <div className = "content">
        <router-view></router-view>
    </div>
    <Footer/>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

export default {
    components:{
        Header,
        Footer,
    },

}
</script>

<style scoped>
.content{
    min-height: 860px;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
</style>