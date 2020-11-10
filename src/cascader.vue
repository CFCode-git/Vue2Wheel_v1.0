<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible =!popoverVisible"></div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <diff-cascader-items :items="source" class="popover" :height="height"></diff-cascader-items>
    </div>
  </div>
</template>

<script>
  import diffCascaderItems from './cascader-items'
  export default {
    name: 'diff-cascader',
    components: {'diff-cascader-items': diffCascaderItems},
    props: {
      source: {type: Array},
      height:{
        type:String
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import 'var';
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover-wrapper {
      position: absolute;
      top:100%;
      left:0;
      background: #fff;
      display: flex;
      @extend .box-shadow; /*placeholder*/

    }
  }
</style>
