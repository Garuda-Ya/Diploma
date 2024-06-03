<template>
    <div class="background-style">
        <form >
            <h1>Регистрация</h1>
            
        </form>
    </div>
</template>

<script>
export default {
    components:{
    },
}
</script>

<style scoped>
form{
    display: flex;
    flex-flow: column;
    align-items: center;

    width: 440px;
    height: 600px;

    margin: auto;
    padding-top:40px;
    border: 2px solid black;
    border-radius: 100px;
    background-color: rgb(211, 211, 255);
}
h1{
    color:black;
    
}
.background-style{
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: auto;
}
</style>