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
            /*axios.get('/localhost:8000/getUser/login',
            {
                params: {
                login: this.login,
                password: this.password,
                }
            }).then{
                userID = result
            }
            */
            var userID  = 0;
            var userRole = 0;
            if(this.login=="Andrew"){
                userID = 1;
                userRole = 1;
            }
            else{
                userID = 4;
                userRole = 4;
            }
            
            this.$store.commit('login',
            {
                id: userID,
                role: userRole
            });
            this.$router.push(`/profile/${userID}`);
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