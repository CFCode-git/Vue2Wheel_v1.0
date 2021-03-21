<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <p>默认是自动播放的，可通过autoPlayDelay设置间隔。如果需要取消自动播放，可以设置 autoPlay 为 false</p>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-slides :selected.sync="selected1" :auto-play-delay="1000">
          <diff-slides-item name="1">
            <div class="box color1">1</div>
          </diff-slides-item>
          <diff-slides-item name="2">
            <div class="box color2">2</div>
          </diff-slides-item>
          <diff-slides-item name="3">
            <div class="box color3">3</div>
          </diff-slides-item>
        </diff-slides>
      </Demo>
    </div>
    <div class="demo">
      <h3>Slides Props</h3>
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
            <td class="des">默认状态下展示的第一页</td>
            <td class="type">Boolean,Number</td>
            <td>——</td>
            <td>5</td>
          </tr>
          <tr>
            <td>autoPlay</td>
            <td class="des">录播组件是否自动播放</td>
            <td class="type">Boolean</td>
            <td>true,false</td>
            <td>true</td>
          </tr>
          <tr>
            <td>autoPlayDelay</td>
            <td class="des">自动播放的时间间隔，单位：ms。</td>
            <td class="type">Number</td>
            <td>——</td>
            <td>2000</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="demo">
      <h3>SlidesItem Props</h3>
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
            <td class="des">每一个item的唯一标识，必填</td>
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
  import SlidesItem from '../../../src/slides/slides-item'
  import Slides from '../../../src/slides/slides'

  export default {
    name: 'slides-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-button': Button,
      'diff-slides': Slides,
      'diff-slides-item': SlidesItem,
    },
    data() {
      return {
        selected1:'1',
        codeDemo1: `
          <diff-slides :selected.sync="selected1" :auto-play-delay="1000">
            <diff-slides-item name="1">
              <div class="box color1">1</div>
            </diff-slides-item>
            <diff-slides-item name="2">
              <div class="box color2">2</div>
            </diff-slides-item>
            <diff-slides-item name="3">
              <div class="box color3">3</div>
            </diff-slides-item>
          </diff-slides>

          data() {
            return {
              selected1:'1',
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: { }
  }
</script>

<style lang="scss" scoped>
  .box{
    height: 300px;
    background: blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.color1{
      background: lightskyblue;
    }
    &.color2{
      background: lightgreen;
    }
    &.color3{
      background: palevioletred;
    }
  }
</style>
