<template>
    <h1>Научная конференция 2024</h1>
    <div class="group-container">
        <div class="first-row">
            <div class="group">
                <label>Статьи</label>
                <ul>
                    <li><a href="">Все статьи</a></li>
                    <li><a href="">Проверенные</a></li>
                    <li><a href="">На проверке</a></li>
                </ul>
            </div>
            <div class="group">
                <label>Рецензии</label>
                <ul>
                    <li><a href="">Все рецензии</a></li>
                    <li><a href="">Проверенные</a></li>
                    <li><a href="">Назначенные</a></li>
                    <li><a href="">Неназначенные</a></li>
                </ul>
            </div>
        </div>
        <div class="second-row">
            <div class="group right-element">
            <label>Состав</label>
            <ul>
                <li><a href="">Участники конференции</a></li>
                <li><a href="">Участники приемной комиссии</a></li>
                <li><a href="">Роли</a></li>
            </ul>
        </div>
        <div class="group right-element">
            <label>Настройки</label>
            <ul>
                <li><a href="">Настройки конференции</a></li>
                <li><a href="">Настройки рецензий</a></li>
                <li><a href="">О конференции</a></li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    components:{
    },
}
</script>

<style scoped>
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
.group:hover{
    transition: 200ms ease-in-out;
    box-shadow: 6px 6px 8px 0px rgba(34, 60, 80, 0.2);
}
.right-element{
    margin-left: 200px;
}
h1{
    margin: 25px 0 25px 6px;
    
    text-align: left;
}
label{
    padding-bottom: 4px;
    margin-bottom: 10px;

    font-size: 17pt;
}
label:after{
    content:'';

    position: absolute;
    width:165px;

    display: block;

    border-bottom: 3px solid gray;
}
ul{
    padding-left:16px;
}
li{
    padding-top:12px;
    list-style-type: circle;
}
</style>