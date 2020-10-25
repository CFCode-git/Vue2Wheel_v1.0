<template>
  <button class="diff-button">hi</button>
</template>
<script>
  export default {
    name: 'diff-button'
  }
</script>
<style lang="scss">
  .diff-button {
    height: var(--button-height);
    padding: 0 1em;
    font: inherit;
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }

</style>
