<template>
  <div class="diff-table-wrapper">
    <table class="diff-table" :class="{bordered,compact,striped}">
      <thead>
      <tr>
        <th>
          <input type="checkbox" @change="onChangeAllItems"
                 ref="allChecked" :checked="areAllItemsSelected"/>
        </th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns" :key="column.field">{{column.text}}</th>
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
</template>

<script>
  export default {
    name: 'diff-table',
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
