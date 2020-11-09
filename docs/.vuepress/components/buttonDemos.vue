<template>
  <div>
    <diff-button>默认按钮</diff-button>
    <diff-button icon="setting">默认按钮</diff-button>
    <diff-button loading>默认按钮</diff-button>
    <diff-button disabled>默认按钮</diff-button>

    <pre>
      <code>
      {{content}}
      </code>
    </pre>
  </div>
</template>
<script>
  // 浏览器的 Api 访问限制，在 button.md 中使用时需要在外面加 <ClientOnly></ClientOnly>
  // https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6
  import Button from '../../../src/button'

  export default {
    components: {
      'diff-button': Button
    },
    data() {
      return {
        content: `
    <diff-button>默认按钮</diff-button>
    <diff-button icon="setting">默认按钮</diff-button>
    <diff-button loading>默认按钮</diff-button>
    <diff-button disabled>默认按钮</diff-button>
        `
      }
    }
  }
</script>
