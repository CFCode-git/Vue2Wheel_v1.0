<template>
  <transition name="slide" mode="out-in">
    <div class="slides-item" v-if="visible"
         :class="{reverse}">
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
      return {
        selected: undefined,
        reverse:false
      }
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
    left: 0; top: 0;
    width:100%; height:100%;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-enter.reverse {
    transform: translateX(-100%);
    opacity: 0;
  }
  .slide-leave-to.reverse {
    transform: translateX(100%);
    opacity: 0;
  }
</style>

