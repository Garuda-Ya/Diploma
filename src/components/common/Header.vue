<template>
    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="@/assets/images/52.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                    НаучКонф
                </a>
                <ul className = "flex-container-right">
                    <li>Авторизация</li>
                    <li>Регистрация</li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>

export default {

}
</script>

<style scoped>
ul{
    height:100%;
    max-height: 50px;
}
li{
    height:50px;
    display: inline-block;
    padding:10px 10px;
    margin-right:5px;
}
.button-container{
    text-align: center;
    justify-content: center;
}
.flex-container-right{
    float: right;
    display: flex;
    text-align: center;
    justify-content: center;
}
.container-fluid{
    width: 90vw;
    height: 50px;
}
.navbar-brand{
    padding-top:0;
    padding-bottom: 15px;
}
.navbar{
    --bs-navbar-padding-y: 0;
    height: 50px;
}
</style>