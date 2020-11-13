const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.be.exist
  })
  it('接受gutter属性.', (done) => {
    Vue.component('diff-row', Row)
    Vue.component('diff-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <diff-row gutter="20">
        <diff-col span="12"></diff-col>
        <diff-col span="12"></diff-col>
      </diff-row>
    `
    const vm = new Vue({
      el: div
    })
    // 因为Vue组件 Mounted 是异步的，需要用异步的方式进行测试。
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      done() // 测试框架的约定：如果不加 done 那么默认所有代码都是同步的；时间最长 2000ms
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接受 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy()
  })
})
