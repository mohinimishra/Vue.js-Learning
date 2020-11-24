import Vue from 'vue'
import App from './App.vue'
// import Comp from './comp.vue'

// export const bus = new Vue();

// Vue.component('listOfName',Comp)
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './blogComponent/route'

Vue.use(VueResource)

// add custome directives

// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color ="#" + Math.random().toString().slice(2,8)
//   }
// })

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "2000px"
  }else if(binding.value =='narrow'){
      el.style.maxWidth = "560px"
  }
  if(binding.arg =="column"){
    el.style.background= "#ddd"
    el.style.padding = "20px"
  }
  }
})

// Vue.filter('upper-case', function(value){
//   return value.toUpperCase()
// })

Vue.filter('snippet', function(value){
  return value.slice(0, 100) + '...'
})

// use Router
Vue.use(VueRouter)

// creating vue instance of vueRouter
const router = new VueRouter({
  routes : Routes,
  mode :'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router : router
})
