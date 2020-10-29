<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-col',
    data() {
      return {gutter: 0,}
    },
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]}
    },
    computed: {
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      },
      colClasses() {
        return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
      }
    },

  }
</script>

<style lang="scss" scoped>
  .col {
    /*scss forEach*/
    $class-prefix: col-; /*class前缀*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }
    $class-prefix: offset-; /*class前缀*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    }
  }
</style>
