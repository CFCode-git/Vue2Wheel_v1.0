<template>
  <div>
    <diff-nav :selected.sync="selected">
      <diff-nav-item name="home">首页</diff-nav-item>
      <diff-nav-item name="about">关于</diff-nav-item>
      <diff-nav-item name="hire">招聘</diff-nav-item>
    </diff-nav>
  </div>
</template>

<script>
  import DiffNav from './nav/nav'
  import DiffNavItem from './nav/nav-item'
  import DiffSubNav from './nav/sub-nav'

  export default {
    name: 'demo',
    components: {DiffNav, DiffNavItem, DiffSubNav},
    data() {
      return {
        selected:['home']
      }
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
</style>
