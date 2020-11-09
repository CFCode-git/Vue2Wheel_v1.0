<template>
  <svg class="diff-icon">
    <use :xlink:href=`#i-${iconName}`></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name: 'diff-icon',
    props: {
      iconName: {type: String}
    },
    mounted() {
    }

  }
</script>
<style lang="scss" scoped>
  .diff-icon {
    width: 1em;height: 1em;
  }
</style>
