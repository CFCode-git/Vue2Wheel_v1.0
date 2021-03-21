<template>
  <div style="display: flex;justify-content: center;align-items: center;">
    <div style="margin:20px;">
      <diff-button @click="showToast">默认按钮</diff-button>
    </div>
  </div>
</template>

<script>
  import DiffSticky from './sticky/sticky'
  import DiffButton from './button/button'

  export default {
    name: 'demo',
    components: {
      DiffSticky,DiffButton
    },
    data() {
      return {}
    },
    methods: {
      showToast(){
        this.$toast('hello')
      }
    },
    mounted() {
    }

  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
  img { max-width: 100%; }
</style>

<style scoped lang="scss"></style>



<!--    <div style="width:600px;border:1px solid black;">-->
<!--      <p>段落9</p>-->
<!--      <diff-sticky :distance="100">-->
<!--        <div style="border:1px solid red;">-->
<!--          <div>我是一个粘滞的div</div>-->
<!--        </div>-->
<!--      </diff-sticky>-->
<!--      <p>段落1</p>-->
<!--    </div>-->
<!--    -->
