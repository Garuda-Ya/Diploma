<template>
    <div class="background-style">
        <form class = "auth-form">
            <h1>Авторизация</h1>
            <AuthorisationFields
                v-model:login="value1"
                v-model:password="value2"
            />
            <AuthorisationButtons
                :login = "value1"
                :password = "value2"
            />
        </form>
    </div>
</template>

<script>
import AuthorisationButtons from '@/components/Authorisation/AuthorisationButtons.vue'
import AuthorisationFields from '@/components/Authorisation/AuthorisationFields.vue'
export default {
    components:{
        AuthorisationButtons,
        AuthorisationFields,
    },
    data(){
        return{
            value1: "",
            value2: "",
        }
    }
    
}
</script>

<style scoped>
.auth-form{
    width: 440px;
    height: 440px;

    display: flex;
    flex-flow: column;
    align-items: center;

    border: 2px solid black;
    border-radius: 100px;
    background: rgb(255,235,208);
    background: linear-gradient(90deg, rgba(255,235,208,1) 15%, rgba(238,199,147,0.4990371148459384) 50%, rgba(255,235,208,1) 85%);
}   
.background-style{
    margin: auto;
}
h1{
    margin:35px 0;
}
</style>