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
        this.$emit('add:selected',this.name)
      }
    },
    inject:['root']
  }
</script>

<style scoped lang="scss">
  .diff-nav-item {
    padding: 10px 20px;
    &.selected {
      background: red;
      color:white;
    }
  }
</style>
