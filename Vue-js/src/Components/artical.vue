<template>
    <div id="coding">
        <ul>
            <li v-for="(ele) in coding" v-on:click="ele.show=!ele.show">
                <h2>{{ele.name}}</h2>
                <h3 v-show="ele.show">FrameWork - {{ele.framework}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : ['coding'],
    data(){
        return {
            // coding : [
            //     {name : "Javascript", framework : "Vue.js", show:false},
            //     {name : "C", framework : ".net", show:false},
            //     {name : "HTML/CSS", framework : "Bootstrap", show:false}
            // ]
        }
    }
}
</script>

<style scoped>
    #coding{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        margin: 10px;
        color: black;
        border: 1px solid black;
    }
</style>