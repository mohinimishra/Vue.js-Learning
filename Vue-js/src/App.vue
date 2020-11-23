<template>
    <!--
         <div>
      <h1> APP Vue</h1>
      <listOfName></listOfName>
    </div>
        -->
      <div>
        <app-header v-bind:title = "title" v-on:changeTitleName="updateTitle($event)"></app-header>
        <app-artical v-bind:coding="coding"></app-artical>
        <app-footer v-bind:title = "title"></app-footer>

      </div>
</template>

<script>
import Header from './Components/header.vue'
import Footer from './Components/footer.vue'
import Artical from './Components/artical.vue'


export default {
  components : {
    'app-header' : Header,
    'app-footer' : Footer,
    'app-artical': Artical
  },
  data() {
    return {
      coding : [
                {name : "Javascript", framework : "Vue.js", show:false},
                {name : "C", framework : ".net", show:false},
                {name : "HTML/CSS", framework : "Bootstrap", show:false}
            ],
      title : 'Coding Language' 
    }
  },
  methods : {
    updateTitle : function(update){
      this.title = update
    }
  }
};
</script>

<style>
  /* h1{
    color : blue;
  } */
</style>


