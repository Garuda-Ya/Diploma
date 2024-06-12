<template>
    <div class = 'tools-block'>
        <p>
            Перейти к статье 
            <input type="number" min=0 max='this.articles.length-1'>
            <button>Перейти</button>
        </p>
        <p>
            Поиск
            <input type="text" min=0 max='this.articles.length-1'>
            <button>Перейти</button>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

input{
    width:80px;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
p{
    height: 80px;
    width: 350px;

    padding: 10px 5px;
    margin-right:15px;
    
    border: 1px solid black;
}
button{
    width: 100px;
    margin-left: 25px;
}
.tools-block{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    border:1px solid black;
}
</style>