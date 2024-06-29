<template>
    <h1>Участники конференции</h1>
    <ArticlesTableTools
        v-model:filterWord="filterWord"
    />
    <div class="big-table">
        <table>
            <tr> <!--ряд с ячейками заголовков-->
                <th @click="sortBy('id') " class="unselectable">
                    <label>#</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='id'" :class="{ upsidedown: sortOrder==1 }">
                </th>
                <th @click="sortBy('lastName') " class="unselectable">
                    <label for="">Имя</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='lastName'" :class="{ upsidedown: sortOrder==1 }">
                </th>
                <th @click="sortBy('email') " class="unselectable">
                    <label for="">E-mail</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='email'" :class="{ upsidedown: sortOrder==1 }">
                </th>
                <th @click="sortBy('affilation') " class="unselectable">
                    <label>Принадлежность</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='affilation'" :class="{ upsidedown: sortOrder==1 }">
                </th>
                <th @click="sortBy('role') " class="unselectable">
                    <label>Роль</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='role'" :class="{ upsidedown: sortOrder==1 }">
                </th>
                <th @click="sortBy('lastSeen') " class="unselectable">
                    <label>Был в сети</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='lastSeen'" :class="{ upsidedown: sortOrder==1 }">
                </th>
                <th @click="sortBy('wasInvitedBy') " class="unselectable">
                    <label>Был приглашен</label> 
                    <img src="/src/assets/images/triangle.png" alt="" v-show="sortOption=='wasInvitedBy'" :class="{ upsidedown: sortOrder==1 }">
                </th>
            </tr> 
            <tr class="emptyFiller" v-if="sortedAndSearchedParticapants.length==0">
                <td></td><td></td> <td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr v-for="particapant in sortedAndSearchedParticapants" :particapant = "particapant" :key = "particapant.id">
                <td>{{particapant.id}}</td>
                <td>{{`${particapant.lastName} ${particapant.firstName.substring(0,1)} ${particapant.middleName.substring(0,1)}`}}</td>
                <td>{{particapant.email}}</td>
                <td>{{particapant.affilation}}</td>
                <td>
                    <select name="roles" id="roles-select" :value ="particapant.role">
                        <option value="author">Автор</option>
                        <option value="PC member">Рецензент</option>
                        <option value="chair">Председатель ПК</option>
                        <option value="administrator">Администратор</option>
                    </select>
                </td>
                <td>{{particapant.lastSeen}}</td>
                <td>{{particapant.wasInvitedBy}}</td>
            </tr> <!--ряд с ячейками тела таблицы-->
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
            sortOption:"id",
            sortOrder:1,
            filterWord:'',
            particapants:[],
        }
    },
    methods:{
        sortBy(newOption){
            if(this.sortOption === newOption) {
                this.sortOrder = this.sortOrder * -1;
                this.sortOption = newOption;
            } else {
                this.sortOrder = 1;
                this.sortOption = newOption
            }
        }
    },
    computed:{
        sortedParticapants(){
            if(this.sortOption=='id'||this.sortOption=='wasInvitedBy'){
                return[...this.particapants].sort((particapant1,particapant2)=>
                {
                    return this.sortOrder * (parseInt(particapant1[this.sortOption]) - parseInt(particapant2[this.sortOption]))
            });
            }
            else{
                return[...this.particapants].sort((particapant1,particapant2)=>
                {
                    return this.sortOrder * particapant1[this.sortOption].localeCompare(particapant2[this.sortOption])
            });
            }
            
        },
        sortedAndSearchedParticapants(){
            return this.sortedParticapants.filter(particapant => particapant.email.includes(this.filterWord))
        }
    },
    mounted(){
        this.particapants=this.$store.getters.getParticapants
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
    min-width:40px;
    font-size:12pt;
    text-align: center;

    padding:20px 0;
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
.img{
    width: 10px;
    height:10px;
}
.upsidedown{
    transform: rotate(180deg);
}
.unselectable {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>