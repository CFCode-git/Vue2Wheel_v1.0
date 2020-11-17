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
    {{selected.map(item=>item.name)}}
  </div>
</template>

<script>
  import Button from './button'
  import Cascader from './cascader'
  import db from '../tests/fixtures/db.js'
  import Popover from './popover'
  export default {
    name: 'demo',
    components: {
      'diff-button': Button,
      'diff-cascader': Cascader,
      'diff-popover': Popover
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
      // this.source = [{
      //   name: '浙江',
      //   children: [
      //     {
      //       name: '杭州',
      //       children: [
      //         {name: '上城'},
      //         {name: '下城'},
      //         {name: '江干'}
      //       ]
      //     },
      //     {
      //       name: '嘉兴',
      //       children: [
      //         {name: '南湖'},
      //         {name: '秀洲'},
      //         {name: '嘉善'}
      //       ]
      //     },
      //   ]
      // },
      //   {
      //     name: '福建',
      //     children: [
      //       {
      //         name: '福州',
      //         children: [
      //           {name: '鼓楼'},
      //           {name: '台江'},
      //           {name: '仓山'}
      //         ]
      //       },
      //     ]
      //   },
      //   {
      //     name: '广东',
      //     children: [
      //       {
      //         name: '广州', children: [
      //           {name: '天河'},
      //           {name: '番禺'}
      //         ]
      //       },
      //       {
      //         name: '佛山', children: [
      //           {name: '顺德'},
      //           {name: '禅城'}
      //         ]
      //       }
      //     ]
      //   }]
    },
    methods: {
      loadData(item, updateSource) {
        let {id} = item
        ajax2(id).then(result => {
          updateSource(result)
        })
      }
    },
    updated(){
    }
  }


  // 模拟 ajax
  // function ajax1(parentId = 0, success, fail) {
  //   let id = setTimeout(() => {
  //     let result = db.filter(item => item.parent_id === parentId)
  //     result.forEach(node => {
  //       if (db.filter(item => item.parent_id === node.id).length > 0) {
  //         node.isLeaf = false
  //       } else {
  //         node.isLeaf = true
  //       }
  //     })
  //     success(result)
  //   }, 3000)
  //   return id
  // }
  // function ajax2(parentId = 0) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let result = db.filter(item => item.parent_id === parentId)
  //       result.forEach(node => {
  //         if (db.filter(item => item.parent_id === node.id).length > 0) {
  //           node.isLeaf = false
  //         } else {
  //           node.isLeaf = true
  //         }
  //       })
  //       resolve(result)
  //     }, 3000)
  //   })
  // }

</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  img {max-width: 100%;}
  html {
    --font-size: 14px;
  }
  body { font-style: var(--font-size); }
</style>
