<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapperRef"
         class="content-wrapper"
         :class="{[`position-${position}`]:true}"
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
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
        }
      }
    },
    methods: {
      // 计算 popover 位置
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapperRef)
        let {width, height, left, top} = this.$refs.triggerWrapperRef.getBoundingClientRect()
        // popover 的绝对定位相对于body元素； ClientRect 得到的 left 和 top 是相对于可视范围的。
        // scrollX 和 scrollY 是 滚动高度；整个高度是 scrollHeight
        if (this.position === 'top') {
          this.$refs.contentWrapperRef.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapperRef.style.top = top + window.scrollY + 'px'
        } else if (this.position === 'bottom') {
          this.$refs.contentWrapperRef.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapperRef.style.top = top + height + window.scrollY + 'px'
        } else if (this.position === 'left') {
          let {height: height2} = this.$refs.contentWrapperRef.getBoundingClientRect()
          this.$refs.contentWrapperRef.style.left = left + window.scrollX + 'px'
          this.$refs.contentWrapperRef.style.top = top - ((height2 - height) / 2) + window.scrollY + 'px'
        } else {
          let {height: height2} = this.$refs.contentWrapperRef.getBoundingClientRect()
          this.$refs.contentWrapperRef.style.left = left + width +  window.scrollX + 'px'
          this.$refs.contentWrapperRef.style.top = top - ((height2 - height) / 2) + window.scrollY + 'px'
        }
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
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper { /* top 和 left 由 js 计算 */
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
      &::before { border-top-color: black; top: 100%; }
      &::after { border-top-color: white; top: calc(100% - 1px); }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after { left: 10px; }
      &::before { border-bottom-color: black; bottom: 100%; }
      &::after {border-bottom-color: white; bottom: calc(100% - 1px); }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after { transform: translateY(-50%); top: 50%; }
      &::before { border-left-color: black; left: 100%; }
      &::after { border-left-color: white; left: calc(100% - 1px); }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after { transform: translateY(-50%); top: 50%; }
      &::before { border-right-color: black; right: 100%; }
      &::after { border-right-color: white; right: calc(100% - 1px); }
    }
  }
</style>
