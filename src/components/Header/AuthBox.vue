<template>
    <div class="auth-box" v-if="$store.state.isAuthorised==true">
        <router-link to="/">
            <a class = "auth-btn" href="#" @click="loginTo">Выйти</a>
        </router-link>
        <router-link to="/profile"><a class = "registr-btn" href="#">Профиль</a></router-link>
    </div>
    <div class = "auth-box" v-else>    
        <router-link to="/auth"><a class = "auth-btn" href="#">Авторизация</a></router-link>
        <router-link to="/reg"><a class = "registr-btn" href="#">Регистрация</a></router-link>
    </div>
</template>

<script>
export default {
    methods:{
        loginTo(){
            this.$store.commit('logout');
            $router.push('/about')
        }
    }
}
</script>

<style scoped>
.auth-box{
    margin-right: 65px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 500; 
}
.auth-btn{
    width: 100px;
    height: 28px;
    margin-right: 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    

    border-bottom: 2px solid black;
    border-radius: 0 0 10px 10px;
}
.auth-btn:hover{
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 10px;
    transform: translateY(-2px) translateX(1px);
}
.auth-btn:active{
    background-color: #cbcbcb;
}
.registr-btn{
    width: 129px;
    height: 29px;
    background-color: #ffe0b8;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    border-radius: 10px;
}
.registr-btn:hover{
    transition: 0.1s ease-out;
    transform: translateY(-2px) translateX(1px);
}
.registr-btn:active{
    background-color: #FFC883;
}
</style>