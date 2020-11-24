<template>
    <div id="show-blog" v-theme:column="'narrow'">
        <h1>List of Blogs</h1>
        <input type="text" placeholder="serch blog" v-model="search">
        <div v-for="blog in filterBlog" class="single-blog">
            <h2 v-rainbow>{{blog.title |toUpperCase}} </h2>
        </div>
    </div>
</template>

<script>
import serachMixin from '../mixins/misxins'

export default {
    data(){
        return{
            blogs :[],
            search : ""
        }
    },
    methods :{

    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/todos/1/posts').then((data)=>{
            console.log(data)
            this.blogs = data.body.slice(0,10)
        })
    },
    computed: {
       
    },
    directives : {
        'rainbow' : {
            bind(el,binding,vnode){
                el.style.color = "#" + Math.random().toString().slice(2,8)
            }
        }
    },
    filters : {
        toUpperCase : function(value){
            return value.toUpperCase()
        }
    },
    mixins :[serachMixin]

}
</script>

<style scoped>

#show-blog{
    max-width:850px;
    margin : 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #eee;
}
    
</style>