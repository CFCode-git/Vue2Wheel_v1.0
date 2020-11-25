<template>
  <div class="diff-table-wrapper" ref="wrapper">
    <div class="diff-table-scrollbarHider" :style="{height,overflow:'auto'}" ref="tableWrapper">
      <table class="diff-table" :class="{bordered,compact,striped}" ref="table">

        <thead>
        <tr>
          <th v-if="expandField" :style="{width:'50px'}" class="diff-table-center"></th>
          <th v-if="checkable" :style="{width:'50px'}" class="diff-table-center">
            <label><input
              type="checkbox" @change="onChangeAllItems"
              ref="allChecked" :checked="areAllItemsSelected"
            /></label></th>
          <th :style="{width:'50px'}" v-if="numberVisible">#</th>
          <th :style="{width:column.width + 'px'}" v-for="column in columns" :key="column.field">
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

        <template v-for="(item,index) in dataSource">
          <tr :key="item.id">

            <!-- 展开 Icon -->
            <td v-if="expandField" :style="{width:'50px'}" class="diff-table-center">
              <diff-icon class="diff-table-expandIcon" name="right"
                         @click="expandItem(item.id)"
              ></diff-icon>
            </td>

            <!-- checkbox 选择框 -->
            <td :style="{width:'50px'}" class="diff-table-center" v-if="checkable">
              <label><input
                type="checkbox" @change="onChangeItem(item,index,$event)"
                :checked="inSelectedItem(item)"
              ></label></td>

            <!-- 序号 -->
            <td :style="{width:'50px'}"
                v-if="numberVisible">{{index + 1}}
            </td>

            <!-- 对应字段的内容 -->
            <template v-for="column in columns">
              <td :style="{width:column.width + 'px'}"
                  :key="column.field">{{item[column.field]}}
              </td>
            </template>
          </tr>

          <tr :key="`expand-${item.id}`" v-if="inExpandedIds(item.id)">
            <td></td>
            <td :colspan="columns.length+expandedColSpan">
              {{item[expandField] || '空'}}
            </td>
          </tr>
        </template>
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
    data() {
      return {
        expandedIds: []
      }
    },
    props: {
      columns: {type: Array, required: true},
      numberVisible: {type: Boolean, default: false},
      bordered: {type: Boolean, default: false},
      compact: {type: Boolean, default: false},
      striped: {type: Boolean, default: true},
      selectedItems: {type: Array, default: () => []},
      dataSource: {
        type: Array, required: true,
        validator(array) {
          return !(array.filter(item => item.id === undefined).length > 0)
        }
      },
      orderBy: {type: Object, default: () => ({})},
      loading: {type: Boolean, default: false},
      height: {type: Number},
      expandField: {type: String},
      checkable: {type: Boolean, default: false}

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
      },
      expandedColSpan() {
        let result = -1
        if (this.checkable) {
          result += 1
        }
        if (this.expandField) {
          result += 1
        }
        return result
      }
    },
    methods: {
      expandItem(id) {
        if (this.inExpandedIds(id)) {
          this.expandedIds.splice(this.expandedIds.indexOf(id), 1)
        } else {
          this.expandedIds.push(id)
        }
      },
      inExpandedIds(id) {
        return this.expandedIds.indexOf(id) >= 0
      },
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
      let table2 = this.$refs.table.cloneNode(false)
      table2.classList.add('diff-table-copy')
      let thead = this.$refs.table.children[0]
      let {height: theadHeight} = thead.getBoundingClientRect()
      this.$refs.tableWrapper.style.marginTop = theadHeight + 'px'
      this.$refs.tableWrapper.style.height = this.height - theadHeight + 'px'
      table2.appendChild(thead)
      this.$refs.wrapper.appendChild(table2)
    },
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
    &-expandIcon {
      &:hover {cursor: pointer;}
      width: 10px;
      height: 10px;
    }
    & &-center {
      text-align: center;
    }
    &-scrollbarHider {
      // 下面三行隐藏滚动条 ; 滚动条占 17 px
      -ms-overflow-style: none;
      &::-webkit-scrollbar {width: 0; }
      overflow: -moz-scrollbars-none;
    }
  }
</style>
