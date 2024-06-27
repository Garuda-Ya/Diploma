<template>
    <nav class = 'navbar' v-if = "$route.name != 'registration'&& $route.name != 'authorisation'">
        <router-link to="/conference">
            <div class = "navbar-first-item"><button>Конференция</button></div>
        </router-link>
        <router-link to="/reviews">
            <div class = "navbar-item"><button>Рецензии</button></div>
        </router-link>
        <router-link to="/articles">
            <div class = "navbar-item"><button>Cтатьи</button></div>
        </router-link>
        <router-link to="/particapants">
            <div class = "navbar-item"><button>Участники</button></div>
        </router-link>
        <div class = "navbar-item">
            <router-link to="/faq">
                <button>Справка</button>
            </router-link>
        </div>
        <div class = "navbar-item" v-if="$store.state.isAuth==true">
            <router-link 
                :to="{  
                    name: 'profile',
                    params: {id:this.$store.getters.getCurrentUserID}
                }">
                <button>Личный кабинет</button>
            </router-link>
        </div>
        
    </nav>
</template>
<script>

export default {
    components: { 
    },

}
</script>

<style scoped>
.navbar{
    width:99%;
    max-width:1200px;
    height:50px;

    display:flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #FAEBD6;
    margin: 8px auto;
    color: black;

    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 2px 4px rgb(142, 142, 142);
}
.navbar-item{
    height: 40px;
    display: flex;
    align-items: center;
    cursor: default;
}
button{
    height:40px;
    border: none;
    background-color: antiquewhite;
    padding: 0 10px;
    cursor: pointer;
}
.navbar-item:before{
    content: '';
    position: relative;
    height: 50%;
    border-left: 1px solid black;
}
button:hover{
    transform: translateY(-2px);
    background-color: azure;
}
</style>