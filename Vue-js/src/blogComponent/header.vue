<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>ADD Blog</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        background-color: gray;
        color :white;
        text-align: center;
        padding: 10px 0;
    }
    ul{
        list-style-type: none;
        text-align: center;
        margin-bottom: 40px;
    }
    li{
        border : 1px solid gray;
        display: inline-block;
        margin: 0 10px;
        color: white;
        font-size: 20px;
        list-style: none;
    }
    a{
        color : #fff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 10px;
    }
    .router-link-active{
        background: #eee;
        color: #444;
    }
</style>