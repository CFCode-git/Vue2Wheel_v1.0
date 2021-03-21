<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <Demo :index="0" :source-code="codeDemo1">
        <div style="width:600px;border:1px solid black;">
          <p>段落1</p>
          <p>段落2</p>
          <diff-sticky :distance="100">
            <div style="border:1px solid red; background: #fff;">
              <div>我是一个粘滞的div</div>
            </div>
          </diff-sticky>
          <p>段落1</p>
          <p>段落2</p>
          <p>段落3</p>
          <p>段落4</p>
          <p>段落5</p>
          <p>段落6</p>
          <p>段落7</p>
          <p>段落7</p>
          <p>段落7</p>
          <p>段落8</p>
          <p>段落9</p>
          <p>段落9</p>
        </div>
      </Demo>
    </div>
    <div class="demo">
      <h3>Sticky Props</h3>
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
            <td>sticky</td>
            <td class="des">设置sticky组件距离页面顶部的距离，单位 px。</td>
            <td class="type">Number</td>
            <td>——</td>
            <td>0</td>
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
  import Sticky from '../../../src/sticky/sticky'

  export default {
    name: 'sticky-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-sticky': Sticky
    },
    data() {
      return {
        codeDemo1: `
          <div style="width:600px;border:1px solid black;">
            <p>段落1</p>
            <p>段落2</p>
            <diff-sticky :distance="100">
              <div style="border:1px solid red; background: #fff;">
                <div>我是一个粘滞的div</div>
              </div>
            </diff-sticky>
            <p>段落1</p>
            <p>段落2</p>
            <p>段落3</p>
            <p>段落4</p>
            <p>段落5</p>
            <p>段落6</p>
            <p>段落7</p>
            <p>段落7</p>
            <p>段落7</p>
            <p>段落8</p>
            <p>段落9</p>
            <p>段落9</p>
          </div>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: { }
  }
</script>

<style lang="scss" scoped>

</style>
