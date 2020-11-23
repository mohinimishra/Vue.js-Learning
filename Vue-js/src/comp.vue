<template> 
    <div>
        <h1>List</h1>
        <ul>
            <li v-for="(ele) in list">{{ele}}</li>
        </ul>
    </div>
</template>

<script>
export default {
   data(){
       return {
           list : ['jack','joe','zoo']
       }
   }
}
</script>

<style scoped>
    h1{
        color: saddlebrown;
    }
    li{
        color: red;
    }
</style>
