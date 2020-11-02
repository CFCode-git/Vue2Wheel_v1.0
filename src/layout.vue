<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'diff-layout',
    data(){
      return {
        layoutClass:{
          hasSider:false
        }
      }
    },
    mounted() {
      // 父元素 Mounted 子元素肯定 Mounted；检查 Layout 里面是否有 sider，如果有，flex-direction 变为 row
      this.$children.forEach(child => {
        if(child.$options.name === 'diff-sider'){
          this.layoutClass.hasSider = true
        }
      })
    }
  }
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow:1;
    &.hasSider{
      flex-direction:row;
    }
  }
</style>
