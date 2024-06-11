<template>
<div class = "asd">
    <Header/>
    <div class = "content">
        <router-view></router-view>
    </div>
    <Footer/>
</div>
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
.asd{
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