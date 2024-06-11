<template>
    <div class = "auth-buttons">
        <button v-on:click="request()">
            Зарегистрироваться
        </button>
        <router-link to="/auth">
            <a href="">Уже есть аккаунт? Авторизируйтесь!</a>
        </router-link>
    </div>
</template>

<script>
export default {
    methods:{
        request(){
            alert(123);
        }
    }
}
</script>

<style scoped>
.auth-buttons{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
}
button{
    width: 200px;
    height: 30px;

    border: 1px solid gray;
    border-radius: 15px;

    cursor:pointer;
}
a{
    margin-top:15px;
    font-size: 0.9em;
    font-weight: 400;
}
</style>