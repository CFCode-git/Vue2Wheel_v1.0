<template>
  <div class="toast">
    <slot></slot>
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
      autoCloseDelay:{
        type:Number,
        default:2
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
        this.$el.remove()
        this.$destroy()
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
    color:white;
    padding:0 16px;
  }
</style>
