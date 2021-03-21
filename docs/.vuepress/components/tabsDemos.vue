<template>
  <div>
    <div class="demo">
      <Demo :index="0" :source-code="codeDemo1">
        <diff-tabs :selected="selected">
          <diff-tabs-head>
            <diff-tabs-item name="1">1</diff-tabs-item>
            <diff-tabs-item name="2">2</diff-tabs-item>
          </diff-tabs-head>
          <diff-tabs-body>
            <diff-tabs-pane name="1">content 1</diff-tabs-pane>
            <diff-tabs-pane name="2">content 2</diff-tabs-pane>
          </diff-tabs-body>
        </diff-tabs>
      </Demo>
    </div>
    <div class="demo">
      <h3>Tabs Props</h3>
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
            <td class="des">必选，设置默认选中的tab。</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="demo">
      <h3>TabsPane Props</h3>
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
            <td class="des">必选，用来识别 TabsPane 的唯一标识。对应 TabsItem。</td>
            <td class="type">String,Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="demo">
      <h3>TabsItem Props</h3>
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
            <td class="des">必选，用来识别 TabsItem 的唯一标识，对应 TabsPane。</td>
            <td class="type">String,Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td class="des">设置该 Tab 是否禁用，默认为false。</td>
            <td class="type">Boolean</td>
            <td>true,false</td>
            <td>false</td>
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
  import Tabs from '../../../src/tabs/tabs'
  import TabsBody from '../../../src/tabs/tabs-body'
  import TabsHead from '../../../src/tabs/tabs-head'
  import TabsItem from '../../../src/tabs/tabs-item'
  import TabsPane from '../../../src/tabs/tabs-pane'

  export default {
    name: 'tabs-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-tabs': Tabs,
      'diff-tabs-body': TabsBody,
      'diff-tabs-head': TabsHead,
      'diff-tabs-pane': TabsPane,
      'diff-tabs-item': TabsItem
    },
    data() {
      return {
        selected:'1',
        codeDemo1: `
          <diff-tabs :selected="selected">
            <diff-tabs-head>
              <diff-tabs-item name="1">1</diff-tabs-item>
              <diff-tabs-item name="2">2</diff-tabs-item>
            </diff-tabs-head>
            <diff-tabs-body>
              <diff-tabs-pane name="1">content 1</diff-tabs-pane>
              <diff-tabs-pane name="2">content 2</diff-tabs-pane>
            </diff-tabs-body>
          </diff-tabs>

          data() {
            return {
              selected:'1',
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: { }
  }
</script>

<style lang="scss" scoped>

</style>
