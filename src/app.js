import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import buttonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

// 全局注册
Vue.component('diff-button', Button)
Vue.component('diff-icon', Icon)
Vue.component('diff-button-group', buttonGroup)
Vue.component('diff-input', Input)
Vue.component('diff-row', Row)
Vue.component('diff-col', Col)

new Vue({
  el: '#app',
  data: {
    loadingDemo: false,
    message: 'v-model'
  },
  methods: {
    inputChange(value) {
      console.log(value)
    },
    inputInput(value) {
      console.log(value)
    }
  }
})








