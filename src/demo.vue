<template>
  <div>
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
            </diff-slides>
    </div>
  </div>
</template>

<script>
  import DiffSlides from './slides/slides'
  import DiffSlidesItem from './slides/slides-item'
  import CustomDirective from '../src/customDirective'

  export default {
    name: 'demo',
    components: {DiffSlides, DiffSlidesItem},
    directives: {CustomDirective},
    data() {
      return {selected: undefined, message: '123'}
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:32px;
  }
</style>
