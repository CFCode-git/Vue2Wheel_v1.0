<template>
  <div>
    <div style="padding:20px;">
      <diff-cascader
        :source.sync="source"
        height="200px"
        :selected.sync="selected"
        :load-data="loadData"
      >
      </diff-cascader>
    </div>
  </div>
</template>

<script>
  import Button from './button'
  import Cascader from './cascader'

  import db from './db.js'

  // 模拟 ajax
  function ajax1(parentId = 0, success, fail) {
    let id = setTimeout(() => {
      let result = db.filter(item => item.parent_id === parentId)
      success(result)
    }, 3000)
    return id
  }
  function ajax2(parentId = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = db.filter(item => item.parent_id === parentId)
        resolve(result)
      }, 500)
    })
  }

  export default {
    name: 'demo',
    components: {
      'diff-button': Button,
      'diff-cascader': Cascader
    },
    data() {
      return {
        selected: [],
        source: []
      }
    },
    created() {
      ajax2(0).then((result) => {
        this.source = result
      })
    },
    methods: {
      xxx() {
        console.log(this.selected)
        // 最外层为第零层，level0
        ajax2(this.selected[0].id).then(result => {
          // 取出 source 中对应的引用，然后用 set 将 children 放进去 source
          let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
          // 由于 this.selected 里面的值是来自于 source 内部各项的引用
          // 因此这里修改 lastLevelSelected 等同于 修改了 source 和 this.selected 里面对应的项
          this.$set(lastLevelSelected, 'children', result)
          // lastLevelSelected.children = result
        })
      },
      loadData(item, updateSource) {
        let {id} = item
        ajax2(id).then(result => {
          updateSource(result)
        })
      }
    },
    updated(){
      console.log('demo source')
      console.log(this.source)
      console.log('demo selected')
      console.log(this.selected)
    }
  }

</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  img {max-width: 100%;}
  html {
    --font-size: 14px;
  }
  body { font-style: var(--font-size); }
</style>
