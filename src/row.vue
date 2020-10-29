<template>
  <div class="row" :style="{marginLeft:-gutter/2 + 'px',marginRight:-gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-row',
    props: {gutter: {type: [Number, String]}},
    /* created 创建对象/组件, 但是还没挂载到页面, mounted 已经挂载到页面;
    *  Vue 父子组件钩子顺序
    *  顺序: row created => col created => col mounted => row mounted
    * */
    mounted() {
      console.log(this.$children)
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
  }
</style>
