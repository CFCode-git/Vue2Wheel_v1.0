<template>
  <div class="diff-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'buttonGroup',
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
<style lang="scss">
  .diff-button-group {
    display: inline-flex;
    > .diff-button {
      border-radius: 0;
      margin-left:-1px;
      &:first-child {
        border-top-left-radius: var(--button-radius);
        border-bottom-left-radius: var(--button-radius);
      }
      &:last-child {
        border-top-right-radius: var(--button-radius);
        border-bottom-right-radius: var(--button-radius);
      }
      &:hover{
        position: relative;
        z-index:1;
      }
    }
  }
</style>
