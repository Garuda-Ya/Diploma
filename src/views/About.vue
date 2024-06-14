<template>
    <h1>Информация о нас</h1>
    <section class="card">
        <img src="/src/assets/images/conference5.jpg" alt="">
        <div class="text">
            <h2>Удобный менеджмент</h2>
            <p>Наш сервис поможет вам уследить за всеми поступающими статьями</p>
            <p>Сотни статей удобно можно изучить и оценить используя предоставляемый вам функционал</p>
        </div>
    </section>
    <section class="card">
        <div class="text">
            <h2>Легкое взаимодействие </h2>
            <p>Во время работы могут возникнуть вопросы, решение которых необходимо обсуждать с участниками.</p>
            <p>Благодаря НаучКонф вы можете решить их воспользовавшись функцией чата. И ускорить процесс</p>
        </div>
        <img src="/src/assets/images/conference3.jpg" alt="">
    </section>
    <section class="card">
        <img src="/src/assets/images/conference1.jpg" alt="">
        <div class="text">
            <h2>Удобный менеджмент</h2>
            <p>Наш сервис поможет вам уследить за всеми поступающими статьями</p>
            <p>Сотни статей удобно можно изучить и оценить используя предоставляемый вам функционал</p>
        </div>
    </section>
</template>

<script>

export default {
    components:{
    },
}
</script>

<style scoped>
.card{
    width: 100%;
    margin-bottom: 30px;
    
    display: flex;
    justify-content: space-evenly;

    background-color: #FFE0B8;
    box-shadow: -6px 10px 8px 0px rgba(34, 60, 80, 0.2);
    border-radius: 30px;
}
.card:nth-child(2n){
    background-color: #FFC883;
    box-shadow: 6px 10px 8px 0px rgba(34, 60, 80, 0.2);
}
img{
    width:360px;
    width:360px;
    max-height:100%; 
    max-width:100%;
    margin: 20px 0;

    object-fit: cover;
    border: 3px solid black;
}
.text{
    width: 50%;
    padding-top: 30px;

    display: flex;
    flex-direction: column;
}
h1{
    margin: 25px 0 15px 6px;
        
    text-align: center;
    font-size: 40px;
}
h2{
    margin: 10px 10px 20px 10px;
    
    font-size: 28px;
    text-align: center;
}
p{
    padding: 0 20px;
    
    font-style: italic;
    font-size: 20px;
    text-indent: 30px;
}
</style>