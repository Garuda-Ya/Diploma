<template>
    <div class = 'tools-block'>
        <div class="search">
            <span>Поиск :</span>
            <input 
                type="text" 
                :value = "filterWord"
                @input="$emit('update:filterWord',$event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props:{
        filterWord:{
            type:String,
        } 
         
    },
    emits:['update:filterWord'],
}
</script>

<style scoped>

input{
    height:24px;
    width:120px;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
.tools-block{
    display: flex;
    flex-flow: row-reverse;
    border:1px solid black;
}
span{
    height: 30px;
    margin-right: 10px;
}
.search{
    display:flex;
    padding:20px;
    justify-content: flex-end;
    float:right;
}
</style>