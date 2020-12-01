<template>
  <div class="diff-sticky-wrapper" ref="wrapper">
    <div class="diff-sticky" :class="classes">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'diff-sticky',
    data() {
      return {
        sticky: false
      }
    },
    props: {},
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
      let top = this.top()
      window.addEventListener('scroll', () => {
        if (window.scrollY > top) {
          let height = this.height()
          this.$refs.wrapper.style.height = height + 'px'
          this.sticky = true
        } else {
          this.sticky = false
        }
      })
    },
    methods: {
      top() {
        let {top} = this.$refs.wrapper.getBoundingClientRect() /*距离窗口顶部*/
        let y = window.scrollY /* 文档滚动距离 */
        return top + y /* 距离文档顶部 */
      },
      height() {
        let {height} = this.$refs.wrapper.getBoundingClientRect() /* sticky 的 wrapper 的高度 */
        return height
      },
    },
  }
</script>
<style lang="scss" scoped>
  .diff-sticky {
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
