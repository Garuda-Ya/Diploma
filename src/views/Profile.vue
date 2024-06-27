<template>
    <h1>Это вы! User = {{ this.id }}</h1>
</template>

<script>

export default {
    components:{
    },
    props:{
        id: String,
    }
}
</script>

<style scoped>
h1{
    margin: 25px 0 25px 6px;
    
    text-align: left;
}
</style>