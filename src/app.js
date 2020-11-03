import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import buttonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Toast from './toast.vue'

import Layout from './layout.vue'
import Header from './header.vue'
import Footer from './footer.vue'
import Content from './content.vue'
import Sider from './sider.vue'

import plugin from './plugin'

// 全局注册
Vue.component('diff-button', Button)
Vue.component('diff-icon', Icon)
Vue.component('diff-button-group', buttonGroup)
Vue.component('diff-input', Input)
Vue.component('diff-row', Row)
Vue.component('diff-col', Col)
Vue.component('diff-toast', Toast)

Vue.component('diff-layout', Layout)
Vue.component('diff-header', Header)
Vue.component('diff-footer', Footer)
Vue.component('diff-content', Content)
Vue.component('diff-sider', Sider)

Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loadingDemo: false,
    message: 'v-model'
  },
  created() { },
  methods: {
    showToast1() {
      this.$toast(`你的智商目前为${parseInt(Math.random()*100)},你的智商需要充值!`, {
        position: 'top',
        closeButton: {
          text: '已充值',
          callback: () => {console.log('他说他充值了')}
        },
        autoClose: false,
        autoCloseDelay: 3
      })
    },
    showToast2() {
      this.$toast(`你的智商目前为${parseInt(Math.random()*100)},你的智商需要充值!`, {
        position: 'bottom',
        closeButton: {
          text: '已充值',
          callback: () => {console.log('他说他充值了')}
        },
        autoClose: false,
        autoCloseDelay: 3
      })
    },
    showToast3(){
      this.$toast(`你的智商目前为${parseInt(Math.random()*100)},你的智商需要充值!`, {
        position: 'middle',
        closeButton: {
          text: '已充值',
          callback: () => {console.log('他说他充值了')}
        },
        autoClose: false,
        autoCloseDelay: 3
      })
    }

  }
})








