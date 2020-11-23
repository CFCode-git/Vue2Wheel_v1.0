<template>
  <div style="margin:20px;">
    <diff-pager :total-page="20" :current-page="20"></diff-pager>

  </div>
</template>

<script>
  import DiffPager from './pager/pager'

  export default {
    name: 'demo',
    components: {DiffPager},
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
