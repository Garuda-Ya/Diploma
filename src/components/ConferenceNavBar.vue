<template>
    <nav className = 'navbar'>
        <div className="navbar-items">
            <router-link to="/about"><button>Конференция</button></router-link>
            <router-link to="/about"><button>Рецензии</button></router-link>
            <router-link to="/"><button>Cтатьи</button></router-link>
            <router-link to="/about"><button>Комиссия</button></router-link>
            <router-link style = "text-decoration: none;" to="/about"><button>Настройки</button></router-link>
        </div>
    </nav>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar{
    width:100%;
    height:50px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 2px 2px 4px gray;
    background-color: antiquewhite;
    display:flex;
    align-items: center;
    color: black;
}
.navbar-items{
    height:100%;
}
button{
    border: none;
    margin-left:15px;
    background-color: antiquewhite;
}
button:hover{
    border:1px solid black;
}
</style>