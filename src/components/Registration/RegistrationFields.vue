<template>
    <div class="auth-fields">
        <div class="login field-container">
            <p>Логин</p>
            <input type="text" placeholder="Введите логин">
        </div>
        <div class="password field-container">
            <p>Пароль</p>
            <input type="password" placeholder="Введите пароль">
        </div>
        <div class="password field-container">
            <p>Повторите пароль</p>
            <input type="password" placeholder="Введите пароль">
        </div>
        <div class="password field-container">
            <p>Электронная почта</p>
            <input type="email" placeholder="Введите почту">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.auth-fields{
    width:300px;

    display:flex;
    flex-direction: column;
    align-items: center;
}
.field-container{
    width: 100%;

    display:flex;
    flex-direction: column;

    margin-bottom:30px;
}
p{
    margin-bottom: 8px;
    margin-left: 8px;
}
input{
    height:30px;

    padding: 2px 16px;

    border: 1px solid gray;
    border-radius: 15px;
}
</style>