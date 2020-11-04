<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'diff-tabs-pane',
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log('pane', name)
      })
    }
  }
</script>
<style lang="scss" scoped>
  .tabs-pane{

  }
</style>
