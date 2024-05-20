<template>
    <ConferenceNavBar/>
    <h1>Это авторизация</h1>
</template>

<script>
import ConferenceNavBar from '@/components/ConferenceNavBar.vue'

export default {
    components:{
        ConferenceNavBar,
    },
}
</script>

<style scoped>
h1{
    color:black;
    background-color: blue;
}
</style>