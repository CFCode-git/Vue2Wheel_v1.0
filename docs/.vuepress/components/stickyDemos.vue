<template>
  <div style="width:600px;border:1px solid black;">
    <p>段落1</p>
    <p>段落2</p>
    <diff-sticky :distance="100">
      <div style="border:1px solid red;">
        <div>我是一个粘滞的div</div>
      </div>
    </diff-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落7</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落9</p>
  </div>
</template>

<script>
  import Sticky from '../../../src/sticky/sticky'
  export default{
    components:{
      'diff-sticky': Sticky
    },
    data(){
      return {
        content: `

        `
      }
    }
  }
</script>
