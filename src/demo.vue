<template>
  <div>
    <div>
      <diff-sticky distance="100">
        <div style="border:1px solid red;">
          <img src="https://i.loli.net/2020/12/01/dTW9yUfAkHmOQ5s.png"
               alt="">
        </div>
      </diff-sticky>
    </div>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
  </div>

</template>

<script>
  import DiffSticky from './sticky/sticky'

  export default {
    name: 'demo',
    components: {DiffSticky},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
