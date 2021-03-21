import Vue from 'vue'
import Demo from './demo.vue'

Vue.config.productionTip = false
import plugin from './plugin'
Vue.use(plugin)

new Vue({
  render: h => h(Demo),
}).$mount('#app')
