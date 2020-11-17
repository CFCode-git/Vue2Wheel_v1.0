const expect = chai.expect
import Vue from 'vue'
import Tabs from '../../src/tabs/tabs'
import TabsHead from '../../src/tabs/tabs-head'
import TabsBody from '../../src/tabs/tabs-body'
import TabsItem from '../../src/tabs/tabs-item'
import TabsPane from '../../src/tabs/tabs-pane'

Vue.component('diff-tabs', Tabs)
Vue.component('diff-tabs-body', TabsBody)
Vue.component('diff-tabs-item', TabsItem)
Vue.component('diff-tabs-pane', TabsPane)
Vue.component('diff-tabs-head', TabsHead)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.exist
  })
  it('接受 selected props', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <diff-tabs selected="two">
        <diff-tabs-head>
          <diff-tabs-item name="one">1</diff-tabs-item>
          <diff-tabs-item name="two">2</diff-tabs-item>
          <diff-tabs-item name="three">333333333333</diff-tabs-item>
        </diff-tabs-head>
        <diff-tabs-body>
          <diff-tabs-pane name="one">111</diff-tabs-pane>
          <diff-tabs-pane name="two">222</diff-tabs-pane>
          <diff-tabs-pane name="three">333</diff-tabs-pane>
        </diff-tabs-body>
      </diff-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let selectedTab = vm.$el.querySelector(`.tabs-item[data-name="two"]`)
      expect(selectedTab.classList.contains('active')).to.eq(true)
      done()
    })
  })
  it('可以接受 direction props', () => {})
})
