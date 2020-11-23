<template>
  <div class="diff-pager" :class="{hide:hideIfOnePage === true && totalPage <= 1}">
    <span class="diff-pager-nav prev" :class="{disabled:currentPage ===1}" @click="onClickPage(currentPage-1)">
      <diff-icon name="left"></diff-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page===currentPage"><span class="diff-pager-item current">{{page}}</span></template>
      <template v-else-if="page ==='...'">
        <diff-icon name="dots" class="diff-pager-separator">...</diff-icon>
      </template>
      <template v-else><span class="diff-pager-item other" @click="onClickPage(page)">{{page}}</span></template>
    </template>
    <span class="diff-pager-nav next" :class="{disabled:currentPage === totalPage}"
          @click="onClickPage(currentPage +1)">
      <diff-icon name="right"></diff-icon>
    </span>
  </div>
</template>
<script>
  import DiffIcon from '../icon/icon'

  export default {
    name: 'diff-pager',
    components: {DiffIcon},
    props: {
      totalPage: {type: Number, required: true},
      currentPage: {type: Number, required: true},
      hideIfOnePage: {type: Boolean, default: true},
    },
    methods: {
      onClickPage(n) {
        if (n < 1 || n > this.totalPage) return
        this.$emit('update:currentPage', n)
      }
    },
    computed: {
      pages() {
        return unique([1, this.totalPage,
          this.currentPage, this.currentPage - 1,
          this.currentPage - 2, this.currentPage + 1,
          this.currentPage + 2]
          .filter(n => n >= 1 && n <= this.totalPage).sort((a, b) => {return a - b}))
          .reduce((prev, current, index, array) => { // 上一个结果,当前值,当前值下标,当前数组
            prev.push(current)
            if (array[index + 1] !== undefined && array[index + 1] - array[index] > 1) {
              prev.push('...')
            }
            return prev
          }, [])
      }
    }
  }

  function unique(array) {
    // return [...new Set(array)]
    const object = {}
    array.map(number => {
      object[number] = true
    })
    return Object.keys(object).map((s) => parseInt(s, 10))
  }

</script>
<style scoped lang="scss">
  @import 'var';
  .diff-pager { display: flex; justify-content: flex-start; align-items: center;user-select: none;
    $width: 20px;
    $height: 20px;
    $font-size: 12px;
    &.hide {
      display: none;
    }
    &-separator { width: $width;font-size: $font-size; }
    &-item {
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px;
      display: inline-flex; justify-content: center; align-items: center;
      font-size: $font-size; min-width: $width; height: $height;
      margin: 0 4px; cursor: pointer;
      &.current, &:hover {
        border-color: $blue;
      }
      &.current {
        cursor: default;
      }
      &.separator {
        border: none;
        cursor: default;
      }
    }
    &-nav {
      margin: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: $grey;
      width: $width;
      height: $height;
      border-radius: $border-radius;
      font-size: $font-size;
      cursor: pointer;
      &.disabled {
        svg {
          fill: darken($grey, 30%);
        }
        cursor: not-allowed;
      }
    }
  }
</style>
