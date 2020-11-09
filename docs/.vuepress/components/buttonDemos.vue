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
