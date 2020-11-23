import Vue from 'vue'
import App from './App.vue'
import Comp from './comp.vue'

export const bus = new Vue();

// Vue.component('listOfName',Comp)

new Vue({
  el: '#app',
  render: h => h(App)
})
