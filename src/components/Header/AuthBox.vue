<template>
    <div className = "auth-box">    
        <router-link to="/authorisation"><a className = "auth-btn" href="#">Авторизация</a></router-link>
        <router-link to="/registration"><a className = "registr-btn" href="#">Регистрация</a></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.auth-box{
    margin-right: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.auth-btn{
    width: 100px;
    height: 28px;
    margin-right: 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 2px solid black;
    border-radius: 0 0 10px 10px;
}
.auth-btn:hover{
    border: 1px solid black;
    border-bottom: 2px solid black;
    border-radius: 10px;
    transform: translateY(-2px) translateX(1px);
}
.registr-btn{
    width: 129px;
    height: 29px;
    background-color: #FEE4C3;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid black;
    border-radius: 10px;
}
.registr-btn:hover{
    background-color: #FFC883;
    transition: 0.1s ease-out;
    transform: translateY(-2px) translateX(1px);
}
</style>