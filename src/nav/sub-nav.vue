<template>
  <div class="diff-sub-nav">
    <span>
    <slot name="title"></slot>
    </span>
    <div class="diff-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diff-sub-nav'
  }
</script>

<style scoped lang="scss">
  .diff-sub-nav {
    position: relative;
    padding: 10px 20px;
    &-popover{
      position: absolute;
      top:100%;
      left:0;
      border:1px solid red;
      white-space: nowrap;
    }
  }
</style>
