<template>
  <div>
    <div class="demo">
      <h3>布局一</h3>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-layout style="color: white; margin-bottom:50px;">
          <diff-header style="height: 50px; background:lightskyblue;display: flex;justify-content: center;align-items: center;">
            header
          </diff-header>
          <diff-content style="height: 100px; background:deepskyblue; display: flex;justify-content: center;align-items: center;">
            content
          </diff-content>
          <diff-footer style="height: 50px; background:lightskyblue;display: flex;justify-content: center;align-items: center;">
            footer
          </diff-footer>
        </diff-layout>
      </Demo>
    </div>
    <div class="demo">
      <h3>布局二</h3>
      <Demo :index="1" :source-code="codeDemo1">
        <diff-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <diff-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </diff-header>
          <diff-layout>
            <diff-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
              sider
            </diff-sider>
            <diff-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </diff-content>
          </diff-layout>
          <diff-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </diff-footer>
        </diff-layout>
      </Demo>
    </div>
    <div class="demo">
      <h3>布局三</h3>
      <Demo :index="2" :source-code="codeDemo2">
        <diff-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <diff-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
            sider
          </diff-sider>
          <diff-layout>
            <diff-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </diff-header>
            <diff-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </diff-content>
            <diff-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </diff-footer>
          </diff-layout>
        </diff-layout>
      </Demo>
    </div>
  </div>
</template>

<script>
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'
  import Demo from './demo'
  import Layout from '../../../src/layout/layout'
  import Header from '../../../src/layout/header'
  import Content from '../../../src/layout/content'
  import Sider from '../../../src/layout/sider'
  import Footer from '../../../src/layout/footer'

  export default {
    name: 'layout-demo',
    mixins: [mixin],
    components: {
      WIcon,
      Demo,
      'diff-header':Header,
      'diff-content':Content,
      'diff-footer':Footer,
      'diff-sider':Sider,
      'diff-layout':Layout,
    },
    data() {
      return {
        codeDemo1: `
          <diff-layout style="color: white; margin-bottom:50px;">
            <diff-header style="height: 50px; background:lightskyblue;display: flex;justify-content: center;align-items: center;">
              header
            </diff-header>
            <diff-content style="height: 100px; background:deepskyblue; display: flex;justify-content: center;align-items: center;">
              content
            </diff-content>
            <diff-footer style="height: 50px; background:lightskyblue;display: flex;justify-content: center;align-items: center;">
              footer
            </diff-footer>
          </diff-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <diff-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </diff-header>
            <diff-layout>
              <diff-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
                sider
              </diff-sider>
              <diff-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                content
              </diff-content>
            </diff-layout>
            <diff-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </diff-footer>
          </diff-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo3: `
          <diff-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <diff-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
              sider
            </diff-sider>
            <diff-layout>
              <diff-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </diff-header>
              <diff-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                content
              </diff-content>
              <diff-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </diff-footer>
            </diff-layout>
          </diff-layout>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: { }
  }
</script>

<style lang="scss" scoped>

</style>
