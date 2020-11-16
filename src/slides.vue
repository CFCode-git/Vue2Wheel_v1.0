<template>
  <div class="diff-slides">
    <div class="diff-slides-window" ref="window">
      <div class="diff-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="diff-slides-dots">
      <!--      https://cn.vuejs.org/v2/guide/list.html#%E5%9C%A8-v-for-%E9%87%8C%E4%BD%BF%E7%94%A8%E5%80%BC%E8%8C%83%E5%9B%B4 -->
      <span v-for="n in childrenLength"
            :class="{'active':selectedIndex === n-1}"
            @click="select(n-1)">
        {{n-1}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diff-slides',
    props: {
      selected: {type: String},
      autoPlay: {type: Boolean, default: true}
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined
      }
    },
    mounted() {
      this.updateChildren()
      this.playAutomatically()
      this.childrenLength = this.$children.length
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      select(index) {
        this.lastSelectedIndex = this.selectedIndex
        this.$emit('update:selected', this.names[index])
      },
      playAutomatically() {
        let index = this.names.indexOf(this.getSelected())
        let run = () => {
          if (index === this.names.length) { index = 0 }
          if (index < 0) {index = this.names.length }
          let newIndex = index + 1
          this.select(newIndex)
          index++
          setTimeout(run, 2000)
        }
        // setTimeout(run, 2000)
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateChildren() {
        const selected = this.getSelected()
        this.$children.forEach(vm => {
          vm.selected = selected
          vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        })
      },
    },
    computed: {
      names() {
        return this.$children.map(vm => vm.name)
      },
      selectedIndex() {
        return this.names.indexOf(this.selected) === -1 ?
          0 :
          this.names.indexOf(this.selected)
      }
    }
  }
</script>

<style scoped lang="scss">
  .diff-slides {
    &-wrapper {
      position: relative;
    }
    &-window {
      overflow: hidden;
    }
    &-dots {
      > span {
        &.active {
          background: red;
        }
      }
    }
  }
</style>
