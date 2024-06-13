<template>
    <h1>Участники конференции</h1>
    <ArticlesTableTools
        v-model:filterWord="filterWord"
    />
    <div class="big-table">
        <table>
            <tr> <!--ряд с ячейками заголовков-->
                <th @click="sortBy('id') ">#123</th>
                <th @click="sortBy('lastName') ">Имя</th>
                <th @click="sortBy('email') ">E-mail</th>
                <th @click="sortBy('affilation') ">Принадлежность</th>
                <th @click="sortBy('role') ">Роль</th>
                <th @click="sortBy('lastSeen') ">Был в сети</th>
                <th @click="sortBy('wasInvitedBy') ">Был приглашен</th>
            </tr> 
            <tr class="emptyFiller" v-if="sortedAndSearchedParticapants.length==0">
                <td></td><td></td> <td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr v-for="particapant in sortedAndSearchedParticapants" :particapant = "particapant" :key = "particapant.id">
                <td>{{particapant.id}}</td>
                <td>{{`${particapant.lastName} ${particapant.firstName.substring(0,1)} ${particapant.middleName.substring(0,1)}`}}</td>
                <td>{{particapant.email}}</td>
                <td>{{particapant.affilation}}</td>
                <td>{{changeRole(particapant.role)}}</td>
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
            particapants:[
                {
                    id:1,
                    firstName:'Андрей',
                    middleName:'Васильевич',
                    lastName:'Баранов',
                    email:'lohah_agixu92@yahoo.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:2,
                    firstName:'Дмитрий',
                    middleName:'Петрович',
                    lastName:'Васейкин',
                    email:'mek_emodene14@hotmail.com',
                    role: 'author',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:3,
                    firstName:'Василиса',
                    middleName:'Степановна',
                    lastName:'Крупчатникова ',
                    email:'bavut-emine85@gmail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:4,
                    firstName:'Владислав',
                    middleName:'Владимирович',
                    lastName:'Куртузанов',
                    email:'morekav-owu21@mail.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:6,
                    firstName:'Афанасий',
                    middleName:'Афанасиевич',
                    lastName:'Языков',
                    email:'hihero-rahe32@gmail.com',
                    role: 'author',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:9,
                    firstName:'Андрей',
                    middleName:'Васильевич',
                    lastName:'Баранов',
                    email:'heya-temisu27@yahoo.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:10,
                    firstName:'Ольга',
                    middleName:'Васильевна',
                    lastName:'Опроксина',
                    email:'lohah_agixu92@yahoo.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:12,
                    firstName:'Петр',
                    middleName:'Денисович',
                    lastName:'Валентанов',
                    email:'mek_emodene14@hotmail.com',
                    role: 'author',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '13'
                },
                {
                    id:13,
                    firstName:'Дмитрий',
                    middleName:'Сергеевич',
                    lastName:'Хомяков',
                    email:'bavut-emine85@gmail.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '31'
                },
                {
                    id:14,
                    firstName:'Василий',
                    middleName:'Андреевич',
                    lastName:'Каштанов',
                    email:'morekav-owu21@mail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '24'
                },
                {
                    id:16,
                    firstName:'Максим',
                    middleName:'Бахрузович',
                    lastName:'Шеинов',
                    email:'hihero-rahe32@gmail.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:19,
                    firstName:'Екатерина',
                    middleName:'Васильевна',
                    lastName:'Гришович',
                    email:'heya-temisu27@yahoo.com',
                    role: 'author',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '24'
                },
                {
                    id:21,
                    firstName:'Измаил',
                    middleName:'Станиславович',
                    lastName:'Устов',
                    email:'lohah_agixu92@yahoo.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:22,
                    firstName:'Андрей',
                    middleName:'Максимович',
                    lastName:'Молчанов',
                    email:'mek_emodene14@hotmail.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:23,
                    firstName:'Тиль',
                    middleName:'Денисович',
                    lastName:'Линдеман',
                    email:'bavut-emine85@gmail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '24'
                },
                {
                    id:24,
                    firstName:'Станислав',
                    middleName:'Львович',
                    lastName:'Петров',
                    email:'morekav-owu21@mail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '0'
                },
                {
                    id:26,
                    firstName:'Евгений',
                    middleName:'Михайлович',
                    lastName:'Беркутов',
                    email:'hihero-rahe32@gmail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '0'
                },
                {
                    id:29,
                    firstName:'Константин',
                    middleName:'Константинович',
                    lastName:'Рассказов',
                    email:'heya-temisu27@yahoo.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '31'
                },
                {
                    id:31,
                    firstName:'Сергей',
                    middleName:'Сергеевич',
                    lastName:'Силкин',
                    email:'lohah_agixu92@yahoo.com',
                    role: 'author',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:32,
                    firstName:'Дмитрий',
                    middleName:'Андреевич',
                    lastName:'Шеинов',
                    email:'mek_emodene14@hotmail.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:33,
                    firstName:'Лионид',
                    middleName:'Германович',
                    lastName:'Хомич',
                    email:'bavut-emine85@gmail.com',
                    role: 'author',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '6'
                },
                {
                    id:34,
                    firstName:'Иван',
                    middleName:'Иванович',
                    lastName:'Иванов',
                    email:'morekav-owu21@mail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:36,
                    firstName:'Вадим',
                    middleName:'Вадимович',
                    lastName:'Гучков',
                    email:'hihero-rahe32@gmail.com',
                    role: 'administrator',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '2'
                },
                {
                    id:39,
                    firstName:'Зинаида',
                    middleName:'Денисовна',
                    lastName:'Нарышникова',
                    email:'heya-temisu27@yahoo.com',
                    role: 'PC member',
                    affilation: 'БГТУ',
                    lastSeen: '08.07.2023 12:33',
                    wasInvitedBy: '21'
                },
            ]
        }
    },
    methods:{
        changeRole(role){
            switch (role){
                case 'administrator':
                    return 'админ'
                case 'author':
                    return 'автор'
                case 'PC member':
                    return 'участник комиссии'
            }
        },
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
</style>