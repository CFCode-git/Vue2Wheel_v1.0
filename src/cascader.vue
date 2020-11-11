<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible =!popoverVisible">
        {{result || '选择城市'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <diff-cascader-items
        :items="source"
        class="popover"
        :height="height"
        :selected="selected"
        @update:selected="onUpdateSelected"
      >
      </diff-cascader-items>
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
      height: {type: String},
      selected: {type: Array, default: () => {return []}}
    },
    data() {
      return {
        popoverVisible: false
      }
    },
    methods: {
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      }
    },
    computed: {
      result() {
        return this.selected.map((item) => item.name).join(',')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'var';
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid $border-color;
      height: $input-height;
      line-height: 1.2;
      min-width: 10em;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      border-radius: $border-radius;
    }
    .popover-wrapper {
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      display: flex;
      @extend .box-shadow; /*placeholder*/
      margin-top: 8px;
    }
  }
</style>
