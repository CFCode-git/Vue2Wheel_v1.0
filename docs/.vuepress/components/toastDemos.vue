<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <p>通过 this.$toast('弹出提示内容') 直接调出提示组件, 默认设置关闭按钮</p>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-button @click="click1">弹出提示</diff-button>
        <diff-button @click="click2">弹出提示多行内容</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>关闭按钮</h3>
      <p>可设置关闭按钮的文本以及关闭后执行的回调</p>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-button @click="click3">弹出提示</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>弹出位置</h3>
      <p>可设置弹出位置，position可接受top，middle，bottom，默认为 top。</p>
      <Demo :index="2" :source-code="codeDemo3">
        <diff-button @click="click4">上方弹出</diff-button>
        <diff-button @click="click5">中间弹出</diff-button>
        <diff-button @click="click6">下方弹出</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>支持HTML</h3>
      <p>toast 的内容可以是html标签，设置 enableHtml 为 true 即可.</p>
      <Demo :index="3" :source-code="codeDemo4">
        <diff-button @click="click7">支持HTML</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>Toast Props</h3>
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
            <td>autoClose</td>
            <td class="des">提示时间，传布尔值默认为3秒，也可以传具体的时间，单位：秒。</td>
            <td class="type">Boolean,Number</td>
            <td>——</td>
            <td>3</td>
          </tr>
          <tr>
            <td>closeButton</td>
            <td class="des">有两个字段：text 以及 callback，text表示关闭按钮的文字内容，callback是点击了关闭之后执行的回调。</td>
            <td class="type">Object</td>
            <td>——</td>
            <td>{ test: '关闭', callback: undefined }</td>
          </tr>
          <tr>
            <td>enableHtml</td>
            <td class="des">控制 消息提示内容 是否支持原生 HTML</td>
            <td class="type">Boolean</td>
            <td>true, false</td>
            <td>false</td>
          </tr>
          <tr>
            <td>position</td>
            <td class="des">用于设置提示框位置</td>
            <td class="type">String</td>
            <td>top, middle, bottom</td>
            <td>middle</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="demo">
      <h3>注意</h3>
      <div>
        <p>toast 组件与其他组件不同，需要使用插件形式引入，即 Vue.use(ToastPlugin)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  import Demo from './demo'
  import Button from '../../../src/button/button'

  export default {
    name: 'toast-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-button': Button
    },
    data() {
      return {
        codeDemo1: `
          import Vue from 'vue'
          import {ToastPlugin} from 'vue2wheel'
          Vue.use(ToastPlugin)

          <diff-button @click="usageClick1">弹出提示</diff-button>
          <diff-button @click="usageClick2">弹出提示多行内容</diff-button>

          click1(){
            this.$toast('弹出提示内容')
          },
          click2(){
            this.$toast('弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容')
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-button @click="click3">弹出提示</diff-button>

          click3() {
            this.$toast('弹出提示内容', {
              closeButton: {
                text: '关关关，马上关',
                callback: () => {
                  window.alert('关闭了')
                }
              }
            })
          }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo3: `
          <diff-button @click="click4">上方弹出</diff-button>
          <diff-button @click="click5">中间弹出</diff-button>
          <diff-button @click="click6">下方弹出</diff-button>

          click4() { this.$toast('弹出提示内容', {position: 'top'}) },
          click5() { this.$toast('弹出提示内容', {position: 'middle'}) },
          click6() { this.$toast('弹出提示内容', {position: 'bottom'}) }
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo4: `
          <diff-button @click="click7">支持HTML</diff-button>

          click7() {
            this.$toast('<p style="color:red; font-weight: bold">这是标签</p>',{
              enableHtml:true,
              position:'middle'
            })
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      click1() { this.$toast('弹出提示内容') },
      click2() { this.$toast('弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容弹出提示内容') },
      click3() {
        this.$toast('弹出提示内容', {
          closeButton: {
            text: '关关关，马上关',
            callback: () => {
              window.alert('关闭了')
            }
          }
        })
      },
      click4() { this.$toast('弹出提示内容', {position: 'top'}) },
      click5() { this.$toast('弹出提示内容', {position: 'middle'}) },
      click6() { this.$toast('弹出提示内容', {position: 'bottom'}) },
      click7() {
        this.$toast('<p style="color:red; font-weight: bold">这是标签</p>', {
          enableHtml: true,
          position: 'middle'
        })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
