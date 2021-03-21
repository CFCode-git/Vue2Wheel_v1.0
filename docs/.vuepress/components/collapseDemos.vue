<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-collapse :selected.sync="selectedTabs">
          <diff-collapse-item title="标题1" name="1">内容1</diff-collapse-item>
          <diff-collapse-item title="标题2" name="2">内容2</diff-collapse-item>
          <diff-collapse-item title="标题3" name="3">内容3</diff-collapse-item>
        </diff-collapse>
      </Demo>
    </div>
    <div class="demo">
      <h3>手风琴效果</h3>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-collapse :selected.sync="selectedTabs" single>
          <diff-collapse-item title="标题1" name="1">内容1</diff-collapse-item>
          <diff-collapse-item title="标题2" name="2">内容2</diff-collapse-item>
          <diff-collapse-item title="标题3" name="3">内容3</diff-collapse-item>
        </diff-collapse>
      </Demo>
    </div>
    <div class="demo">
      <h3>Collapse Props</h3>
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
            <td class="des">设置默认选中的item，为name组成的数组，必填。无默认选中可置为空数组。</td>
            <td class="type">Array</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>single</td>
            <td class="des">设置是否只展开一项，默认为 false。</td>
            <td class="type">Boolean</td>
            <td>true，false</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="demo">
      <h3>CollapseItem Props</h3>
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
            <td>title</td>
            <td class="des">每一项item的标题，必填。</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>name</td>
            <td class="des">每一项item的唯一标识，必填。</td>
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
  import Button from '../../../src/button/button'
  import Collapse from '../../../src/collapse/collapse'
  import CollapseItem from '../../../src/collapse/collapse-item'

  export default {
    name: 'collapse-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-button': Button,
      'diff-collapse': Collapse,
      'diff-collapse-item': CollapseItem
    },
    data() {
      return {
        selectedTabs:['1'],
        codeDemo1: `
          <diff-collapse :selected.sync="selectedTabs">
            <diff-collapse-item title="标题1" name="1">内容1</diff-collapse-item>
            <diff-collapse-item title="标题2" name="2">内容2</diff-collapse-item>
            <diff-collapse-item title="标题3" name="3">内容3</diff-collapse-item>
          </diff-collapse>

          data() {
            return {
              selectedTabs:['1'],
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-collapse :selected.sync="selectedTabs" single>
            <diff-collapse-item title="标题1" name="1">内容1</diff-collapse-item>
            <diff-collapse-item title="标题2" name="2">内容2</diff-collapse-item>
            <diff-collapse-item title="标题3" name="3">内容3</diff-collapse-item>
          </diff-collapse>

          data() {
            return {
              selectedTabs:['1'],
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo3: `
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo4: `
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo5: `
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo6: `
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
