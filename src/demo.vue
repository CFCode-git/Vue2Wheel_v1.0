<template>
  <div>
    <diff-slides class="wrapper" :selected.sync="selected">
      <diff-slides-item name="1">
        <div class="box">1</div>
      </diff-slides-item>
      <diff-slides-item name="2">
        <div class="box">2</div>
      </diff-slides-item>
      <diff-slides-item name="3">
        <div class="box">3</div>
      </diff-slides-item>
      <!--      <div v-for></div>-->
    </diff-slides>
  </div>
</template>

<script>
  import DiffSlides from './slides'
  import DiffSlidesItem from './slides-item'

  export default {
    name: 'demo',
    components: {DiffSlides, DiffSlidesItem},
    data() {
      return { selected: '2' }
    },
    created() {
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  .wrapper{margin:20px;}
  .box {
    width:100%;
    height: 300px;
    background: #ddd;
    border: 1px solid red;
  }
</style>
