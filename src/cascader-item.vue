<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <cascaderItem
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :source-item="item"
      :key="item.name"></cascaderItem>
  </div>
</template>
<script>
  export default {
    name: 'cascaderItem',
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cascaderItem {
    border: 1px solid red;margin: 10px;
  }
</style>
