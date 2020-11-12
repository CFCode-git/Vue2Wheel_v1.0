// 自定义指令：用于封装 DOM 操作
// 不需要 removeEventListener 因为 bind 只会在第一次初始化的时候监听，不会重复监听。
export default {
  bind: function (el, binding, vnode) {
    document.addEventListener('click', e => {
      let {target} = e
      if (el === target || el.contains(target)) {
        console.log('inside')
        return
      }
      console.log('outside')
      binding.value()
    })
  }
}
