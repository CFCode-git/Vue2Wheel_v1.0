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
      console.log(`${this.name}item created before on`)
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          console.log(`我${this.name}被选中了`)
          this.active = true
        } else {
          console.log(`我${this.name}没被选中`)
          this.active = false
        }
      })
      console.log('item created after on')
    },
    mounted() {
      console.log('item mounted')
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
