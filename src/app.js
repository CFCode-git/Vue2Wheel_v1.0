import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('diff-button', Button)
Vue.component('diff-icon', Icon)

new Vue({
  el: '#app',
  data:{
    loadingDemo:false
  }
})
