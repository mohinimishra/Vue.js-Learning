<template>
    <div id="show-blog" v-theme:column="'narrow'">
        <h1>This is Details of Blogs</h1>
        <input type="text" placeholder="serch blog" v-model="search">
        <div v-for="blog in filterBlog" class="single-blog">
            <router-link v-bind:to="'/blog/'+ blog.id"><h2>{{blog.title |toUpperCase}} </h2></router-link>
            <p>{{blog.content | snippet}}</p>
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
        this.$http.get('https://vuejs-ce8a7.firebaseio.com/posts.json').then((data)=>{
            return data.json()
        }).then((data)=>{
            let blogArray=[];
            for(let key in data){
                data[key].id = key
                blogArray.push(data[key])
            }
            this.blogs = blogArray
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