<template>
  <div class="diff-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-nav',
    props: {
      selected: {
        type: Array,
        default: () => ([])
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      items() {
        return this.$children.filter(vm => vm.$options.name === 'diff-nav-item')
      }
    },
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
          if (this.selected.indexOf(vm.name) >= 0) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        })
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('add:selected', (name) => {
            if (this.selected.indexOf(name) < 0) {
              const copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              if (this.multiple) {
                this.$emit('update:selected', copy)
              } else {
                this.$emit('update:selected', [name])
              }
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .diff-nav {
    display: flex;
    border: 1px solid red;
  }
</style>
