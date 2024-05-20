<template>
    <ConferenceNavBar/>
    <h1>Присланные статьи</h1>
    <div className = 'tools-block'>
        <p style="margin-left:160px">
            Перейти к статье 
            <input type="number" min=0 max='this.articles.length-1'>
            <button>Перейти</button>
        </p>
        <p style="margin-left:auto; margin-right:160px;">
            Сортировать статьи по:
            <select name="123123" id="sort" >
                <option>Названию</option>
                <option>Автору</option>
            </select>
        </p>
    </div>
    
    
    <table>
        <tr><th>#</th><th>Название</th><th>Автор</th><th>Тема</th><th>О статье</th></tr> <!--ряд с ячейками заголовков-->
        <tr v-for="article in articles" :article = "article" :key = "article.id">
            <td>{{article.id}}</td>
            <td>{{article.title}}</td>
            <td>{{article.authors.toString()}}</td>
            <td>{{article.topics.toString()}}</td>
            <td><button>Просмотр</button></td>
        </tr> <!--ряд с ячейками тела таблицы-->
    </table>
</template>

<script>
import ConferenceNavBar from '@/components/ConferenceNavBar.vue'

export default {
    components:{
        ConferenceNavBar,
    },
    data(){
        return{
            articles:[
                {id:"1",authors:['Irina', 'Evgeny'],title:"Digital Earth: current trends",topics:"Research"},
                {id:"2",authors:['Evgeny'],title:"Digital Style: current trends",topics:"Research"},
                {id:"3",authors:['Dmitriy','Nastya','Denis'],title:"Current trends of Agroculture",topics:"Research"},
                {id:"4",authors:['Dmitriy'],title:"Importance of importance",topics:"Research"},
                {id:"5",authors:['Denis'],title:"How we managed to cope with hope",topics:"Abstract"},
                {id:"6",authors:['Nastya'],title:"Real problems of ecolife",topics:"Abstract"},
            ]
        }
    }
}
</script>

<style scoped>
h1{
    color:black;
    text-align: center;
    margin-top: 25px;
}
table {
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
    width: 80%;
}
th{
    font-size:14pt;
    text-align: center;
}
td {
    max-width: 100px;
    font-size:12pt;
    display: table-cell;
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;
}
input{
    width:50px;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
select{
    margin-left:15px;
}
p{
    height: 50px;
    width: 350px;
    padding: 10px 5px;
    border: 1px solid black;
    margin-right:15px;
}
button{
    width: 100px;
    margin-left: 25px;
}
.tools-block{
    display: flex;
    flex-flow: row;
}

</style>