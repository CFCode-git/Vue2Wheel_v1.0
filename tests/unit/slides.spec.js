import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Slides from '@/slides.vue'
import SlidesItem from '@/slides-item.vue'
import Vue from 'vue'

chai.use(sinonChai)


describe('Slides.vue', () => {
  // BDD 行为驱动测试
  it('存在.', () => {
    expect(Slides).to.be.exist
  })
  it('接受 diffSlidesItem,默认显示第一个.', (done) => {
    Vue.component('DiffSlidesItem', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
          <diff-slides-item name="1">
            <div class="box1">1</div>
          </diff-slides-item>
          <diff-slides-item name="2">
            <div class="box2">2</div>
          </diff-slides-item>
          <diff-slides-item name="3">
            <div class="box3">3</div>
          </diff-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    }, 0)
  })
  it('selected是几,选中的就是几', (done) => {
    Vue.component('DiffSlidesItem', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <diff-slides-item name="1">
            <div class="box1">1</div>
          </diff-slides-item>
          <diff-slides-item name="2">
            <div class="box2">2</div>
          </diff-slides-item>
          <diff-slides-item name="3">
            <div class="box3">3</div>
          </diff-slides-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    }, 0)
  })
  it('点击第二个就展示第二个.', (done) => {
    Vue.component('DiffSlidesItem', SlidesItem)
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      slots: {
        default: `
          <diff-slides-item name="1">
            <div class="box1">1</div>
          </diff-slides-item>
          <diff-slides-item name="2">
            <div class="box2">2</div>
          </diff-slides-item>
          <diff-slides-item name="3">
            <div class="box3">3</div>
          </diff-slides-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.eq('2')
          done()
        }
      }
    })
    // slides 异步渲染
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })

  it('可以自动播放', (done) => {
    Vue.component('DiffSlidesItem', SlidesItem)
    const callback = sinon.fake()
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 20,
        selected: '1'
      },
      slots: {
        default: `
          <diff-slides-item name="1">
            <div class="box1">1</div>
          </diff-slides-item>
          <diff-slides-item name="2">
            <div class="box2">2</div>
          </diff-slides-item>
          <diff-slides-item name="3">
            <div class="box3">3</div>
          </diff-slides-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
  })

  xit('可以点击上一张.',()=>{})
  xit('可以点击上一张.',()=>{})
})
