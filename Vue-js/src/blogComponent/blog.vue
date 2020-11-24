<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-show="!submitted">
            <label for="">Blog Title</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label for="">Blog Content</label>
            <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10"></textarea>
           
            <div id="checkboxes">
                <label>Javascript</label>
                <input type="checkbox" value="Javascript" v-model="blog.categories">
                <label>Vue</label>
                <input type="checkbox" value="Vue" v-model="blog.categories">
                <label>React</label>
                <input type="checkbox" value="React" v-model="blog.categories">
                <label>Node js</label>
                <input type="checkbox" value="Node js" v-model="blog.categories">
            </div>

            <label for="">Fav Coding Language</label>
            <select v-model="blog.codingLang">
                <option v-for="lang in coding">{{lang}}</option>
            </select>
            <button v-on:click.prevent="postData">Add Blog</button>
        </form>
            <div v-if="submitted"><h1>Thankyou For Add Blog</h1></div>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title: {{blog.title}}</p>
            <p>Blog Content: {{blog.content}}</p>
            <p>Blog Language:</p>
            <ul>
                <li v-for="(category) in blog.categories">{{category}}</li>
            </ul>
            <p>Fav Coding Language : {{blog.codingLang}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            blog:{
                title : "",
                content :"",
                categories : [],
                codingLang : ''
            },
            coding : ['Javascript','Node-js','React','Vue','Express'],
            submitted : false
        }
    },
    methods : {
        postData: function(){
            this.$http.post('https://vuejs-ce8a7.firebaseio.com/posts.json',this.blog).then((data)=>{
                console.log(data)
                this.submitted = true
            })
        }
    }
}
</script>

<style scoped>

#add-blog *{
    box-sizing : border-box;
}
#add-blog{
    margin : 20px auto;
    max-width : 500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type='text'], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>