const expect = chai.expect // karma打开浏览器，通过 karma.conf.js 的 framework，会自动引入sinon-chai和m ocha
import Vue from 'vue'
import Input from '../src/Input'

// describe 和 it 由 mocha 提供
// sinon-chai 同时引入 sinon 和 chai
// sinon 用于 fake ，chai 用于断言（expect），sinon-chai 提供 callWith

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
    it('支持 change/input/focus/blur', () => {
      ['change','input','focus','blur'].forEach(eventName=>{
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 当 Input 的 change/input/focus/blur 事件触发时，
        // Input 组件内部的 input 需要触发原生的 change/input/focus/blur 事件
        // Start: 触发 input 的 change/input/focus/blur 事件，需要用 js 模拟一个
        let event = new Event(eventName)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        // End
        expect(callback).to.have.been.calledWith(event)// 回调会带上原生 change/input/focus/blur 事件
      })
    })
  })
})
