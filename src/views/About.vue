<template>
    <ConferenceNavBar/>
    <h1>Информация о нас</h1>
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
    background-color: green;
}
</style>