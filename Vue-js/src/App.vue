<template>
    <!--
         <div>
      <h1> APP Vue</h1>
      <listOfName></listOfName>
    </div>
      
      <div>
        <app-header v-bind:title = "title" v-on:changeTitleName="updateTitle($event)"></app-header>
        <app-artical v-bind:coding="coding"></app-artical>
        <app-footer v-bind:title = "title"></app-footer>
        <app-form>
          <div slot ="form-feild">
            <h3>This is the tilte of Form</h3>
          </div>
        </app-form>
      </div>
      
      <div>
        <component v-bind:is ="components"></component>
        <button v-on:click="components = 'dynamicComp'">Show Form 1</button>
        <button v-on:click="components = 'dynamicComp2'">Show Form 2</button>

      </div>
      
      <div>
        <blog></blog>
      </div>
  -->
  <div>
     <!-- <blog></blog>
     <bloglist></bloglist>
    <showblog></showblog>
  <component :is="comp"></component> -->
  <navBar></navBar>
  <router-view></router-view>
  
  </div>
</template>

<script>
// import Header from './Components/header.vue'
// import Footer from './Components/footer.vue'
// import Artical from './Components/artical.vue'
// import Form from './Components/form.vue'

// import DynamicComp from './Components/dynamicComp.vue'
// import DynamicComp2 from './Components/dynamicComp2.vue'
// import Blog from './Components/InputBinding-blog'

import Blog from './blogComponent/blog.vue'
import showBlog from './blogComponent/showBlog.vue'
import blogList from './blogComponent/blogList.vue'
import Nav from './blogComponent/header'


export default {
  components : {
    //'app-header' : Header,
    // 'app-footer' : Footer,
    // 'app-artical': Artical 
    // 'app-form' : Form
    // 'dynamicComp': DynamicComp,
    // 'dynamicComp2': DynamicComp2
    'blog': Blog,
    'showblog':showBlog,
    'comp' : '',
    'bloglist' : blogList,
    'navBar': Nav
  },
  data() {
    return {
      // coding : [
      //           {name : "Javascript", framework : "Vue.js", show:false},
      //           {name : "C", framework : ".net", show:false},
      //           {name : "HTML/CSS", framework : "Bootstrap", show:false}
      //       ],
      // title : 'Coding Language' ,
      // components : 'dynamicComp'
      
    }
  },
  methods : {
    // updateTitle : function(update){
    //   this.title = update
    // }
  }
};
</script>

<style>
  /* h1{
    color : blue;
  } */
</style>


