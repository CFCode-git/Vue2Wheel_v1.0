<template>
  <div>
    <div class="demo">
      <h3>横向布局</h3>
      <p>item 通过 name 作为每个 Tab 的唯一标识，selected 为 nav 默认选中的值。</p>
      <p> nav 会遍历每个 $children，根据 selected，设置对应的 item 为 active。 </p>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-nav :selected.sync="selected">
          <diff-nav-item name="home">首页</diff-nav-item>
          <diff-sub-nav name="about" style="z-index: 1">
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
                <diff-nav-item name="cu">联通</diff-nav-item>
                <diff-nav-item name="cn">电信</diff-nav-item>
              </diff-sub-nav>
            </diff-sub-nav>
          </diff-sub-nav>
          <diff-nav-item name="hire">招聘</diff-nav-item>
        </diff-nav>
      </Demo>
    </div>
    <div class="demo">
      <h3>竖向布局</h3>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-nav :selected.sync="selected" vertical style=" margin: 20px;">
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
                <diff-nav-item name="cu">联通</diff-nav-item>
                <diff-nav-item name="cn">电信</diff-nav-item>
              </diff-sub-nav>
            </diff-sub-nav>
          </diff-sub-nav>
          <diff-nav-item name="hire">招聘</diff-nav-item>
        </diff-nav>
      </Demo>
    </div>
    <div class="demo">
      <h3>Nav Props</h3>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th class="des">说明</th>
            <th class="type">类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>selected</td>
            <td class="des">导航栏的默认 item，必选，可以为空。</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>vertical</td>
            <td class="des">导航栏是否为竖向布局，默认为 false</td>
            <td class="type">Boolean</td>
            <td>true,false</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="demo">
      <h3>NavItem Props</h3>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th class="des">说明</th>
            <th class="type">类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>name</td>
            <td class="des">每一个navItem的唯一标识，必选</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  import Demo from './demo'
  import nav from '../../../src/nav/nav'
  import subNav from '../../../src/nav/sub-nav'
  import navItem from '../../../src/nav/nav-item'

  export default {
    name: 'nav-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-nav': nav,
      'diff-nav-item': navItem,
      'diff-sub-nav': subNav
    },
    data() {
      return {
        selected:'home',
        codeDemo1: `
          <diff-nav :selected.sync="selected">
            <diff-nav-item name="home">首页</diff-nav-item>
            <diff-sub-nav name="about" style="z-index: 1">
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
                  <diff-nav-item name="cu">联通</diff-nav-item>
                  <diff-nav-item name="cn">电信</diff-nav-item>
                </diff-sub-nav>
              </diff-sub-nav>
            </diff-sub-nav>
            <diff-nav-item name="hire">招聘</diff-nav-item>
          </diff-nav>

          data() {
            return {
              selected:'home',
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-nav :selected.sync="selected" vertical style=" margin: 20px;">
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
                  <diff-nav-item name="cu">联通</diff-nav-item>
                  <diff-nav-item name="cn">电信</diff-nav-item>
                </diff-sub-nav>
              </diff-sub-nav>
            </diff-sub-nav>
            <diff-nav-item name="hire">招聘</diff-nav-item>
          </diff-nav>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped></style>
