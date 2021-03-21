<template>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot></slot>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <pre><code class="vue">{{sourceCode}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(index)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[index] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[index] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
</template>

<script>
  import WIcon from '../../../src/icon/icon'
  import mixin from '../mixin'
  export default {
    name: 'demo2',
    mixins: [mixin],
    components: {
      WIcon,
    },
    props:{
      sourceCode:{
        type:String
      },
      index:{
        type:Number,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
