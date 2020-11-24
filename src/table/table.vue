<template>
  <div class="diff-table-wrapper" ref="wrapper">
    <div class="diff-table-scrollbarHider" :style="{height,overflow:'auto'}">
      <table class="diff-table" :class="{bordered,compact,striped}" ref="table">
        <thead>
        <tr>
          <th>
            <input type="checkbox" @change="onChangeAllItems"
                   ref="allChecked" :checked="areAllItemsSelected"
            /></th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            <div class="diff-table-header">
              {{column.text}}

              <span v-if="column.field in orderBy"
                    class="diff-table-sorter"
                    @click="changeOrderBy(column.field)"
              > <diff-icon name="asc" :class="{active:orderBy[column.field] === 'asc'}"></diff-icon>
              <diff-icon name="desc" :class="{active:orderBy[column.field] === 'desc'}"></diff-icon>
          </span>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in dataSource" :key="item.id">
          <td>
            <input type="checkbox" @change="onChangeItem(item,index,$event)"
                   :checked="inSelectedItem(item)">
          </td>
          <td v-if="numberVisible">{{index + 1}}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{item[column.field]}}</td>
          </template>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="diff-table-loading">
      <diff-icon name="loading"></diff-icon>
    </div>
  </div>
</template>

<script>
  import DiffIcon from '../icon/icon'
  export default {
    name: 'diff-table',
    components: {DiffIcon},
    props: {
      columns: {type: Array, required: true},
      numberVisible: {type: Boolean, default: false},
      bordered: {type: Boolean, default: false},
      compact: {type: Boolean, default: false},
      striped: {type: Boolean, default: true},
      selectedItems: {type: Array, default: () => []},
      dataSource: {
        type: Array,
        required: true,
        validator(array) {
          return !(array.filter(item => item.id === undefined).length > 0)
        }
      },
      orderBy: {
        type: Object,
        default: () => ({})
      },
      loading: {type: Boolean, default: false},
      height: {type: [Number, String]}
    },
    computed: {
      areAllItemsSelected() {
        const a = this.dataSource.map(item => item.id).sort()
        const b = this.selectedItems.map(item => item.id).sort()
        if (a.length !== b.length) { return false }
        let equal = true
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        }
        return equal
      }
    },
    methods: {
      onChangeItem(item, index, e) {
        let checked = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        checked ?
          copy.push(item) :
          copy = copy.filter(i => i.id !== item.id)
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e) {
        let checked = e.target.checked
        checked ?
          this.$emit('update:selectedItems', this.dataSource) :
          this.$emit('update:selectedItems', [])
      },
      inSelectedItem(item) {
        return this.selectedItems.filter(i => i.id === item.id).length > 0
      },
      changeOrderBy(key) {
        const copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if (oldValue === 'asc') {
          copy[key] = 'desc'
        } else if (oldValue === 'desc') {
          copy[key] = true
        } else {
          copy[key] = 'asc'
        }
        this.$emit('update:orderBy', copy)
      },
      updateHeadersWidth() {
        let table2 = this.table2
        let tableHeader = Array.from(this.$refs.table.children).filter(node => node.tagName.toLowerCase() === 'thead')[0]
        let tableHeader2
        Array.from(table2.children).map(node => {
          if (node.tagName.toLowerCase() !== 'thead') {
            node.remove()
          } else {
            tableHeader2 = node
          }
        })
        Array.from(tableHeader.children[0].children).map((th, i) => {
          const {width} = th.getBoundingClientRect()
          tableHeader2.children[0].children[i].style.width = width + 'px'
        })
      }
    },
    watch: {
      selectedItems() {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
        } else {
          this.$refs.allChecked.indeterminate = true
        }
      }
    },
    mounted() {
      // mdn cloneNode
      let table2 = this.$refs.table.cloneNode(true)
      this.table2 = table2
      table2.classList.add('diff-table-copy')
      this.$refs.wrapper.appendChild(table2)
      this.updateHeadersWidth()
      this.onWindowResize = () => this.updateHeadersWidth()
      window.addEventListener('resize', this.onWindowResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onWindowResize)
      this.table.remove()
    }
  }
</script>

<style scoped lang="scss">
  @import 'var';
  $grey: darken($grey, 10%);
  .diff-table {
    border-bottom: 1px solid $grey;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    &.bordered {
      border: 1px solid $grey;
      td, th {
        border: 1px solid $grey;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    &.noStriped {
    }
    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten($grey, 10%);
          }
        }
      }
    }
    &-sorter {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 4px;
      fill: $grey;
      cursor: pointer;
      svg {
        width: 10px;
        height: 10px;
        &:first-child {
          position: relative;
          bottom: -1px;
        }
        &:nth-child(2) {
          position: relative;
          top: -1px;
        }
        &.active {
          fill: red;
        }
      }
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-wrapper {
      position: relative;
      overflow: auto;
    }
    &-loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, .8);
      svg {
        width: 50px;
        height: 50px;
        @include spin;
      }
    }
    &-copy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: #fff;
    }
    &-scrollbarHider {
      // 下面三行隐藏滚动条 ; 滚动条占 17 px
      -ms-overflow-style: none;
      &::-webkit-scrollbar {width: 0; }
      overflow: -moz-scrollbars-none;
    }
  }
</style>
