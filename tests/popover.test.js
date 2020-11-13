const expect = chai.expect
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.exist
  })
  it('可以设置 position', (done) => {
    Vue.component('diff-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <diff-popover position="bottom" ref="a">
      <template slot="content"> 弹出内容 </template>
      <button>点我</button>
    </diff-popover>
    `
    const vm = new Vue({el: div})
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      let {contentWrapperRef} = vm.$refs.a.$refs
      expect(contentWrapperRef.classList.contains('position-bottom')).to.be.true
      done()
    })
  })
  xit('可以设置 trigger', (done) => {
    Vue.component('diff-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <diff-popover trigger="hover" ref="a">
      <template slot="content"> 弹出内容 </template>
      <button>点我</button>
    </diff-popover>
    `
    const vm = new Vue({el: div})
    vm.$nextTick(() => {
      let event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      vm.$nextTick(() => {
        let {contentWrapperRef} = vm.$refs.a.$refs
        expect(contentWrapperRef).to.exist
        done()
      })
    })
  })
})





























