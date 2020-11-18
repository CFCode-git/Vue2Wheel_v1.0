<template>
  <div class="diff-sub-nav">
    <span @click="onClick">
    <slot name="title"></slot>
    </span>
    <div class="diff-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diff-sub-nav',
    data() {
      return { open: false }
    },
    methods: {
      onClick() { this.open = !this.open }
    }
  }
</script>

<style scoped lang="scss">
  .diff-sub-nav {
    position: relative;
    user-select: none;
    cursor: pointer;
    > span {
      display: block;
      padding: 10px 20px;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid red;
      white-space: nowrap;
    }
  }
  .diff-sub-nav .diff-sub-nav .diff-sub-nav-popover{
    top:0;
    left:100%;
    margin-left:8px;
  }
</style>
