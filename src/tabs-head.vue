<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="lineRef" v-if="x"></div>
    <!--    v-if 控制div是否显示在dom里-->
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'diff-tabs-head',
    inject: ['eventBus'],
    data() {
      return {
        x: false
      }
    },
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.x = true
        // 当 x 变为 true， line 不会马上出现在页面，而会新增一个更新 ui 任务到任务队列，
        // 等下面代码执行完了再更新 ui，所以需要用 nextTick 包起来
        this.$nextTick(() => {
          // nextTick 会新增一个函数，把下面的操作放到任务队列里面
          let {width, left} = vm.$el.getBoundingClientRect()
          this.$refs.lineRef.style.width = `${width}px`
          this.$refs.lineRef.style.transform = `translateX(${left}px)` // 使用 transform可以做硬件 3d 加速
        })

      })
    },
  }
</script>
<style lang="scss" scoped>
  $tab-height:40px;
  $blue:blue;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border: 1px solid red;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 3px solid $blue;
      transition: all 400ms;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
