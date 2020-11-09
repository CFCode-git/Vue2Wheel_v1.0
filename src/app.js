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

import Tabs from './Tabs.vue'
import TabsHead from './Tabs-head.vue'
import TabsBody from './Tabs-body.vue'
import TabsItem from './Tabs-item.vue'
import TabsPane from './Tabs-pane.vue'

import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

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

Vue.component('diff-tabs', Tabs)
Vue.component('diff-tabs-body', TabsBody)
Vue.component('diff-tabs-item', TabsItem)
Vue.component('diff-tabs-pane', TabsPane)
Vue.component('diff-tabs-head', TabsHead)

Vue.component('diff-popover', Popover)
Vue.component('diff-collapse', Collapse)
Vue.component('diff-collapse-item', CollapseItem)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2','1'],
  },
  created() { },
  methods: {
    yyy() {
      console.log('yyy')
    }


  }
})








