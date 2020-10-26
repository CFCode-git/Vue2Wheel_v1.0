import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import buttonGroup from './button-group.vue'

// 全局注册
Vue.component('diff-button', Button)
Vue.component('diff-icon', Icon)
Vue.component('diff-button-group', buttonGroup)

new Vue({
  el: '#app',
  data: {
    loadingDemo: false
  }
})

// 单元测试
import chai from 'chai'

const expect = chai.expect
{ // console.log(Button) // 对象
  const constructor = Vue.extend(Button) // 把 Button 组件变成一个构造函数
  // console.log(constructor)
  const vm = new constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount() // 动态生成按钮 // mount 到内存而不是页面
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}

{ // console.log(Button) // 对象
  const constructor = Vue.extend(Button) // 把 Button 组件变成一个构造函数
  // console.log(constructor)
  const vm = new constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount() // 动态生成按钮
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
  // console.log('button.$el')
  // console.log(button.$el)
  // console.log('button')
  // console.log(button)
  vm.$el.remove()
  vm.$destroy()
}

{ // console.log(Button) // 对象
  const constructor = Vue.extend(Button) // 把 Button 组件变成一个构造函数
  // console.log(constructor)
  const vm = new constructor({
    propsData: {icon: 'setting',}
  })
  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div) // 动态生成按钮 // 这里为了测试 order，要挂载到页面，页面如果不渲染这个元素，css就不会在这个button上面
  let svgElement = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svgElement)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{ // console.log(Button) // 对象
  const constructor = Vue.extend(Button) // 把 Button 组件变成一个构造函数
  // console.log(constructor)
  const vm = new constructor({
    propsData: {icon: 'setting', iconPosition: 'right'}
  })
  const div = document.createElement('div')
  document.body.appendChild(div)
  vm.$mount(div) // 动态生成按钮 // 这里为了测试 order，要挂载到页面，页面如果不渲染这个元素，css就不会在这个button上面
  let svgElement = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svgElement)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

// { // 测试 Button 是否被点击，mock
//   // console.log(Button) // 对象
//   const constructor = Vue.extend(Button) // 把 Button 组件变成一个构造函数
//   // console.log(constructor)
//   const vm = new constructor({
//     propsData: {icon: 'setting'}
//   })
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   vm.$mount(div) // 动态生成按钮 // 这里为了测试 order，要挂载到页面，页面如果不渲染这个元素，css就不会在这个button上面
//   vm.$on('click', function () {
//     console.log(1)
//   })
//   let button = vm.$el
//   button.click()
//   vm.$el.remove()
//   vm.$destroy()
// }







