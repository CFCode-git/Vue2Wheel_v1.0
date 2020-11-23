<template>
  <div style="margin:20px;">
    <diff-pager :total-page="1" :current-page.sync="currentPage" :hide-if-one-page="false"></diff-pager>

  </div>
</template>

<script>
  import DiffPager from './pager/pager'

  export default {
    name: 'demo',
    components: {DiffPager},
    data() {
      return {
        currentPage: 1
      }
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
