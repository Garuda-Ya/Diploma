<template>
    <ConferenceNavBar/>
    <h1>Присланные статьи</h1>
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
    <table>
        <tr><th>#</th><th>Название</th><th>Автор</th><th>Тема</th><th>О статье</th></tr> <!--ряд с ячейками заголовков-->
        <tr v-for="article in articles" :article = "article" :key = "article.id">
            <td>{{article.id}}</td>
            <td>{{article.title}}</td>
            <td>{{article.authors.toString()}}</td>
            <td>{{article.topics.toString()}}</td>
            <td>
                <button
                    @click="$router.push(`/articles/${article.id}`)">
                    Просмотр
                </button>
            </td>
        </tr> <!--ряд с ячейками тела таблицы-->
    </table>
</template>

<script>
import ConferenceNavBar from '@/components/NavBar/BaseNavBar.vue'

export default {
    components:{
        ConferenceNavBar,
    },
    data(){
        return{
            articles:[
                {id:1,authors:['Irina', 'Evgeny'],title:"Digital Earth: current trends",topics:"Research"},
                {id:2,authors:['Evgeny'],title:"Digital Style: current trends",topics:"Research"},
                {id:3,authors:['Dmitriy','Nastya','Denis'],title:"Current trends of Agroculture",topics:"Research"},
                {id:4,authors:['Dmitriy'],title:"Importance of importance",topics:"Research"},
                {id:5,authors:['Denis'],title:"How we managed to cope with hope",topics:"Abstract"},
                {id:6,authors:['Nastya'],title:"Real problems of ecolife",topics:"Abstract"},
            ]
        }
    }
}
</script>

<style scoped>
.main-container{
    max-width: 1200px;
    width: 100%;

    display:flex;
    flex-direction: column;
    align-self: center;
}
h1{
    margin: 25px 0 25px 6px;
    
    text-align: left;
}
table {
    width: 100%;

    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;

    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);

    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
}
th{
    font-size:14pt;
    text-align: center;
}
td {
    text-align: center;
    max-width: 100px;
    font-size:12pt;
    display: table-cell;
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
    
}
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