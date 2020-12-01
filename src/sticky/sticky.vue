<template>
  <div class="diff-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="diff-sticky" :class="classes" :style="{width,left,top}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'diff-sticky',
    data() {
      return {
        sticky: false,
        left: undefined,
        width: undefined,
        height: undefined,
        top: undefined
      }
    },
    props: {
      distance: {type: Number, default: 0}
    },
    computed: {
      classes() {
        return {
          sticky: this.sticky
        }
      }
    },
    created() {
    },
    mounted() {
      /* 不能放在methods里,否则window.onScroll调用的时候需要bind(this),而bind(this)会产生新的函数,导致无法 removeEventListener */
      this.windowScrollHandler = this._windowScrollHandler.bind(this)
      window.addEventListener('scroll', this.windowScrollHandler)

    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.windowScrollHandler)
    },
    methods: {
      getTop() {
        let {top} = this.$refs.wrapper.getBoundingClientRect() /*距离窗口顶部*/
        let y = window.scrollY /* 文档滚动距离 */
        return top + y /* 距离文档顶部 */
      },
      _windowScrollHandler() {
        let top = this.getTop()
        if (window.scrollY > top - this.distance) {
          let {height, width, left} = this.$refs.wrapper.getBoundingClientRect() /* sticky 的 wrapper 的高度 */
          this.height = height + 'px'
          this.width = width + 'px'
          this.left = left + 'px'
          this.top = this.distance + 'px'
          this.sticky = true
        } else {
          this.height = undefined
          this.width = undefined
          this.left = undefined
          this.top = undefined
          this.sticky = false
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .diff-sticky {
    &.sticky {
      position: fixed;
      /*getTop: 0;*/
      /*left: 0;*/
      /*width: 100%;*/
    }
  }
</style>
