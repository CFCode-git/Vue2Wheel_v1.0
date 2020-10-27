const expect = chai.expect // 通过 karma.conf.js 的 framework，会自动引入sinon-chai和m ocha
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.be.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => { vm.$destroy() })
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: 'test'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.eq('test')
    })
    it('接受 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.eq(true)
    })
    it('接受 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.eq(true)
    })
    it('接受 errorMessage', () => {
      vm = new Constructor({
        propsData: {
          errorMessage: 'test errorMessage'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-warning')
      const errorElement = vm.$el.querySelector('.errorMessage')
      expect(errorElement.textContent).to.eq('test errorMessage')
    })
  })
  describe('events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback)
      // 当 Input 的 change 事件触发时，Input 组件内部的 input 需要出发 change 事件
      // Start: 触发 input 的 change 事件，需要用 js 模拟一个
      let event = new Event('change')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      // End
      expect(callback).to.have.been.calledWith(event)// 回调会带上原生 change 事件
    })
    it('支持 input', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      let event = new Event('input')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持 focus', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('focus', callback)
      let event = new Event('focus')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
    it('支持 blur', () => {
      vm = new Constructor({}).$mount()
      const callback = sinon.fake()
      vm.$on('blur', callback)
      let event = new Event('blur')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
  })
})
