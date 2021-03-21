<template>
  <div>
    <div class="demo">
      <h3>基础布局</h3>
      <p>通过设置 span 指定每一 col 的比例，每一行可分 24 个 col.</p>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-row>
          <diff-col class="box" span="12">span = 12</diff-col>
          <diff-col class="box" span="12">span = 12</diff-col>
        </diff-row>
        <diff-row>
          <diff-col class="box" span="8">span = 8</diff-col>
          <diff-col class="box" span="8">span = 8</diff-col>
          <diff-col class="box" span="8">span = 8</diff-col>
        </diff-row>
        <diff-row>
          <diff-col class="box" span="6">span = 6</diff-col>
          <diff-col class="box" span="6">span = 6</diff-col>
          <diff-col class="box" span="6">span = 6</diff-col>
          <diff-col class="box" span="6">span = 6</diff-col>
        </diff-row>
      </Demo>
    </div>
    <div class="demo">
      <h3>偏移</h3>
      <p>通过 offset 为 col 指定间隙，设置了 offset 的 col 左侧可以空出间隙. offset 单位和 span 一致, 每个代表一份. 每一行的 col + offset 为 24.</p>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-row>
          <diff-col class="box" span="12">span = 12</diff-col>
          <diff-col class="box" span="10" offset="2">span = 10, offset = 2</diff-col>
        </diff-row>
        <diff-row>
          <diff-col class="box" span="8">span = 8</diff-col>
          <diff-col class="box" span="6" offset="2">span = 2, offset = 6</diff-col>
          <diff-col class="box" span="4" offset="4">span=4, offset=4</diff-col>
        </diff-row>
        <diff-row>
          <diff-col class="box" span="4" offset="2">4, 2</diff-col>
          <diff-col class="box" span="2" offset="4">2, 4</diff-col>
          <diff-col class="box" span="6">6</diff-col>
          <diff-col class="box" span="3" offset="3">3, 3</diff-col>
        </diff-row>
      </Demo>
    </div>
    <div class="demo">
      <h3>间隙</h3>
      <p>通过设置 gutter 为每一行统一指定间隔，单位是 px.</p>
      <Demo :index="2" :source-code="codeDemo3">
        <diff-row gutter="10" class="gutter">
          <diff-col class="gutter-item" span="12"><span>12</span></diff-col>
          <diff-col class="gutter-item" span="12"><span>12</span></diff-col>
        </diff-row>
        <diff-row gutter="20" class="gutter">
          <diff-col class="gutter-item" span="8"><span>8</span></diff-col>
          <diff-col class="gutter-item" span="8"><span>8</span></diff-col>
          <diff-col class="gutter-item" span="8"><span>8</span></diff-col>
        </diff-row>
        <diff-row gutter="30" class="gutter">
          <diff-col class="gutter-item" span="6"><span>6</span></diff-col>
          <diff-col class="gutter-item" span="6"><span>6</span></diff-col>
          <diff-col class="gutter-item" span="6"><span>6</span></diff-col>
          <diff-col class="gutter-item" span="6"><span>6</span></diff-col>
        </diff-row>
      </Demo>
    </div>
    <div class="demo">
      <h3>对齐方式</h3>
      <p>可以通过 align 属性为 row 里的 col 设置排版，有 left，right，center 三种取值.</p>
      <Demo :index="3" :source-code="codeDemo4">
        <diff-row align="center">
          <diff-col class="box" span="8">8</diff-col>
          <diff-col class="box" span="8">8</diff-col>
        </diff-row>
        <diff-row align="left">
          <diff-col class="box" span="8">8</diff-col>
          <diff-col class="box" span="8">8</diff-col>
        </diff-row>
        <diff-row align="right">
          <diff-col class="box" span="8">6</diff-col>
          <diff-col class="box" span="8">6</diff-col>
        </diff-row>
      </Demo>
    </div>
    <div class="demo">
      <h3>响应式布局</h3>
      <p>默认状态下的布局以手机为基准，同时支持pad，narrowPc，pc，widePc共五种设备尺寸设置</p>
      <div>
        对应的尺寸如下：
        <ul>
          <li>默认 : 宽度 577px 以下的屏幕</li>
          <li>pad : 577px - 768px 宽度下的屏幕</li>
          <li>narrowPc : 769px - 992px 宽度下的屏幕</li>
          <li>pc : 993px - 1200px 宽度下的屏幕</li>
          <li>widePc : 宽度 1200px 以上的屏幕</li>
        </ul>
      </div>
      <Demo :index="4" :source-code="codeDemo5">
        <diff-row>
          <diff-col class="box" span="2" :pad="{span:4}" :narrow-pc="{span:6}" :pc="{span:8}" :wide-pc="{span:10}">1
          </diff-col>
          <diff-col class="box" span="4" :pad="{span:5}" :narrow-pc="{span:6}" :pc="{span:7}" :wide-pc="{span:8}">1
          </diff-col>
          <diff-col class="box" span="8" :pad="{span:7}" :narrow-pc="{span:6}" :pc="{span:5}" :wide-pc="{span:4}">1
          </diff-col>
          <diff-col class="box" span="10" :pad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:2}">1
          </diff-col>
        </diff-row>
      </Demo>
      <p><strong>注意，如果在一种尺寸中使用了offset，其他尺寸若想取消offset，需要将offset设置为零以覆盖样式。</strong></p>
      <Demo :index="5" :source-code="codeDemo6">
        <diff-row>
          <diff-col class="box" span="1" offset="5" :pad="{span:1,offset:0}" :narrow-pc="{span:3,offset:3}"
                    :pc="{span:2,offset:0}" :wide-pc="{span:5,offset:1}">1
          </diff-col>
          <diff-col class="box" span="1" offset="5" :pad="{span:5,offset:0}" :narrow-pc="{span:3,offset:3}"
                    :pc="{span:4,offset:0}" :wide-pc="{span:4,offset:2}">1
          </diff-col>
          <diff-col class="box" span="1" offset="5" :pad="{span:8,offset:0}" :narrow-pc="{span:3,offset:3}"
                    :pc="{span:6,offset:0}" :wide-pc="{span:3,offset:3}">1
          </diff-col>
          <diff-col class="box" span="1" offset="5" :pad="{span:10,offset:0}" :narrow-pc="{span:3,offset:3}"
                    :pc="{span:12,offset:0}" :wide-pc="{span:2,offset:4}">1
          </diff-col>
        </diff-row>
      </Demo>
    </div>
    <div class="demo">
      <h3>Col Props</h3>
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
            <td>span</td>
            <td class="des">表示当前格子的大小占一整行的比例，span = 1 为 1/24</td>
            <td class="type">String，Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>offset</td>
            <td class="des">表示当前格子距离左侧的偏移距离，该距离占一整行的比例，offset = 1 为 1/24</td>
            <td class="type">String，Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>pad</td>
            <td class="des">表示设备屏幕尺寸大于等于577px，小于769px的布局设置。</td>
            <td class="type">Object</td>
            <td>{ span: String / Number , offset: String / Number }</td>
            <td>——</td>
          </tr>
          <tr>
            <td>narrowPc</td>
            <td class="des">表示设备屏幕尺寸大于等于769px，小于993px的布局设置。</td>
            <td class="type">Object</td>
            <td>{ span: String / Number , offset: String / Number }</td>
            <td>——</td>
          </tr>
          <tr>
            <td>pc</td>
            <td class="des">表示设备屏幕尺寸大于等于993px，小于1201px的布局设置。</td>
            <td class="type">Object</td>
            <td>{ span: String / Number , offset: String / Number }</td>
            <td>——</td>
          </tr>
          <tr>
            <td>widePc</td>
            <td class="des">表示设备屏幕尺寸大于等于1201px的布局设置。</td>
            <td class="type">Object</td>
            <td>{ span: String / Number , offset: String / Number }</td>
            <td>——</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="demo">
      <h3>Row Props</h3>
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
            <td>gutter</td>
            <td class="des">每个格子之间的间隙，单位：px</td>
            <td class="type">Number，String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>align</td>
            <td class="des">控制一行里面的格子的整体位置</td>
            <td class="type">String</td>
            <td>left, right, center</td>
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
  import Row from '../../../src/grid/row'
  import Col from '../../../src/grid/col'
  import Demo from './demo'

  export default {
    name: 'grid-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-row': Row,
      'diff-col': Col
    },
    data() {
      return {
        codeDemo1: `
          <diff-row>
            <diff-col class="box" span="12">span = 12</diff-col>
            <diff-col class="box" span="12">span = 12</diff-col>
          </diff-row>
          <diff-row>
            <diff-col class="box" span="8">span = 8</diff-col>
            <diff-col class="box" span="8">span = 8</diff-col>
            <diff-col class="box" span="8">span = 8</diff-col>
          </diff-row>
          <diff-row>
            <diff-col class="box" span="6">span = 6</diff-col>
            <diff-col class="box" span="6">span = 6</diff-col>
            <diff-col class="box" span="6">span = 6</diff-col>
            <diff-col class="box" span="6">span = 6</diff-col>
          </diff-row>

          .box {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:nth-child(odd) {
              background: #a49fff;
            }
            &:nth-child(even) {
              background: #dcd7ff;
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-row>
            <diff-col class="box" span="12">span = 12</diff-col>
            <diff-col class="box" span="10" offset="2">span = 10, offset = 2</diff-col>
          </diff-row>
          <diff-row>
            <diff-col class="box" span="8">span = 8</diff-col>
            <diff-col class="box" span="6" offset="2">span = 2, offset = 6</diff-col>
            <diff-col class="box" span="4" offset="4">span=4, offset=4</diff-col>
          </diff-row>
          <diff-row>
            <diff-col class="box" span="4" offset="2">4, 2</diff-col>
            <diff-col class="box" span="2" offset="4">2, 4</diff-col>
            <diff-col class="box" span="6">6</diff-col>
            <diff-col class="box" span="3" offset="3">3, 3</diff-col>
          </diff-row>

          .box {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:nth-child(odd) {
              background: #a49fff;
            }
            &:nth-child(even) {
              background: #dcd7ff;
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo3: `
          <diff-row gutter="10">
            <diff-col class="box" span="12"><span>12</span></diff-col>
            <diff-col class="box" span="12"><span>12</span></diff-col>
          </diff-row>
          <diff-row gutter="20">
            <diff-col class="box" span="8"><span>8</span></diff-col>
            <diff-col class="box" span="8"><span>8</span></diff-col>
            <diff-col class="box" span="8"><span>8</span></diff-col>
          </diff-row>
          <diff-row gutter="30">
            <diff-col class="box" span="6"><span>6</span></diff-col>
            <diff-col class="box" span="6"><span>6</span></diff-col>
            <diff-col class="box" span="6"><span>6</span></diff-col>
            <diff-col class="box" span="6"><span>6</span></diff-col>
          </diff-row>

          .gutter{
            flex-wrap:nowrap;
            &-item {
              > span { height: 50px; display: flex; justify-content: center; align-items: center;}
              &:nth-child(odd) {
                > span {background: #a49fff;}
              }
              &:nth-child(even) {
                > span {background: #dcd7ff; }
              }
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo4: `
          <diff-row align="center">
            <diff-col class="box" span="8">8</diff-col>
            <diff-col class="box" span="8">8</diff-col>
          </diff-row>
          <diff-row align="left">
            <diff-col class="box" span="8">8</diff-col>
            <diff-col class="box" span="8">8</diff-col>
          </diff-row>
          <diff-row align="right">
            <diff-col class="box" span="8">6</diff-col>
            <diff-col class="box" span="8">6</diff-col>
          </diff-row>

          .box {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:nth-child(odd) {
              background: #a49fff;
            }
            &:nth-child(even) {
              background: #dcd7ff;
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo5: `
          <diff-row>
            <diff-col class="box" span="2" :pad="{span:4}" :narrow-pc="{span:6}" :pc="{span:8}" :wide-pc="{span:10}">1</diff-col>
            <diff-col class="box" span="4" :pad="{span:5}" :narrow-pc="{span:6}" :pc="{span:7}" :wide-pc="{span:8}">1</diff-col>
            <diff-col class="box" span="8" :pad="{span:7}" :narrow-pc="{span:6}" :pc="{span:5}" :wide-pc="{span:4}">1</diff-col>
            <diff-col class="box" span="10" :pad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:2}">1</diff-col>
          </diff-row>

          .box {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:nth-child(odd) {
              background: #a49fff;
            }
            &:nth-child(even) {
              background: #dcd7ff;
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo6: `
          <diff-row>
            <diff-col class="box" span="1" offset="5" :pad="{span:1,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:2,offset:0}" :wide-pc="{span:5,offset:1}">1</diff-col>
            <diff-col class="box" span="1" offset="5" :pad="{span:5,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:4,offset:0}" :wide-pc="{span:4,offset:2}">1</diff-col>
            <diff-col class="box" span="1" offset="5" :pad="{span:8,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:6,offset:0}" :wide-pc="{span:3,offset:3}">1</diff-col>
            <diff-col class="box" span="1" offset="5" :pad="{span:10,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:12,offset:0}" :wide-pc="{span:2,offset:4}">1</diff-col>
          </diff-row>

          .box {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:nth-child(odd) {
              background: #a49fff;
            }
            &:nth-child(even) {
              background: #dcd7ff;
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style lang="scss" scoped>
  .gutter {
    flex-wrap: nowrap;
    &-item {
      > span { height: 50px; display: flex; justify-content: center; align-items: center;}
      &:nth-child(odd) {
        > span {background: #a49fff;}
      }
      &:nth-child(even) {
        > span {background: #dcd7ff; }
      }
    }
  }
  .box {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(odd) {
      background: #a49fff;
    }
    &:nth-child(even) {
      background: #dcd7ff;
    }
  }
</style>
