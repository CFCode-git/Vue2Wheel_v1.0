import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Button from '../../src/button/button'
chai.use(sinonChai)


describe('Button.vue', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Button).to.be.exist
  })
  it('可以设置icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#i-settings')
  })
  it('可以设置loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
        loading: true
      }
    })
    const vm = wrapper.vm
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1.', () => {
    // https://vue-test-utils.vuejs.org/zh/api/options.html#attachto
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Button, {
      attachTo: 'div', // 加这个选项才生效
      propsData: {icon: 'setting'}
    })
    const icon = wrapper.vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    wrapper.destroy()
    div.remove()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const wrapper = mount(Button, {
      attachTo: 'div', // 加这个选项才生效
      propsData: {icon: 'settings', iconPosition: 'right'}
    })
    const icon = wrapper.vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    wrapper.destroy()
    div.remove()
  })
  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'settings',
      }
    })
    const vm = wrapper.vm
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})
