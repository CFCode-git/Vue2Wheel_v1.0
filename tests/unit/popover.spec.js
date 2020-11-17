import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Popover from '../../src/popover/popover.vue'
// import Vue from 'vue'

chai.use(sinonChai)

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.be.exist
  })
  it('可以设置 position', async () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    // button.trigger('click')
    // await Vue.nextTick()
    let classes = wrapper.find('.content-wrapper').classes()
    expect(classes).to.include('position-bottom')
  })
  it('可以设置 trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    const vm = wrapper.vm
    wrapper.find('.popover').trigger('mouseenter')
    vm.$nextTick().then(()=>{
      expect(wrapper.find('.content-wrapper').element).to.exist
    })
  })
})





























