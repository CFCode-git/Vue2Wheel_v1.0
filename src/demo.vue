<template>
  <div>
    {{selectedItems}}
    <div style="margin: 20px;">
      <diff-table :columns="columns" :data-source="dataSource"
                  bordered :selected-items.sync="selectedItems"
                  :orderBy.sync="orderBy"
                  @update:orderBy="x"
                  :loading="loading"
      ></diff-table>
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
        selectedItems: [],
        loading: false,
        dataSource: [
          {id: 1, name: 'Chow', score: 100},
          {id: 2, name: 'Jack', score: 80},
          {id: 3, name: 'Jane', score: 60},
          {id: 4, name: 'Joshua', score: 40},
          {id: 5, name: 'Amy', score: 40},
          {id: 6, name: 'Alice', score: 40},
          {id: 7, name: 'Bob', score: 40},
        ],
        orderBy: { // true -- 开启排序,不确定 desc / asc
          name: true,
          score: 'desc'
        },
        columns: [
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'},
        ],

      }
    },
    methods: {
      x() {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      }
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
