// 创建，由用户决定是否 use
import Toast from './toast.vue'

export default {
  install(Vue, toastOptions) {
    Vue.prototype.$toast = function (message, toastOptions) {
      // 动态创建组件
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions.closeButton
        }
      })
      toast.$slots.default = [message] // 给 toast 传插槽
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}
