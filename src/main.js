import Vue from 'vue'
import Vue1 from 'tk-vuejs'
import component1 from './components/vue1/component1.vue1'
import component2 from './components/vue2/component2.vue'

Vue.component('component2', component2)
Vue.config.ignoredElements = [
  'component1'
]

new Vue({
  el: '#vue2',
})

Vue1.component('component1', component1)

new Vue1({
  el: '#app'
})
