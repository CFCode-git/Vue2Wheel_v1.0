<template>
  <div class="diff-nav-item"
       :class="{selected,vertical}"
       :data-name="name"
       @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-nav-item',
    data() {
      return {selected: false}
    },
    props: {
      name: {type: String, required: true}
    },
    created() {
      this.root.addItem(this)
    },
    methods: {
      onClick() {
        this.root.namePath = []
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('update:selected', this.name)
      }
    },
    inject: ['root', 'vertical'],
  }
</script>

<style scoped lang="scss">
  @import '../../styles/var';
  .diff-nav-item {
    padding: 10px 20px;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:not(.vertical) {
      &.selected {
        &::after {
          content: '';
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom: 2px solid $blue;
        }
      }
    }
    &.vertical {
      &.selected {
        color: $blue;
      }
    }
  }
  .diff-sub-nav .diff-nav-item:not(.vertical) {
    color: $light-color;
    &.selected {
      background: $grey;
      color: $blue;
      &::after {
        display: none;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
</style>
