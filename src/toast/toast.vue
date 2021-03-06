<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toastRef">
      <div class="message">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="lineRef"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diff-toast',
    props: {
      autoClose: {
        type: [Boolean, Number], default: 3, validator(value) {
          if (value === false || typeof value === 'number') {
            return true
          } else {
            return false
          }
        }
      },
      closeButton: {type: Object, default() { return {text: '关闭', callback: undefined} }},
      enableHtml: {type: Boolean, default: false},
      position: {
        type: String, default: 'top', validator(value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]: true}
      }
    },
    mounted() {
      this.updateStyle()
      this.execAutoClose() // 是否自动关闭


    },
    methods: {
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
          }, this.autoClose * 1000)
        }
      },
      updateStyle() {
        // style 只能获取内联样式
        // 在 plugin.js 中，先 mount，再将 toast.$el append 到 body 里面，因此 mount被调用的时候，还没有到页面里
        this.$nextTick(() => {
          // setTimeout(() => {
          //   console.log(this.$refs.toastRef.getBoundingClientRect().height)
          // if(this.$refs.lineRef){
            this.$refs.lineRef.style.height = `${this.$refs.toastRef.getBoundingClientRect().height}px`
          // }
        })
      },
      close() {
        this.$el.remove()// 删除页面的元素
        this.$emit('beforeClose') // 通知外面我要 close 了
        this.$destroy()// 删除时间绑定和组件
      },
      onClickClose() {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  $animation-duration:300ms;
  @keyframes slide-up {
    0% {opacity: 0;transform: translateY(100%)}
    100% {opacity: 1;transform: translateY(0%)}
  }
  @keyframes slide-down {
    0% {opacity: 0;transform: translateY(-100%)}
    100% {opacity: 1;transform: translateY(0%)}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  /* 用 wrapper 实现左右居中 */
  /* 上下居中的动画由 toast 的 transform 实现 */
  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    &.position-top { top: 0;
      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom { bottom: 0;
      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }
    &.position-middle { top: 50%; transform: translate(-50%, -50%);
      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }
  .toast {
    font-size: $font-size; line-height: 1.8;min-height: $toast-min-height;
    display: flex; align-items: center;
    background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    color: white; padding: 0 16px;
    .message { padding: 8px 0; }
    .line { height: 100%; border-left: 1px solid #666; margin-left: 16px; }
    .close { padding-left: 16px; flex-shrink: 0; cursor: pointer; }
  }
</style>
