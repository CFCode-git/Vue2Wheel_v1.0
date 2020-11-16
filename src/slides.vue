<template>
  <div class="diff-slides">
    <div class="diff-slides-window" ref="window">
      <div class="diff-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diff-slides',
    props: {
      selected: {type: String},
    },
    mounted() { this.updateChildren() },
    updated() { this.updateChildren() },
    methods: {
      updateChildren() {
        const first = this.$children[0]
        const selected = this.selected || first.name
        this.$children.forEach(vm => {
          vm.selected = selected
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .diff-slides {
    display: inline-block;
    &-wrapper {
      position: relative;
    }
    &-window { }
  }
</style>
