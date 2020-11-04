<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="lineRef"></div>
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
      return {}
    },
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        this.$nextTick(() => {
          let {width, left} = vm.$el.getBoundingClientRect()
          this.$refs.lineRef.style.width = `${width}px`
          this.$refs.lineRef.style.left = `${left}px`
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
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
