<template>
    <ConferenceNavBar/>
    <h1>Научная конференция 2024</h1>
    <div class="group-container">
        <div class="first-row">
            <div class="group">
                <h2>Статьи</h2>
                <ul>
                    <li><a href="">Все статьи</a></li>
                    <li><a href="">Проверенные</a></li>
                    <li><a href="">На проверке</a></li>
                </ul>
            </div>
            <div class="group">
                <h2>Рецензии</h2>
                <ul>
                    <li><a href="">Все рецензии</a></li>
                    <li><a href="">Проверенные</a></li>
                    <li><a href="">Назначенные</a></li>
                    <li><a href="">Не назначенные</a></li>
                </ul>
            </div>
        </div>
        <div class="second-row">
            <div class="group right-element">
            <h2>Состав</h2>
            <ul>
                <li><a href="">Участники конференции</a></li>
                <li><a href="">Участники приемной комиссии</a></li>
                <li><a href="">Роли</a></li>
            </ul>
        </div>
        <div class="group right-element">
            <h2>Настройки</h2>
            <ul>
                <li><a href="">Настройки конференции</a></li>
                <li><a href="">Настройки рецензий</a></li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import ConferenceNavBar from '@/components/NavBar/BaseNavBar.vue';

export default {
    components:{
        ConferenceNavBar,
    },
}
</script>

<style>
.group-container{
    padding-bottom: 180px;

    display: flex;
    flex-flow: flex wrap;
    
    border: 3px solid gray;
}
.group{
    width: 280px;
    height:200px;

    flex-basis: 30%;

    margin-top:40px;
    margin-left: 50px;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
}
.right-element{
    margin-left: 200px;
}
h1{
    margin:35px 0;
}
h2{
    padding-bottom: 4px;
    margin-bottom: 10px;
}
h2:after{
    content:'';
    display: block;
    position: absolute;
    width:165px;
    border-bottom: 3px solid gray;
}
ul{
    padding-left:16px;
}
li{
    padding-top:10px;
    list-style-type: circle;
}
</style>