<template>
  <div class="diff-pager">
    <span v-for="page in pages" class="diff-pager-item" :class="{active:page===currentPage,separator:page === '...'}">
      {{page}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'diff-pager',
    data() {
      let pages = [
        1, this.totalPage,
        this.currentPage, this.currentPage - 1,
        this.currentPage - 2, this.currentPage + 1,
        this.currentPage + 2
      ].filter(n => n >= 1 && n <= this.totalPage)
      console.log(pages)
      let u = unique(pages.sort((a, b) => {return a - b}))
      let u2 = u.reduce((prev, current, index, array) => { // 上一个结果,当前值,当前值下标,当前数组
        prev.push(current)
        if (array[index + 1] !== undefined && array[index + 1] - array[index] > 1) {
          prev.push('...')
        }
        return prev
      }, [])
      return {
        pages: u2
      }
    },
    props: {
      totalPage: {type: Number, required: true},
      currentPage: {type: Number, required: true},
      hideIfOnePage: {type: Boolean, default: true},
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
  .diff-pager {
    &-item {
      border: 1px solid #e1e1e1; border-radius: $border-radius; padding: 0 4px;
      display: inline-flex; justify-content: center; align-items: center;
      font-size: 12px; min-width: 20px; height: 20px;
      margin: 0 4px; cursor: pointer;
      &.active, &:hover {
        border-color: $blue;
      }
      &.active {
        cursor: default;
      }
      &.separator {
        border: none;
        cursor: default;
      }
    }
  }
</style>
