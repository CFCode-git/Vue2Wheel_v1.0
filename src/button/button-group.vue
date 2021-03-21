<template>
  <div class="diff-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'diffButtonGroup',
    mounted() {
      // console.log(this.$el.children)
      // console.log(this.$children)
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        // console.log(node.nodeName)
        if (node.nodeName !== 'BUTTON') {
          console.warn(`diff-button-group 的子元素只能是 diff-button,但你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../styles/_var.scss';
  .diff-button-group {
    display: inline-flex;
    vertical-align: middle; /*和别人对齐*/
    > .diff-button {
      border-radius: 0;
      margin-left: -1px;
      &:not(:first-child) {
        margin-left: 0;
      }
      &:first-child {
        border-top-left-radius:$border-radius;
        border-bottom-left-radius:$border-radius;
      }
      &:last-child {
        border-top-right-radius:$border-radius;
        border-bottom-right-radius:$border-radius;
      }
      &:hover {
        position: relative;
        z-index:1;
      }
    }
  }
</style>
