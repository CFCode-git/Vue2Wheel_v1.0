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
      selected: {type: Array, default: () => {return []}},
      loadData: {
        type: Function
      }
    },
    data() {
      return {
        popoverVisible: false
      }
    },
    methods: {
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]
        let simplest = (children, id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children, id) => {
          // 分治法
          // 分成有 children 和没有 children 两组
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if (item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
          })
          let found = simplest(noChildren, id)
          if (found) {
            // 如果没有 children，得到found后返回
            return found
          } else {
            // 如果有 children，先当作没有 children 用 simplest 找一遍
            // 再 complex 它的 children
            found = simplest(hasChildren, id)
            if (found) {
              return found
            } else {
              for (let i = 0; i < hasChildren.length; i++) {
                found = complex(hasChildren[i].children, id)
                if (found) {
                  return found
                }
              }
              return undefined
            }
            return hasChildren.length > 0 ? complex(hasChildren, id) : undefined
          }
        }
        let updateSource = (result) => {
          let copy = JSON.parse(JSON.stringify(this.source))
          let toUpdate = complex(copy, lastItem.id)
          console.log(toUpdate)
          toUpdate.children = result
          this.$emit('update:source',copy)
        }
        this.loadData(lastItem, updateSource)
        // 回调 把外界传的函数调用一下；调用回调的时候传一个函数给外面调用
      }
    },
    computed: {
      result() {
        return this.selected.map((item) => item.name).join(',')
      }
    },
    updated(){
      console.log('更新了')
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
