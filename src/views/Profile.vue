<template>
    <ConferenceNavBar/>
    <h1>Это вы!</h1>
</template>

<script>
import ConferenceNavBar from '@/components/NavBar/BaseNavBar.vue';

export default {
    components:{
        ConferenceNavBar,
    },
}
</script>

<style scoped>
h1{
    margin: 25px 0 25px 6px;
    
    text-align: left;
}
</style>