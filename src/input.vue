<template>
  <div class="wrapper" :class="{'error':errorMessage}">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event)"
      @input="$emit('input',$event)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
    > <!-- $event 即浏览器原生触发的 change 事件-->
    <template v-if="errorMessage">
      <diff-icon icon-name="warning" class="icon-warning"></diff-icon>
      <span class="errorMessage">{{errorMessage}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon.vue'

  export default {
    name: 'diffInput',
    components: {'diff-icon': Icon},
    props: {
      value: {type: String},
      disabled: {type: Boolean, default: false},
      readonly: {type: Boolean, default: false},
      errorMessage: {type: String}

    }
  }
</script>
<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $padding: 0 8px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  $error-color: #f1453d;
  $tips-color: #8f97f1;
  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    > :not(:last-child) {margin-right: .5em;}
    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: $padding;
      font-size: inherit;
      &:hover {border-color: $border-color-hover; }
      &:focus { outline: none; box-shadow: inset 0 1px 3px $box-shadow-color; }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $error-color;
      }
    }
    .icon-warning {
      fill: $error-color;
    }
    .errorMessage {
      color: $error-color;
    }
  }
</style>
