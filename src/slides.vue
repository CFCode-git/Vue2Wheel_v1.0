<template>
  <div class="diff-slides">
    <div class="diff-slides-window" ref="window">
      <div class="diff-slides-wrapper">
        <slot></slot>
      </div>
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
    mounted() {
      this.updateChildren()
      this.playAutomatically()
    },
    updated() { this.updateChildren() },
    methods: {
      playAutomatically() {
        const names = this.$children.map(vm => vm.name)
        let index = names.indexOf(this.getSelected())
        console.log(index)
        setInterval(()=>{
          if(index === names.length){
            index = 0
          }
          this.$emit('update:selected',names[index+1])
          index++
        },3000)
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateChildren() {
        const selected = this.getSelected()
        this.$children.forEach(vm => {
          vm.selected = selected
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .diff-slides {
    display: inline-block;
    &-wrapper {
      position: relative;
    }
    &-window { }
  }
</style>
