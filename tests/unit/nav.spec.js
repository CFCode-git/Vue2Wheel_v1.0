import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import NavItem from '../../src/nav/nav-item.vue'
import SubNav from '../../src/nav/sub-nav.vue'
import Nav from '../../src/nav/nav.vue'
import Vue from 'vue'

chai.use(sinonChai)

describe('Nav.vue', () => {
  it('存在.', () => {
    expect(Nav).to.be.exist
  })

  it('支持 selected 属性', (done) => {
    Vue.component('diff-nav-item', NavItem)
    Vue.component('diff-sub-nav', SubNav)
    const wrapper = mount(Nav, {
      propsData: {selected: 'home'},
      slots: {
        default: `
       <diff-nav-item name="home">首页</diff-nav-item>
          <diff-sub-nav name="about">
            <template slot="title">关于</template>
            <diff-nav-item name="culture">企业文化</diff-nav-item>
            <diff-nav-item name="developers">开发团队</diff-nav-item>
          </diff-sub-nav>
       <diff-nav-item name="hire">招聘</diff-nav-item> 
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
      done()
    }, 0)
  })
  it('会触发 update:selected 事件', (done) => {
    Vue.component('diff-nav-item', NavItem)
    Vue.component('diff-sub-nav', SubNav)
    const callback = sinon.fake()
    const wrapper = mount(Nav, {
      propsData: {selected: 'home'},
      listeners: {
        'update:selected': callback
      },
      slots: {
        default: `
       <diff-nav-item name="home">首页</diff-nav-item>
          <diff-sub-nav name="about">
            <template slot="title">关于</template>
            <diff-nav-item name="culture">企业文化</diff-nav-item>
            <diff-nav-item name="developers">开发团队</diff-nav-item>
          </diff-sub-nav>
       <diff-nav-item name="hire">招聘</diff-nav-item> 
        `
      }
    })
    wrapper.find('[data-name="developers"]').trigger('click')
    expect(callback).to.have.been.calledWith('developers')
    done()
  })
})
