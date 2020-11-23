<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
    </header>
</template>

<script>
import {bus} from '../main'

export default {
    props : {
        title : {
            type: String
        }
    },
    data(){
        return {
            // title : "Coding Languages"
        }
    },
    methods : {
        changeTitle : function(){
            // this.$emit('changeTitleName', 'Coding Lang & Their FrameWorks')
            // this.title = "Coding Lang & Their FrameWorks"
            this.title = "Coding Lang and Frameworks"
            bus.$emit('titleChanged', 'Coding Lang and Framework')
        }
    }
    
}
</script>

<style scoped>
header {
    padding: 10px;
    background-color: lightcyan;;
}
h1{
    font-size: 30px;
    color: black;
    text-align: center;
}

</style>>
