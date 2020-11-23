<template>
    <div>
        <footer>
            <h1>{{copyright}} {{title}}</h1>
        </footer>
    </div>
</template>

<script>
    export default {
        props : {
            title : {
                type :String
            }
        },
        data(){
            return{
                copyright : "Copyright @ 2020"
            }
        }
    }
</script>

<style scoped>
footer{
    background-color: black;
    padding: 10px;
}
h1 {
    text-align: center;
    font-size: 20px;
    color: lightcyan;
}
</style>
