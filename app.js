new Vue({
    el : "#root",
    data : {
        name : "MM"
    },
    methods : {
        greet : function(time){
            return `Hii ${this.name} Good ${time}`
        }
    }
});
