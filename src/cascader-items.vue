<template>
  <div class="cascaderItem" :style="{height:height}">
    <!--    递归方案：点击左边后 递归 渲染右边-->
    <div class="left">
      <div v-for="item in items" class="label" @click="onClickLabel(item)">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <diff-cascader-items ref="right"
                           :items="rightItems"
                           :height="height"
                           :level="level+1"
                           :selected="selected"
                           @update:selected="onUpdateSelected"
      ></diff-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from './icon.vue'

  const component = {
    name: 'diff-cascader-items',
    components: {
      Icon
    },
    props: {
      items: {type: Array},
      height: {type: String},
      selected: {
        type: Array, default: () => {return []},
      },
      level: {type: Number, default: 0}
    },
    computed: {
      rightItems() {
        if(this.selected && this.selected[this.level]){
          let selectedItem = this.items.filter(item=>item.name === this.selected[this.level].name)[0]
          if (selectedItem && selectedItem.children && selectedItem.children.length > 0) {
            return selectedItem.children
          }
        }
      },
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
      padding: .3em 1em;
      display: flex;
      align-items: center;
      .icon{
        margin-left:1em;
        transform: scale(.8);
        fill:lighten($color,40%);
      }
    }
  }
</style>
