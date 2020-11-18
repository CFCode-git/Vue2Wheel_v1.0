<template>
  <div class="diff-sub-nav" :class="{active}" v-click-outside="close">
    <span @click="onClick">
    <slot name="title"></slot>
    </span>
    <div class="diff-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import ClickOutside from '../click-outside'
  export default {
    name: 'diff-sub-nav',
    data() {
      return {
        open: false,
      }
    },
    props: {
      name: {type: String, required: true},
    },
    computed: {
      active() {
        return this.root.namePath.indexOf(this.name) >= 0 ? true : false
      }
    },
    methods: {
      onClick() { this.open = !this.open },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {
        }
      },
      close() {
        this.open = false
      }
    },
    inject: ['root'],
    directives: {
      ClickOutside
    }
  }
</script>

<style scoped lang="scss">
  @import 'var';
  .diff-sub-nav {
    position: relative;
    user-select: none;
    cursor: pointer;
    &.active {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
    > span {
      display: block;
      padding: 10px 20px;
    }
    &-popover {
      background: #fff;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      margin-top: 4px;
      @extend .box-shadow;
      border-radius: 4px;
      font-size: $font-size;
      min-width: 8em;
    }
  }
  .diff-sub-nav .diff-sub-nav .diff-sub-nav-popover{
    top:0;
    left:100%;
    margin-left:8px;
  }
</style>
