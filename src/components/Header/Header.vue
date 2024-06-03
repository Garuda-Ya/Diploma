<template>
    <header>
        <nav>
            <LogoBox/>
            <Auth-Box/>
        </nav>
    </header>
</template>

<script>
import AuthBox from '@/components/Header/AuthBox.vue'
import LogoBox from './LogoBox.vue'
export default {
    components:{
        AuthBox,
        LogoBox,
    }
}
</script>

<style scoped>
nav{
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #F3F3F3;
}
</style>