<template>
  <svg class="diff-icon" @click="$emit('click',$event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>
<script>
  import '../svg'
  export default {
    name: 'diff-icon',
    props: {
      name: {type: String}
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
