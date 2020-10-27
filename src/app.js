import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import buttonGroup from './button-group.vue'

// 全局注册
Vue.component('diff-button', Button)
Vue.component('diff-icon', Icon)
Vue.component('diff-button-group', buttonGroup)

new Vue({
  el: '#app',
  data: {
    loadingDemo: false
  }
})








