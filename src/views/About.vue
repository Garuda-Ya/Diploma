<template>
    <ConferenceNavBar/>
    <h1>Информация о нас</h1>
</template>

<script>
import ConferenceNavBar from '@/components/NavBar/ConferenceNavBar.vue'

export default {
    components:{
        ConferenceNavBar,
    },
}
</script>

<style scoped>
h1{
    color:black;
    background-color: rgb(135, 190, 135);
}
</style>