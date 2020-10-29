<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-row',
    props: {
      gutter: {type: [Number, String]},
      align: {
        type: String,
        validator(value) {
          return ['left', 'center', 'right'].includes(value)
        }
      }
    },
    /* created 创建对象/组件, 但是还没挂载到页面, mounted 已经挂载到页面;
    *  Vue 父子组件钩子顺序
    *  顺序: row created => col created => col mounted => row mounted
    * */
    computed: {
      rowStyle() {
        return {marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px'}
      },
      rowClass() {
        let {align} = this
        return [align && `align-${align}`]
      }

    },
    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap:wrap;/*让用户设置超过24的时候换行*/
    &.align-left{
      justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }
</style>
