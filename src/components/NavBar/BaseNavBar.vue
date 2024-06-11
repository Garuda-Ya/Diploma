<template>
    <nav class = 'navbar'>
        <router-link to="/conference">
            <div class = "navbar-first-item"><button>Конференция</button></div>
        </router-link>
        <router-link to="/">
            <div class = "navbar-item"><button>Рецензии</button></div>
        </router-link>
        <router-link to="/about">
            <div class = "navbar-item"><button>Cтатьи</button></div>
        </router-link>
        <router-link to="/about">
            <div class = "navbar-item"><button>Комиссия</button></div>
        </router-link>
        <router-link to="/">
            <div class = "navbar-item"><button>Настройки</button></div>
        </router-link>
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
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
button{
    height:40px;
    border: none;
    background-color: antiquewhite;
    padding: 0 8px;
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
    cursor: pointer;
}
</style>