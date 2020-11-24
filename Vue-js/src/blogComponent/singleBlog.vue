<template>
    <div id="single-blog">
        <h1>Single Blog Details</h1>
        <h2>Title - {{blog.title}}</h2>
        <h3>Content - {{blog.content}}</h3>
        <h3>Fav Language</h3>
        <ul><li v-for="lang in blog.categories">
            {{lang}}
        </li></ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id : this.$route.params.id,
            blog:{}
        }
    },
    created() {
        this.$http.get('https://vuejs-ce8a7.firebaseio.com/posts/'+ this.id +'.json').then((data)=>{
            // console.log(data) 
            return data.json()
        }).then((data)=>{
            console.log(data)
            this.blog = data;
        })
    },
}
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
    }
    
</style>