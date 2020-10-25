<template>
  <button class="diff-button" :class="{[`icon-${iconPosition}`]:true}">
    <diff-icon v-if="icon" :icon-name="icon"></diff-icon>
    <div class="diff-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    name: 'diff-button',
    props: {
      icon: {type: String},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) { return value === 'left' || value === 'right' }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
  .diff-button {
    height: var(--button-height); padding: 0 .8em; font: inherit;
    border-radius: var(--button-radius); border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover { border-color: var(--border-color-hover); }
    &:active { background-color: var(--button-active-bg); }
    &:focus { outline: none; }
    > .diff-icon { order: 1; margin-right: .3em; }
    > .diff-content { order: 2;}
    &.icon-right {
      > .diff-icon { order: 2; margin-left: .3em;margin-right: 0;}
      > .diff-content {order: 1;}
    }
  }


</style>
