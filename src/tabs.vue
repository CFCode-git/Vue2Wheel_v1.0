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
    methods: {
      checkChildren() {
        // 检查 children 类型
        if (this.$children.length === 0) { // $children 只能获取到子组件（比如tabs-head），不能获取到子元素（比如div）
          console && console.warn && console.warn('tabs子组件应该为tabs-head和tabs-body，但你没有写子组件')
        }
      },
      selectTab() {
        this.$children.forEach(vm => { // 筛选 vm
          if (vm.$options.name === 'diff-tabs-head') {
            vm.$children.forEach(childVm => {
              if (childVm.$options.name === 'diff-tabs-item' && childVm.name === this.selected) {
                this.eventBus && this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() { // mounted 保证所有子元素 全部创建完毕
      this.checkChildren()
      this.selectTab()
    },
  }
</script>
<style lang="scss" scoped>
  .tabs{

  }
</style>
