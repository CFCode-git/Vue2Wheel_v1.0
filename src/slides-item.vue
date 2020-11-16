<template>
  <transition name="slide" mode="out-in">
    <div class="slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'diff-slides-item',
    props: {
      name: {type: String, required: true}
    },
    data() {
      return {selected: undefined}
    },
    computed: {
      visible() {
        return this.selected === this.name
      }
    }
  }
</script>
<style scoped lang="scss">
  .slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 1s;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  /*.slides-item {*/
  /*  position: absolute;*/
  /*  top:0;*/
  /*  left:0;*/
  /*}*/
</style>

