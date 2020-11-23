<template>
  <div>
    {{selected}}
    <div style="margin: 20px;">
      <diff-table :columns="columns" :data-source="dataSource" bordered @changeItem="x"></diff-table>
    </div>
    <div style="margin: 20px;">
      <diff-table :columns="columns" :data-source="dataSource" compact :striped="false"></diff-table>
    </div>
    <div style="margin:20px;">
      <diff-pager :total-page="1" :current-page.sync="currentPage" :hide-if-one-page="false"></diff-pager>
    </div>
  </div>
</template>

<script>
  import DiffPager from './pager/pager'
  import DiffTable from './table/table'

  export default {
    name: 'demo',
    components: {DiffPager, DiffTable},
    data() {
      return {
        currentPage: 1,
        selected: [],
        dataSource: [
          {id: 1, name: 'Chow', score: 100},
          {id: 2, name: 'Jack', score: 80},
          {id: 3, name: 'Jane', score: 60},
          {id: 4, name: 'Joshua', score: 40},
          {id: 5, name: 'Amy', score: 40},
          {id: 6, name: 'Alice', score: 40},
          {id: 7, name: 'Bob', score: 40},
        ],
        columns: [
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'},
        ]
      }
    },
    methods: {
      x(object) {
        let {selected, item, index} = object
        if (selected) {
          this.selected.push(item)
        } else {
          let index = this.selected.indexOf(item)
          this.selected.splice(index, 1)
        }
      }
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
