<template>
    <div class = "auth-buttons">
        <button v-on:click="request()">Войти</button>
        <router-link to="/reg">
            <a href="">Нет аккаунта? Зарегистрируйтесь!</a>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        login: String,
        password: String,
    },
    methods:{
        request(){
            alert("This is your login:" + this.login + "\nThis is your password:" + this.password);
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

    margin-top:35px;
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