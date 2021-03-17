<template>
  <div>
    <section class="demo demo1">
      <h2>基础布局</h2>
      <p>通过设置 span 指定每一 col 的比例，每一行可分 24 个 col.</p>
      <div class="gird-wrapper">
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
      </div>
      <pre><code>{{content1}}</code></pre>
    </section>
    <section class="demo demo2">
      <h2>偏移</h2>
      <p>通过 offset 为 col 指定间隙，设置了 offset 的 col 左侧可以空出间隙. offset 单位和 span 一致, 每个代表一份. 每一行的 col + offset 为 24.</p>
      <div class="grid-wrapper">
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
      </div>
      <pre><code>{{content2}}</code></pre>
    </section>
    <section class="demo demo3">
      <h2>间隙</h2>
      <p>通过设置 gutter 为每一行统一指定间隔，单位是 px.</p>
      <p><strong>默认情况下当一行的长度大于 24 时，会自动换行，所以设置 gutter 之后，可以给 row 设置 flex-wrap: no-wrap; 取消换行。</strong></p>
      <div class="gird-wrapper">
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
      </div>
      <pre><code>{{content3}}</code></pre>
    </section>
    <section class="demo demo4">
      <h2>对齐方式</h2>
      <p>可以通过 align 属性为 row 里的 col 设置排版，有 left，right，center 三种取值.</p>
      <div class="grid-wrapper">
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
      </div>
      <pre><code>{{content4}}</code></pre>
    </section>
    <section class="demo demo5">
      <h2>响应式布局</h2>
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
      <div class="gird-wrapper">
        <diff-row>
          <diff-col class="box" span="2" :pad="{span:4}" :narrow-pc="{span:6}" :pc="{span:8}" :wide-pc="{span:10}">1</diff-col>
          <diff-col class="box" span="4" :pad="{span:5}" :narrow-pc="{span:6}" :pc="{span:7}" :wide-pc="{span:8}">1</diff-col>
          <diff-col class="box" span="8" :pad="{span:7}" :narrow-pc="{span:6}" :pc="{span:5}" :wide-pc="{span:4}">1</diff-col>
          <diff-col class="box" span="10" :pad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:2}">1</diff-col>
        </diff-row>
      </div>
      <pre><code>{{content5}}</code></pre>
      <p><strong>注意，如果在一种尺寸中使用了offset，其他尺寸若想取消offset，需要将offset设置为零以覆盖样式。</strong></p>
      <div class="gird-wrapper">
        <diff-row>
          <diff-col class="box" span="1" offset="5" :pad="{span:1,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:2,offset:0}" :wide-pc="{span:5,offset:1}">1</diff-col>
          <diff-col class="box" span="1" offset="5" :pad="{span:5,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:4,offset:0}" :wide-pc="{span:4,offset:2}">1</diff-col>
          <diff-col class="box" span="1" offset="5" :pad="{span:8,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:6,offset:0}" :wide-pc="{span:3,offset:3}">1</diff-col>
          <diff-col class="box" span="1" offset="5" :pad="{span:10,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:12,offset:0}" :wide-pc="{span:2,offset:4}">1</diff-col>
        </diff-row>
      </div>
      <pre><code>{{content6}}</code></pre>
    </section>
  </div>
</template>
<script>
  // 浏览器的 Api 访问限制，在 button.md 中使用时需要在外面加 <ClientOnly></ClientOnly>
  // https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6
  import Row from '../../../src/grid/row'
  import Col from '../../../src/grid/col'

  export default {
    components: {
      'diff-row': Row,
      'diff-col': Col
    },
    data() {
      return {
        content1: `
        <div class="gird-wrapper">
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
        </div>
       `.replace(/\t+| +/g, '').trim(),
        content2: `
        <div class="grid-wrapper">
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
        </div>
       `.replace(/\t+| +/g, '').trim(),
        content3: `
        <div class="gird-wrapper">
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
        </div>
       `.replace(/\t+| +/g, '').trim(),
        content4: `
        <div class="grid-wrapper">
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
        </div>
       `.replace(/\t+| +/g, '').trim(),
        content5: `
        <div class="gird-wrapper">
          <diff-row>
            <diff-col class="box" span="2" :pad="{span:4}" :narrow-pc="{span:6}" :pc="{span:8}" :wide-pc="{span:10}">1</diff-col>
            <diff-col class="box" span="4" :pad="{span:5}" :narrow-pc="{span:6}" :pc="{span:7}" :wide-pc="{span:8}">1</diff-col>
            <diff-col class="box" span="8" :pad="{span:7}" :narrow-pc="{span:6}" :pc="{span:5}" :wide-pc="{span:4}">1</diff-col>
            <diff-col class="box" span="10" :pad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:2}">1</diff-col>
          </diff-row>
        </div>
       `.replace(/\t+| +/g, '').trim(),
        content6: `
        <div class="gird-wrapper">
          <diff-row>
            <diff-col class="box" span="1" offset="5" :pad="{span:1,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:2,offset:0}" :wide-pc="{span:5,offset:1}">1</diff-col>
            <diff-col class="box" span="1" offset="5" :pad="{span:5,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:4,offset:0}" :wide-pc="{span:4,offset:2}">1</diff-col>
            <diff-col class="box" span="1" offset="5" :pad="{span:8,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:6,offset:0}" :wide-pc="{span:3,offset:3}">1</diff-col>
            <diff-col class="box" span="1" offset="5" :pad="{span:10,offset:0}" :narrow-pc="{span:3,offset:3}" :pc="{span:12,offset:0}" :wide-pc="{span:2,offset:4}">1</diff-col>
          </diff-row>
        </div>
       `.replace(/\t+| +/g, '').trim(),
      }
    }
  }
</script>

<style lang="scss">
  .demo {
    margin-top: 3em;
  }
  .demo1, .demo2 {
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
  }
  .demo3 {
    .row{ flex-wrap: nowrap; }
    .box {
      > span { height: 50px; display: flex; justify-content: center; align-items: center;}
      &:nth-child(odd) {
        > span {background: #a49fff;}
      }
      &:nth-child(even) {
        > span {background: #dcd7ff; }
      }
    }
  }
  .demo4 {
    .box {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(odd) { background: #a49fff; }
      &:nth-child(even) { background: #dcd7ff; }
    }
  }
  .demo5 {
    .row{ flex-wrap: nowrap; }
    .box {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(odd) { background: #a49fff; }
      &:nth-child(even) { background: #dcd7ff; }
    }
  }
</style>


