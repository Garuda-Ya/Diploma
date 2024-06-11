<template>
    <router-link to="/">
        <a class = "logo-box" href="#">
            <img src="@/assets/images/52.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            <p>НаучКонф</p>
        </a>
    </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo-box{
    margin-left: 65px;
    height: 50px;
    width: 130px;

    display:flex;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
img{
    width: 30px;
    height: 30px;
    text-align: center;
}
p{
    text-align: center;
    padding:10px;
}
</style>