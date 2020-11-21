new Vue({
    el : "#root",
    el : "#game",
    data : {
        name : "",
        link : "https://mohinimishra.github.io/",
        value : 23,
        x : 0,
        y:0,
        age : 20,
        a : 0,
        b : 0,
        avilable : false,
        toggle : false,
        array : ['Joe','Jack','Joo'],
        obj : {name : 'Joe', age : 24},
        arrObj :[{name : 'Joe', age : 24},{name : 'Jack', age : 23},{name : 'Joo', age : 19}],
        health : 100,
        ended : false
    },
    methods : {
        greet : function(time){
            return `Hii ${this.name} Good ${time}`
        },

        add : function(inc){
            return this.value += inc
        }, 
        substract : function(dec){
            return this.value -= dec
        },
        updateXY : function(event){
            this.x =event.offsetX;
            this.y =  event.offsetY;
        },
        logName : function(){
            alert('you eneterd your name')
        },
        logAge : function(){
            alert('you eneterd your Age')
        },
        // addToA : function(){
        //     console.log('Add to A')
        //     return this.age + this.a
        // },
        // addToB : function(){
        //     console.log('Add to B')
        //     return this.age + this.b
        // }
        punch : function(){
            this.health -= 10
            if(this.health<=0){
                this.ended = true
            }
        },
        restart : function(){
            this.health = 100
            this.ended = false
        }
    },
    computed: {
        addToA : function(){
            console.log('Add to A')
            return this.age + this.a
        },
        addToB : function(){
            console.log('Add to B')
            return this.age + this.b
        },
        compClass : function(){
            return {
                avilable : this.avilable,
                toggle : this.toggle
            }
        }
    }
});

// Component
Vue.component('greeting',{
    template : '<p>Hello I am {{name}} <button v-on:click="changeName">Click ME</button></p> ',
    data : function(){
        return{
            name : 'MM'
        }
    },
    methods : {
        changeName : function(){
            this.name = "Mohini"
        }
    }
})

new Vue({
    el : "#component"
})