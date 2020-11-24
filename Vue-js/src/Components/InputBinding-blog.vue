<template>
    <div>
        <h1>Blog</h1>
        <label for="title">Title</label>
        <input type="text" name="title" v-model.lazy="blog.title"> <br>
        <label for="content">Content</label>
        <input type="content" name="content" v-model.lazy="blog.content">
        <hr>
        <keep-alive>
            <div>
                <h1>Title - {{blog.title}}</h1>
                <h1>Content - {{blog.content}}</h1>
            </div>
        </keep-alive>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blog :{
            title : " ",
            content : " "
        }
        }
    }
    
}
</script>

<style scoped>
    
</style>