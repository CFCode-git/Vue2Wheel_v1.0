<template>
  <div class="diff-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-nav-item',
    data() {
      return { selected: false }
    },
    props: {
      name: { type: String, required: true }
    },
    created() {
      this.root.addItem(this)
    },
    methods:{
      onClick(){
        this.root.namePath =[]
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('add:selected', this.name)
      }
    },
    inject:['root'],
  }
</script>

<style scoped lang="scss">
  @import 'var';
  .diff-nav-item {
    padding: 10px 20px;
    position: relative;
    cursor: pointer;
    user-select: none;
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
  .diff-sub-nav .diff-nav-item {
    color: $light-color;
    &.selected {
      background: $grey;
      color: $blue;
      &::after {
        display: none;
      }
    }
  }
</style>
