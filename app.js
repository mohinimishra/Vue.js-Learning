new Vue({
    el : "#root",
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
        arrObj :[{name : 'Joe', age : 24},{name : 'Jack', age : 23},{name : 'Joo', age : 19}]
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
// console.log(new Vue())