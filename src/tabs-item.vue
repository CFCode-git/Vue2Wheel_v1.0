<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'diff-tabs-item',
    inject: ['eventBus'],
    data() { // 不需要用户传值，自己维护
      return {
        active: false
      }
    },
    props: { // 需要前端开发者传值
      disabled: {type: Boolean, default: false},
      name: {type: String | Number, require: true}
    },
    computed: {
      classes() {
        return {active: this.active}
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    mounted() {
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    &.active{
      background: red;
      color:white;
    }
  }
</style>
