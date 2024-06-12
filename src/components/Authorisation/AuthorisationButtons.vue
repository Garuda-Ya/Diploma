<template>
    <div class = "auth-buttons">
        <button type='button' v-on:click="loginTo">Войти</button>
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
        loginTo(){
            this.$store.commit('login');
            this.$router.push('/')
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