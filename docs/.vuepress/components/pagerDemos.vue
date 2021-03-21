<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <p>分页器展示首页，尾页，当前页，以及当前页前后两页。</p>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-pager :total-page="10" :current-page.sync="currentPage"></diff-pager>
      </Demo>
    </div>
    <div class="demo">
      <h3>Pager Props</h3>
      <div class="attr">
        <table>
          <thead>
          <tr>
            <th>参数</th>
            <th class="des">说明</th>
            <th class="type">类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>totalPage</td>
            <td class="des">分页总数，必填</td>
            <td class="type">Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>currentPage</td>
            <td class="des">当前页数，必填</td>
            <td class="type">Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>hideInOnePage</td>
            <td class="des">当只有一页的时候是否隐藏, 默认为true</td>
            <td class="type">Boolean</td>
            <td>true, false</td>
            <td>true</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>

</template>

<script>
  import mixin from '../mixin'
  import Demo from './demo'
  import Pager from '../../../src/pager/pager'

  export default {
    name: 'pager-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-pager':Pager,
    },
    data() {
      return {
        currentPage:1,
        codeDemo1: `
          <diff-pager :total-page="10" :current-page.sync="currentPage"></diff-pager>

          data() {
            return {
              currentPage:1,
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: { }
  }
</script>

<style lang="scss" scoped>

</style>
