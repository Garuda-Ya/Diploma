<template>
    <div class="auth-fields">
        <div class="login field-container">
            <p>Логин</p>
            <input 
                type="text" 
                placeholder="Введите логин"
                :value="login"
                @input="$emit('update:login',$event.target.value)"
            />
        </div>
        <div class="password field-container">
            <p>Пароль</p>
            <input
                type="text" 
                placeholder="Введите пароль"
                :value="password"
                @input="$emit('update:password',$event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    props:{
        login: String,
        password: String,
    },
    emits:['update:login','update:password'],
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

    margin-bottom:35px;
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