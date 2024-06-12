<template>
    <div class="background-style">
        <form >
            <h1>Регистрация</h1>
            <RegistrationFields/>
            <RegistrationButtons/>
        </form>
    </div>
</template>

<script>
import RegistrationButtons from '@/components/Registration/RegistrationButtons.vue'
import RegistrationFields from '@/components/Registration/RegistrationFields.vue'


export default {
    components:{
        RegistrationButtons,
        RegistrationFields,
    },
}
</script>

<style scoped>
form{
    width: 440px;
    height: 605px;

    display: flex;
    flex-flow: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 100px;
    background: rgb(255,235,208);
    background: linear-gradient(90deg, rgba(255,235,208,1) 15%, rgba(238,199,147,0.4990371148459384) 50%, rgba(255,235,208,1) 85%);
}  
h1{
    margin:30px 0;
}
.background-style{
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: auto;
}
</style>