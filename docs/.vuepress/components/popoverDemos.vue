<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-popover>
          <diff-button>弹出</diff-button>
          <template slot="content">
            弹出内容
          </template>
        </diff-popover>
        <diff-popover>
          <diff-button>弹出很多内容</diff-button>
          <template slot="content">
            很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容
          </template>
        </diff-popover>
      </Demo>
    </div>
    <div class="demo">
      <h3>设置弹出位置</h3>
      <p>弹出位置可以设置为top，bottom，left，right，默认为 top。</p>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-popover position="left">
          <diff-button>左方弹出</diff-button>
          <template slot="content">
            弹出内容
          </template>
        </diff-popover>
        <diff-popover position="top">
          <diff-button>上方弹出</diff-button>
          <template slot="content">
            弹出内容
          </template>
        </diff-popover>
        <diff-popover position="bottom">
          <diff-button>下方弹出</diff-button>
          <template slot="content">
            弹出内容
          </template>
        </diff-popover>
        <diff-popover position="right">
          <diff-button>右方弹出</diff-button>
          <template slot="content">
            弹出内容
          </template>
        </diff-popover>
      </Demo>
    </div>
    <div class="demo">
      <h3>设置触发方式</h3>
      <p>触发方式可以是click 或者 hover,默认是 click。</p>
      <Demo :index="2" :source-code="codeDemo3">
        <diff-popover trigger="hover">
          <diff-button>hover弹出</diff-button>
          <template slot="content">
            弹出内容
          </template>
        </diff-popover>
      </Demo>
    </div>
    <div class="demo">
      <h3>Popover Props</h3>
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
            <td>position</td>
            <td class="des">设置popover出现的位置</td>
            <td class="type">String</td>
            <td>top, bottom, left, right</td>
            <td>top</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td class="des">设置popover出现的方式</td>
            <td class="type">String</td>
            <td>click, hover</td>
            <td>click</td>
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
  import Popover from '../../../src/popover/popover'
  import Button from '../../../src/Button/Button'

  export default {
    name: 'toast-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-popover': Popover,
      'diff-button': Button
    },
    data() {
      return {
        codeDemo1: `
          <diff-popover>
            <diff-button>弹出</diff-button>
            <template slot="content">
              弹出内容
            </template>
          </diff-popover>
          <diff-popover>
            <diff-button>弹出很多内容</diff-button>
            <template slot="content">
              很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容很多弹出内容
            </template>
          </diff-popover>
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-popover position="left">
            <diff-button>左方弹出</diff-button>
            <template slot="content">
              弹出内容
            </template>
          </diff-popover>
          <diff-popover position="top">
            <diff-button>上方弹出</diff-button>
            <template slot="content">
              弹出内容
            </template>
          </diff-popover>
          <diff-popover position="bottom">
            <diff-button>下方弹出</diff-button>
            <template slot="content">
              弹出内容
            </template>
          </diff-popover>
          <diff-popover position="right">
            <diff-button>右方弹出</diff-button>
            <template slot="content">
              弹出内容
            </template>
          </diff-popover>
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo3: `
          <diff-popover trigger="hover">
            <diff-button>hover弹出</diff-button>
            <template slot="content">
              弹出内容
            </template>
          </diff-popover>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
