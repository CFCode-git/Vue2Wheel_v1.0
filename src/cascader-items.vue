<template>
  <div class="cascaderItem" :style="{height:height}">
    <!--    递归方案：点击左边后 递归 渲染右边-->
    <div class="left">
      <div v-for="item in items" class="label" @click="onClickLabel(item)">
        <span class="text">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="icon loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="icon" v-if="rightArrowVisible(item)" name="right"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <diff-cascader-items ref="right"
                           :items="rightItems"
                           :height="height"
                           :level="level+1"
                           :selected="selected"
                           :load-data="loadData"
                           :loading-item="loadingItem"
                           @update:selected="onUpdateSelected"
      ></diff-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from './icon.vue'

  const component = {
    name: 'diff-cascader-items',
    components: {Icon},
    props: {
      loadingItem: {type: Object, default: () => ({})},
      items: {type: Array},
      height: {type: String},
      level: {type: Number, default: 0},
      loadData: {Function},
      loadingItem: {type: Object},
      selected: {
        type: Array, default: () => {return []},
      },
    },
    computed: {
      rightItems() {
        if(this.selected && this.selected[this.level]){
          let selectedItem = this.items.filter(item=>item.name === this.selected[this.level].name)[0]
          if (selectedItem && selectedItem.children && selectedItem.children.length > 0) {
            return selectedItem.children
          }
        }
      }
    },
    mounted() {
    },
    methods: {
      onClickLabel(item) {
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1)
        this.$emit('update:selected', copy)
      },
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
      },
      rightArrowVisible(item) {
        return this.loadData ? !item.isLeaf : item.children
      }
    },
    updated() {
    }
  }
  export default component
</script>
<style lang="scss" scoped>
  @import 'var';
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
      height: 100%;
      padding: .3em 0;
      overflow: auto;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .5em 1em;
      display: flex;
      align-items: center;
      white-space: nowrap;
      &:hover {
        background: $grey;
        cursor: pointer;
      }
      > .text {
        margin-right: 1em;
        user-select: none; /* 不允许用户选中 */
      }
      .icons {
        margin-left: auto;
        transform: scale(.8);
        fill: lighten($color, 40%);
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>
