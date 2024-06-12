<template>
    <ConferenceNavBar/>
    <h1>Информация о нас</h1>
    <section class="card">
        <div class = "picture">
            <img src="/src/assets/images/conference1.jpg" alt="">
        </div>
        <div class="text">
            <h2>
                Удобное средство для организации конференций.
            </h2>
            <p>
                Помощь в приёме и проверке присланных статей.
            </p>
        </div>
    </section>
    <section class="card">
        <div class="text">
            <h2>
                Удобное средство для организации конференций.
            </h2>
            <p>
                Помощь в приёме и проверке присланных статей.
            </p>
        </div>
        <div class = "picture">
            <img src="/src/assets/images/conference1.jpg" alt="">
        </div>
    </section>
    <section class="card">
        <div class = "picture">
            <img src="/src/assets/images/conference1.jpg" alt="">
        </div>
        <div class="text">
            <h2>
                Удобное средство для организации конференций.
            </h2>
            <p>
                Помощь в приёме и проверке присланных статей.
            </p>
        </div>
    </section>
</template>

<script>
import ConferenceNavBar from '@/components/NavBar/BaseNavBar.vue';

export default {
    components:{
        ConferenceNavBar,
    },
}
</script>

<style scoped>
.card{
    width: 100%;
    margin-top: 30px;
    padding: 8px;

    display: flex;
    justify-content: space-evenly;

    border: 1px solid gray;
}
.picture{
    width: 40%;
}
img{
    max-height:100%; 
    max-width:100%;
}
.text{
    width: 50%;

    border: 1px solid gray;
}
h1{
    margin: 25px 0 15px 6px;
        
    text-align: left;
}
</style>