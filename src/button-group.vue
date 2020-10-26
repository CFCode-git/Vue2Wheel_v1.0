<template>
  <div class="diff-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'buttonGroup',
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
