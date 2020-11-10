<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <diff-cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :source-item="item"
      :key="item.name"></diff-cascader-item>
  </div>
</template>
<script>
  const component = {
    name: 'diff-cascader-item',
    components: {'diff-cascader-item': component},
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
  export default component
</script>
<style lang="scss" scoped>
  .cascaderItem {
    border: 1px solid red;margin: 10px;
  }
</style>
