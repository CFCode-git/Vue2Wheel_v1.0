<template>
  <button class="diff-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')"
  >
    <diff-icon v-if="icon && !loading" :name="icon"></diff-icon>
    <diff-icon class="button-loading" v-if="loading" name="loading"></diff-icon>
    <div class="diff-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from '../icon/icon.vue'
  export default {
    name: 'diff-button',
    components:{
      'diff-icon':Icon
    },
    props: {
      icon: {type: String},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) { return value === 'left' || value === 'right' }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  /*@import 'var';*/
  @import '../../styles/_var.scss';
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  }
  .diff-button {
    font-style: $font-size;
    height: $button-height;
    padding: 0 .8em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .diff-icon { order: 1; margin-right: .3em; }
    > .diff-content { order: 2;}
    &.icon-right {
      > .diff-icon { order: 2; margin-left: .3em;margin-right: 0;}
      > .diff-content {order: 1;}
    }
  }
  .button-loading {
    @include spin;
  }

</style>
