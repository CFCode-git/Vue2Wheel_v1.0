<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'diff-tabs',
    props: {
      selected: {type: String, required: true},
      direction: {
        type: String, default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {eventBus: new Vue()}
    },
    // 依赖注入，tabs 提供事件中心（eventBus）,用 data 做中转，让自己也能访问 eventBus
    // Vue 组件的事件不会冒泡；在哪一个组件触发的事件只能在该组件监听；比如在tabs-head emit 的 update:selected 在 tabs 不能 $on
    provide() {
      return {eventBus: this.eventBus}
    },
    created() {
    },
    mounted() { // mounted 保证所有子元素 全部创建完毕
      // this.$emit('update:selected', '这是this $emit 出来的事件')
      this.eventBus.$emit('update:selected', this.selected)
      // this.$emit('update:selected','xxx')
    },
  }
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>
