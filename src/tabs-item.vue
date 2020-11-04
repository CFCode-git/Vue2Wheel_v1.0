<template>
  <div class="tabs-item" @click="onClickTab" :class="classes">
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
        return {
          active: this.active,
          disabled: this.disabled
        }
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
      onClickTab() {
        if (this.disabled) return
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue: blue;
  $disabled-color: #aaa;
  $disabled-bg: #eee;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      font-weight: bold;
      color: $blue;
    }
    &.disabled {
      color: $disabled-color;
      cursor: not-allowed;
      background: $disabled-bg;
    }
  }
</style>
