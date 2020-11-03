// 创建，由用户决定是否 use
import Toast from './toast.vue'

let currentToast
export default {
  install(Vue, toastOptions) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) { currentToast.close() }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose:()=>{
          currentToast = null // 关闭了之后 currentToast 重置为 null
        }
      })
    }
  }
}

/* helpers 帮助函数 */
function createToast({Vue, message, propsData,onClose}) {
  // 动态创建组件
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message] // 给 toast 传插槽
  toast.$mount()
  toast.$on('beforeClose',onClose)// 监听到 close ，执行 onClose回调
  document.body.appendChild(toast.$el)
  return toast
}
