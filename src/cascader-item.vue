<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <cascader-item
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :source-item="item"
      :key="item.name"></cascader-item>
  </div>
</template>
<script>
  const cascaderItem = {
    name: 'cascader-item',
    components: {cascaderItem:cascaderItem},
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
  export default cascaderItem
</script>
<style lang="scss" scoped>
  .cascaderItem {
    border: 1px solid red;margin: 10px;
  }
</style>
