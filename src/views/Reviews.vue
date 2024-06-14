<template>
    <h1>Рецензии</h1>
    <ArticlesTableTools/>
    <div class="big-table">
        <table>
            <tr> <!--ряд с ячейками заголовков-->
                <th>#</th>
                <th>Автор</th>
                <th>Название</th>
                <th>Тема</th>
                <th>Статус</th>
                <th>О статье</th>
            </tr> 
            <tr v-for="article in articles" :article = "article" :key = "article.id"> <!--ряд с ячейками тела таблицы-->
                <td>{{article.id}}</td>
                <td>{{article.authors.toString()}}</td>
                <td>{{article.title}}</td>
                <td>{{article.topics.toString()}}</td>
                <td> </td>
                <td>
                    <button
                        @click="$router.push(`/articles/${article.id}`)">
                        Просмотр
                    </button>
                </td>
            </tr> 
        </table>
    </div>
</template>

<script>
import ArticlesTableTools from '@/components/Common/ArticlesTableTools.vue'
export default {
    components:{
        ArticlesTableTools,
    },
    data(){
        return{
            articles:[
                {
                    id:1,authors:['Irina', 'Evgeny'],
                    title:"Digital Earth: current trends",
                    topics:"Research"
                },
                {
                    id:2,authors:['Evgeny'],
                    title:"Digital Style: current trends",
                    topics:"Research"},
                {
                    id:3,
                    authors:['Dmitriy','Nastya','Denis'],
                    title:"Current trends of Agroculture",
                    topics:"Research"},
                {
                    id:4,
                    authors:['Dmitriy'],
                    title:"Importance of importance",
                    topics:"Research"},
                {
                    id:5,
                    authors:['Denis'],
                    title:"How we managed to cope with hope",
                    topics:"Abstract"
                },
                {
                    id:6,
                    authors:['Nastya'],
                    title:"Real problems of ecolife",
                    topics:"Abstract"
                },
            ]
        }
    },
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
.big-table{
    overflow: auto;
	position: relative;
}
table {
    max-width: 100%;
    width: 100%;

    margin-top: 25px;
    padding: 12px;

    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;

    border-collapse: collapse;
    border: 2px solid rgb(140 140 140);

    /*Для прокрутки таблицы*/
    display: inline-block;
    overflow-x: auto;
	white-space: nowrap;
	-webkit-overflow-scrolling: touch;
}
th{
    font-size:14pt;
    text-align: center;
}
td {
    max-width: 20%;
    
    text-align: center;
    font-size:12pt;
    /*display: table-cell;*/
    
    border: 1px solid rgb(160 160 160);
    padding: 8px 10px;

    /**Расширение таблицы*/
    width: 1%;
    white-space: nowrap;
}
</style>