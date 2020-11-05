<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapperRef"
         class="content-wrapper"
         v-if="visible"
         @click.stop> <!--阻止popover内容点击事件冒泡到这里-->
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapperRef">
    <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'diff-popover',
    data() {
      return {visible: false}
    },
    methods: {
      xxx() {
        this.visible = !this.visible
        console.log('切换 visible')
        if (this.visible === true) {
          setTimeout(() => {
            document.body.appendChild(this.$refs.contentWrapperRef)
            let {width, height, left, top} = this.$refs.triggerWrapperRef.getBoundingClientRect()
            this.$refs.contentWrapperRef.style.left = left + 'px'
            this.$refs.contentWrapperRef.style.top = top + 'px'
            let eventHandler = () => {
              this.visible = false
              console.log('document 隐藏 popover')
              document.removeEventListener('click', eventHandler)
              console.log('点击body, 关闭visible')
            }
            document.addEventListener('click', eventHandler)
          })
        } else {
          console.log('vm 隐藏 popover')
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    transform: translateY(-100%);
  }
</style>
