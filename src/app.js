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
  created() {
    this.$toast('很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长over', {
      closeButton: {
        text: '知道了',
        callback: () => {console.log('用户知道了')}
      },
    })
  },
  methods: {
    showToast() { this.$toast('很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长over') }
  }
})








