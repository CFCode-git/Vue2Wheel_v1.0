<template>
  <div class="cascaderItem" :style="{height:height}">
    <!--    递归方案：点击左边后 递归 渲染右边-->
    <div class="left">
      <div v-for="item in items" class="label" @click="leftSelected = item">
        {{item.name}}
        <icon class="icon" v-if="item.children" name="right"></icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <diff-cascader-items :items="rightItems" :height="height"></diff-cascader-items>
    </div>
  </div>
</template>
<script>
  import Icon from './icon.vue'

  const component = {
    name: 'diff-cascader-items',
    data() {
      return {
        leftSelected: null
      }
    },
    components: {
      Icon
    },
    props: {
      items: {
        type: Array
      },
      height: {
        type: String
      }
    },
    computed: {
      rightItems() {
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    }
  }
  export default component
</script>
<style lang="scss" scoped>
  @import 'var';
  .cascaderItem {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100px;
    .left {
      height: 100%;
      padding: .3em 0;
    }
    .right {
      height: 100%;
      border-left: 1px solid $border-color-light;
    }
    .label {
      padding: .3em 1em;
      display: flex;
      align-items: center;
      .icon{
        margin-left:1em;
        transform: scale(.8);
        fill:lighten($color,40%);
      }
    }
  }
</style>
