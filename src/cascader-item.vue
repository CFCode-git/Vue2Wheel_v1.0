<template>
  <div class="cascaderItem">
    {{sourceItem.name}}
    <x
      v-if="sourceItem.children"
      v-for="item in sourceItem.children"
      :source-item="item"
      :key="item.name"></x>
  </div>
</template>
<script>
  export default {
    name: 'x',
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
