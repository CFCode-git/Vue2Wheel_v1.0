<template>
  <div>
    <diff-nav :selected.sync="selected" style="margin:20px;">
      <diff-nav-item name="home">首页</diff-nav-item>
      <diff-sub-nav name="about">
        <template slot="title">关于</template>
        <diff-nav-item name="culture">企业文化</diff-nav-item>
        <diff-nav-item name="developers">开发团队</diff-nav-item>
        <diff-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <diff-nav-item name="wechat">微信</diff-nav-item>
          <diff-nav-item name="qq">QQ</diff-nav-item>
          <diff-sub-nav name="phone">
            <template slot="title">手机</template>
            <diff-nav-item name="cm">移动</diff-nav-item>
            <diff-nav-item name="cu">电信</diff-nav-item>
            <diff-nav-item name="cn">联通</diff-nav-item>
          </diff-sub-nav>
        </diff-sub-nav>
      </diff-sub-nav>
      <diff-nav-item name="hire">招聘</diff-nav-item>
    </diff-nav>

    <diff-nav :selected.sync="selected" vertical style="width:200px;margin: 200px 20px 20px;">
      <diff-nav-item name="home">首页</diff-nav-item>
      <diff-sub-nav name="about">
        <template slot="title">关于</template>
        <diff-nav-item name="culture">企业文化</diff-nav-item>
        <diff-nav-item name="developers">开发团队</diff-nav-item>
        <diff-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <diff-nav-item name="wechat">微信</diff-nav-item>
          <diff-nav-item name="qq">QQ</diff-nav-item>
          <diff-sub-nav name="phone">
            <template slot="title">手机</template>
            <diff-nav-item name="cm">移动</diff-nav-item>
            <diff-nav-item name="cu">电信</diff-nav-item>
            <diff-nav-item name="cn">联通</diff-nav-item>
          </diff-sub-nav>
        </diff-sub-nav>
      </diff-sub-nav>
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
        selected: 'culture',
      }
    },
    watch: {
      selected(newSelected) {
        newSelected === 'developers' &&
        alert('developer')
      }
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
</style>
