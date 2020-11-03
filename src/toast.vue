<template>
  <div class="toast">
    <div v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'diff-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 2
      },
      closeButton: {
        type: Object,
        default() {
          return {text: '关闭', callback: undefined}
        }
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
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
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, .75);
  .toast {
    font-size: $font-size; line-height: 1.8; height: $toast-height;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    display: flex; align-items: center; justify-content: center;
    background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
    color: white;
    padding: 0 16px;
    .line {
      height:100%;
      border-left:1px solid #666;
      margin-left: 16px;
    }
    .close {
      padding-left:16px;
    }
  }
</style>
