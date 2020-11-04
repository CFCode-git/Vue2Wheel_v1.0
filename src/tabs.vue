<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name:'diff-tabs',
    props:{
      selected:{
        type:String,
        required:true
      },
      direction:{
        type:String,
        default:'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value)>=0
        }
      }
    },
    data(){
      return {
        eventBus:new Vue()
      }
    },
    // 依赖注入，tabs 提供事件中心（eventBus）,用 data 做中转，让自己也能访问 eventBus
    provide(){
      return{
        eventBus:this.eventBus
      }
    },
    created(){

      // this.$emit('update:selected','xxx')
    }
  }
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>
