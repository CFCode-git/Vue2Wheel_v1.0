<template>
  <div class="toast" ref="toastRef">
    <div v-if="enableHtml" v-html="$slots.default[0]"></div>
    <slot v-else></slot>
    <div class="line" ref="lineRef"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'diff-toast',
    data(){
      return{
        height:''
      }
    },
    props: {
      autoClose: {type: Boolean, default: true},
      autoCloseDelay: {type: Number, default: 50},
      closeButton: {type: Object, default() { return {text: '关闭', callback: undefined} }},
      enableHtml: {  // 默认不支持 html
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
      // style 只能获取内联样式
      // 在 plugin.js 中，先 mount，再将 toast.$el append 到 body 里面，因此 mount被调用的时候，还没有到页面里
      this.$nextTick(()=>{
      // setTimeout(() => {
      //   console.log(this.$refs.toastRef.getBoundingClientRect().height)
        this.$refs.lineRef.style.height = `${this.$refs.toastRef.getBoundingClientRect().height}px`
      })

    },
    methods: {
      close() {
        this.$el.remove()// 删除页面的元素
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
  .toast {
    font-size: $font-size; line-height: 1.8;min-height: $toast-min-height;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; justify-content: center;
    background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    color: white;
    padding: 0 16px;
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
    }
  }
</style>
