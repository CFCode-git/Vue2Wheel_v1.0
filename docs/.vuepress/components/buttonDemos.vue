<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <p>默认状态，loading状态，以及 disable 状态</p>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-button>默认按钮</diff-button>
        <diff-button loading>默认按钮</diff-button>
        <diff-button disabled>默认按钮</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>icon</h3>
      <p>可以设置 icon 以及icon 的位置</p>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-button icon="setting">默认按钮</diff-button>
        <diff-button icon="setting" icon-position="right">默认按钮</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>可以分组</h3>
      <p>可以设置 icon，loading，以及 disable 状态</p>
      <Demo :index="2" :source-code="codeDemo3">
        <div>
          <diff-button-group>
            <diff-button icon="left"> 上一页 </diff-button>
            <diff-button> 更多 </diff-button>
            <diff-button icon="right"> 下一页 </diff-button>
          </diff-button-group>
        </div>
        <div style="margin-top:1em;">
          <diff-button-group>
            <diff-button icon="left"> 上一页 </diff-button>
            <diff-button icon="right"> 下一页 </diff-button>
          </diff-button-group>
        </div>
      </Demo>
    </div>
    <div class="demo">
      <h3>Button Props</h3>
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
            <td>icon</td>
            <td class="des">图标名称</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>iconPosition</td>
            <td class="des">icon位置</td>
            <td class="type">String</td>
            <td>left,right</td>
            <td>left</td>
          </tr>
          <tr>
            <td>loading</td>
            <td class="des">按钮loading状态</td>
            <td class="type">Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td class="des">按钮不可选中状态</td>
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
  // 浏览器的 Api 访问限制，在 button.md 中使用时需要在外面加 <ClientOnly></ClientOnly>
  // https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6

  import mixin from '../mixin'
  import Button from '../../../src/button/button'
  import ButtonGroup from '../../../src/button/button-group'
  import Demo from './demo'

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      'diff-button': Button,
      'diff-button-group':ButtonGroup,
      Demo
    },
    data() {
      return {
        codeDemo1: `
        <diff-button>默认按钮</diff-button>
        <diff-button loading>默认按钮</diff-button>
        <diff-button disabled>默认按钮</diff-button>
        `.replace(/^\s*/gm, '').trim(),
        codeDemo2: `
        <diff-button icon="setting">默认按钮</diff-button>
        <diff-button icon="setting" icon-position="right">默认按钮</diff-button>
        `.replace(/^\s*/gm, '').trim(),
        codeDemo3: `
          <div>
            <diff-button-group>
              <diff-button icon="left"> 上一页 </diff-button>
              <diff-button> 更多 </diff-button>
              <diff-button icon="right"> 下一页 </diff-button>
            </diff-button-group>
          </div>
          <div style="margin-top:1em;">
            <diff-button-group>
              <diff-button icon="left"> 上一页 </diff-button>
              <diff-button icon="right"> 下一页 </diff-button>
            </diff-button-group>
          </div>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods:{
      click1(){
        console.log('hi111')
      },
      click2(){
        console.log('hi222')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
