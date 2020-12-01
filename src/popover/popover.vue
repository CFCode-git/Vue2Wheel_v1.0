<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapperRef"
         class="content-wrapper"
         :class="{[`position-${position}`]:true}"
         v-if="visible"> <!--阻止popover内容点击事件冒泡到这里-->
      <slot name="content" :close="close"></slot>
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
      return {visible: false,}
    },
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String, default: 'click',
        validator(value) { return ['click', 'hover'].indexOf(value) >= 0 }
      }
    },
    methods: {
      // 计算 popover 位置
      positionContent() {
        let {triggerWrapperRef, contentWrapperRef} = this.$refs
        document.body.appendChild(contentWrapperRef)
        let {width, height, left, top} = triggerWrapperRef.getBoundingClientRect()
        let {height: height2} = contentWrapperRef.getBoundingClientRect()
        let positionHash = {
          top: {top: top + window.scrollY, left: left + window.scrollX},
          bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
          right: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX + width},
          left: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX}
        }
        // popover 的绝对定位相对于body元素； ClientRect 得到的 left 和 getTop 是相对于可视范围的。
        // scrollX 和 scrollY 是 滚动高度；整个高度是 scrollHeight
        contentWrapperRef.style.left = positionHash[this.position].left + 'px'
        contentWrapperRef.style.top = positionHash[this.position].top + 'px'
      },
      // 处理点击 document 的情况，同时避开点击 content 的情况
      onClickDocument(e) {
        // 如果点击的是 popover 或者 popover 的 content,就拜拜
        // if (this.$refs.popover.contains(e.target) || this.$refs.contentWrapperRef.contains(e.target)) { return }
        if (this.$refs.popover && this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) { return }
        if (this.$refs.contentWrapperRef && this.$refs.contentWrapperRef === e.target || this.$refs.contentWrapperRef.contains(e.target)) { return }
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
    // 在 created 添加事件监听，根据 trigger 觉得监听的事件类型。
    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    beforeDestroy() {
      if (this.trigger === 'click') {
        this.$refs.popover?.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover?.removeEventListener('mouseenter', this.open)
        this.$refs.popover?.removeEventListener('mouseleave', this.close)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper { /* getTop 和 left 由 js 计算 */
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    /*box-shadow: 0 0 3px rgba(0, 0, 0, .5);*/
    /* drop-shadow + background 可以使 popover 和 小三角形 都有 box-shadow 的阴影，但兼容性可能不太好，可以用 caniuse.com 查看 */
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em; /*默认最大宽度：最多显示20个字*/
    word-break: break-all; /*英文网站最好不要加这个样式*/
    &::before, &::after {
      content: ''; display: block;
      border: 10px solid transparent;
      height: 0; width: 0;
      position: absolute;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after { left: 10px; }
      &::before { border-top-color: black;border-bottom:none; top: 100%; }
      &::after { border-top-color: white;border-bottom:none; top: calc(100% - 1px); }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after { left: 10px; }
      &::before { border-bottom-color: black;border-top: none; bottom: 100%; }
      &::after {border-bottom-color: white;border-top: none; bottom: calc(100% - 1px); }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after { transform: translateY(-50%); top: 50%; }
      &::before { border-left-color: black;border-right:none; left: 100%; }
      &::after { border-left-color: white;border-right:none; left: calc(100% - 1px); }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after { transform: translateY(-50%); top: 50%; }
      &::before { border-right-color: black;border-left:none; right: 100%; }
      &::after { border-right-color: white;border-left:none; right: calc(100% - 1px); }
    }
  }
</style>
