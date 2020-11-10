<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <!--      由于不清楚source有多少层，所以应该递归组件，当存在children的时候。-->
      <div v-for="item in source" :key="item.name">
        <cascader-item :source-item="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
  import cascaderItem from './cascader-item'
  export default {
    name: 'diff-cascader',
    components: {cascaderItem},
    props: {
      source: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'var';
  .cascader {
  }
</style>
