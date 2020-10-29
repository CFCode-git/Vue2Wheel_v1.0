<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = (value) => {
    const keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) { valid = false }
    })
    return valid
  }
  export default {
    name: 'diff-col',
    data() {
      return {gutter: 0,}
    },
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      pad: {type: Object, validator,},
      narrowPc: {type: Object, validator,},
      pc: {type: Object, validator,},
      widePc: {type: Object, validator,}
    },
    computed: {
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        }
      },
      colClasses() {
        let {span, offset, pad, narrowPc, pc, widePc} = this
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          pad && [`col-pad-${pad.span}`],
          narrowPc && [`col-narrow-pc-${narrowPc.span}`],
          pc && [`col-pc-${pc.span}`],
          widePc && [`col-wide-pc-${widePc.span}`],
        ]
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
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24)*100%;
      }
    }
    @media (min-width: 577px) and (max-width: 768px) { // iPad
      $class-prefix: col-pad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24)*100%;
        }
      }
      $class-prefix: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24)*100%;
        }
      }
    }
    @media (min-width: 769px) and (max-width: 992px) { //  窄 pc
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24)*100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24)*100%;
        }
      }
    }
    @media (min-width: 993px) and (max-width: 1200px) { //  普通 pc
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24)*100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24)*100%;
        }
      }
    }
    @media (min-width: 1201px) { //  宽 pc
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24)*100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24)*100%;
        }
      }
    }
  }

</style>
