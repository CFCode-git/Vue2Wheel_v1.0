<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapperRef"
         class="content-wrapper"
         v-if="visible"> <!--阻止popover内容点击事件冒泡到这里-->
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapperRef" style="display: inline-block;">
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
      // 计算 popover 位置
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapperRef)
        let {left, top} = this.$refs.triggerWrapperRef.getBoundingClientRect()
        // popover 的绝对定位相对于body元素； ClientRect 得到的 left 和 top 是相对于可视范围的。
        // scrollX 和 scrollY 是 滚动高度；整个高度是 scrollHeight
        this.$refs.contentWrapperRef.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapperRef.style.top = top + window.scrollY + 'px'
      },
      // 处理点击 document 的情况，同时避开点击 content 的情况
      onClickDocument(e) {
        // 如果点击的是 popover 或者 popover 的 content,就拜拜
        if (this.$refs.popover.contains(e.target) || this.$refs.contentWrapperRef.contains(e.target)) { return }
        this.close()
      },
      open() {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        // 如果点击的是按钮或者按钮里面的东西，切换visible
        if (this.$refs.triggerWrapperRef.contains(event.target)) {
          this.visible === true ? this.close() : this.open()
        }
      },
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
