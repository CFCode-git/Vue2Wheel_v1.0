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
      <template slot="content">
        弹出内容 
      </template>
      <button>点我</button>
    </diff-popover>
    `
    const vm = new Vue({
      el: div
    })
    console.log(vm.$el.outerHTML)
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      let {contentWrapperRef} = vm.$refs.a.$refs
      expect(contentWrapperRef.classList.contains('position-bottom')).to.be.true
      done()
    })
  })
})





























