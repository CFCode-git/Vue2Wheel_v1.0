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

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  it('接受 name props', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  it('接受 disabled props', () => {
    const callback = sinon.fake()
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled:true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
  // it('接受 selected prop', (done) => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML = `
  //     <diff-tabs selected="two">
  //       <diff-tabs-head>
  //         <diff-tabs-item name="one">1</diff-tabs-item>
  //         <diff-tabs-item name="two">2</diff-tabs-item>
  //         <diff-tabs-item name="three">333333333333</diff-tabs-item>
  //       </diff-tabs-head>
  //       <diff-tabs-body>
  //         <diff-tabs-pane name="one">111</diff-tabs-pane>
  //         <diff-tabs-pane name="two">222</diff-tabs-pane>
  //         <diff-tabs-pane name="three">333</diff-tabs-pane>
  //       </diff-tabs-body>
  //     </diff-tabs>
  //   `
  //   let vm = new Vue({
  //     el: div
  //   })
  //   vm.$nextTick(() => {
  //     let selectedTab = vm.$el.querySelector(`.tabs-item[data-name="two"]`)
  //     expect(selectedTab.classList.contains('active')).to.eq(true)
  //     done()
  //   })
  // })
  // it('可以接受 direction prop', () => {})
})
