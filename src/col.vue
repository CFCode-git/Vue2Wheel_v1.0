<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'diff-col',
    props: {
      span: {
        type:[Number,String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;
    /*scss forEach*/
    $class-prefix: col-; /*class前缀*/
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24)*100%;
      }
    }
  }
</style>
