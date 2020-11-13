// 自定义指令：用于封装 DOM 操作
// 不需要 removeEventListener 因为 bind 只会在第一次初始化的时候监听，不会重复监听。
let onClickDocument = (e) => {
  let {target} = e
  callbacks.forEach(item => {
    //item.el item.callback
    if (item.el === target || item.el.contains(target)) {
      return
    } else {
      item.callback()
    }
  })
}
document.addEventListener('click', onClickDocument)

let callbacks = []

export default {
  bind: function (el, binding, vnode) {
    callbacks.push({el, callback: binding.value})
  }
}

let removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}
export {removeListener}

