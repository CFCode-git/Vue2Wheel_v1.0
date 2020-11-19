<template>
  <div class="diff-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-nav',
    props: {
      selected: {
        type: String,
      },
      vertical: {type: Boolean, default: false}
    },
    data() {
      return {
        items: [],
        namePath:[]
      }
    },
    computed: {},
    mounted() {
      this.updateChildren()
      this.listenToChildren()
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      updateChildren() {
        this.items.forEach(vm => {
          if (this.selected === vm.name) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        })
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('update:selected', (name) => {
            this.$emit('update:selected', name)
          })
        })
      },
      addItem(vm) {
        this.items.push(vm)
      }
    },
    provide() {
      return {
        root: this,
        vertical:this.vertical
      }
    }
  }
</script>

<style scoped lang="scss">
  @import 'var';
  .diff-nav {
    display: flex;
    border-bottom: 1px solid $grey;
    color: $color;
  }
  .diff-nav {
    &.vertical {
      flex-direction: column;
      border: 1px solid $grey;
    }
  }
</style>
