<template>
    <h1>Информация о конференции</h1>
    <h2>Название - ДипломБГТУ</h2>
    <p>Количество участников - 50 человек</p>
    <p>Количество участников ПК - 10 человек</p>
    
    <div class = "abc">
        <h2>Описание:</h2>
        <h3>Данная конфернеция была создана для демонстрации во время защиты дипломной работы<br>Конец описания</h3>
    </div>
    
</template>

<script>

export default {
    components:{
    },
}
</script>

<style scoped>
h1{
    margin: 25px 0 25px 6px;
    
    text-align: left;
}
h2{
    padding-bottom: 20px;
}
p{
    width:700px;
    border:1px solid black;
    padding: 15px 10px;
    font-size: 16px;
}
.abc{
    width:700px;
    padding: 20px 10px;
    border: 1px solid black;
}
.abc h2{
    margin-bottom: 20px;
    border-bottom: 1px solid black;
}
.abc h3{
    font-size: 16px;
}
</style>