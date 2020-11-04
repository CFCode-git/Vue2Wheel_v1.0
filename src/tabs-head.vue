<template>
  <div class="tabs-head">
   <slot></slot>
    <div class="line" ref="lineRef"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'diff-tabs-head',
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected',(item,vm)=>{
        console.log(item)
      })
    },
    mounted() { }
  }
</script>
<style lang="scss" scoped>
  $tab-height:40px;
  $blue:blue;
  .tabs-head{
    display: flex;
    height:$tab-height;
    justify-content: flex-start;
    border:1px solid red;
    position: relative;
    >.line{
      position: absolute;
      bottom:0;
      border-bottom: 1px solid $blue;
      width:100px;
    }
    >.actions-wrapper{
      margin-left:auto;
    }
  }
</style>
