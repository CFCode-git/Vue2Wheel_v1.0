<template>
  <div class="diff-table-wrapper">
    <table class="diff-table" :class="{bordered,compact,striped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems"></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns">{{column.text}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource">
        <td v-if="numberVisible">{{index + 1}}</td>
        <td><input type="checkbox" @change="onChangeItem(item,index,$event)"></td>
        <template v-for="column in columns">
          <td>{{item[column.field]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'diff-table',
    props: {
      columns: {type: Array, required: true},
      dataSource: {type: Array, required: true},
      numberVisible: {type: Boolean, default: false},
      bordered: {type: Boolean, default: false},
      compact: {type: Boolean, default: false},
      striped: {type: Boolean, default: true},
      selectedItems: {type: Array, default: () => []}
    },
    methods: {
      onChangeItem(item, index, e) {
        let checked = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if (checked) {
          copy.push(item)
        } else {
          let index = copy.indexOf(item)
          copy.splice(index, 1)
        }
        this.$emit('update:selectedItems', copy)
      },
      onChangeAllItems(e) {
      }
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
  }
</style>
