<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <Demo :index="0" :source-code="codeDemo1">
        <div class="wrapper">
          <div class="item-wrapper">
            <div class="item">
              <diff-icon name="good"></diff-icon>
              <div>good</div>
            </div>
            <div class="item">
              <diff-icon name="tips"></diff-icon>
              <div>tips</div>
            </div>
            <div class="item">
              <diff-icon name="tips"></diff-icon>
              <div>dots</div>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="item">
              <diff-icon name="setting"></diff-icon>
              <div>setting</div>
            </div>
            <div class="item">
              <diff-icon name="download">下载</diff-icon>
              <div>download</div>
            </div>
            <div class="item">
              <diff-icon name="asc"></diff-icon>
              <div>asc</div>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="item">
              <diff-icon name="desc"></diff-icon>
              <div>desc</div>
            </div>
            <div class="item">
              <diff-icon name="dots"></diff-icon>
              <div>dots</div>
            </div>
            <div class="item">
              <diff-icon name="warning"></diff-icon>
              <div>warning</div>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="item">
              <diff-icon name="loading"></diff-icon>
              <div>loading</div>
            </div>
            <div class="item">
              <diff-icon name="right"></diff-icon>
              <div>right</div>
            </div>
            <div class="item">
              <diff-icon name="left"></diff-icon>
              <div>left</div>
            </div>
          </div>
          <div class="item-wrapper">
            <div class="item">
              <diff-icon name="up"></diff-icon>
              <div>up</div>
            </div>
            <div class="item">
              <diff-icon name="down"></diff-icon>
              <div>down</div>
            </div>
          </div>
        </div>
      </Demo>
    </div>
    <div class="demo">
      <h3>可结合 diff-button 组件一起使用</h3>
      <Demo :index="1" :source-code="codeDemo2">
        <diff-button icon="download">下载</diff-button>
        <diff-button icon="setting">设置</diff-button>
        <diff-button icon="warning">警告</diff-button>
        <diff-button icon="upload">上传</diff-button>
      </Demo>
    </div>
    <div class="demo">
      <h3>其他说明</h3>
      <div>
        <p>diff-icon 使用 iconfont 提供的图标，采用 symbol 引用的方式。</p>
        <p><a href="https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.17&helptype=code">参考地址</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  import Demo from './demo'
  import Button from '../../../src/button/button'
  import Icon from '../../../src/icon/icon'

  export default {
    name: 'toast-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-button': Button,
      'diff-icon': Icon
    },
    data() {
      return {
        codeDemo1: `
          <diff-icon name="good"></diff-icon>
          <diff-icon name="tips"></diff-icon>
          <diff-icon name="tips"></diff-icon>
          <diff-icon name="setting"></diff-icon>
          <diff-icon name="download"></diff-icon>
          <diff-icon name="asc"></diff-icon>
          <diff-icon name="desc"></diff-icon>
          <diff-icon name="dots"></diff-icon>
          <diff-icon name="warning"></diff-icon>
          <diff-icon name="loading"></diff-icon>
          <diff-icon name="right"></diff-icon>
          <diff-icon name="left"></diff-icon>
          <diff-icon name="up"></diff-icon>
          <diff-icon name="down"></diff-icon>
        `.replace(/^ {8}/gm, '').trim(),
        codeDemo2: `
          <diff-button icon="download">下载</diff-button>
          <diff-button icon="setting">设置</diff-button>
          <diff-button icon="warning">警告</diff-button>
          <diff-button icon="upload">上传</diff-button>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding:1em;
      &-wrapper {
        margin:1em;
      }
    }
  }
</style>
