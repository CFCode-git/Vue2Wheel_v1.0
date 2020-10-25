<template>
  <svg class="diff-icon">
    <use :xlink:href=`#i-${iconName}`></use>
  </svg>
</template>
<script>
  export default {
    name: 'diff-icon',
    props: {
      iconName: {type: String}
    },
    mounted() {
    }

  }
</script>
<style lang="scss">
  .diff-icon {
    width: 1em;height: 1em;
  }
</style>
