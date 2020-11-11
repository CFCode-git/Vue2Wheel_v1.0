<template>
  <div>
    <div style="padding:20px;">
      <diff-cascader :source="source" height="200px" :selected.sync="selected"></diff-cascader>
    </div>
  </div>
</template>

<script>
  import Button from './button'
  import Cascader from './cascader'

  import db from './db.js'


  function ajax(parentId = 0) {
    return db.filter(item => item.parent_id === parentId)
  }

  console.log(ajax())

  export default {
    name: 'demo',
    components: {
      'diff-button': Button,
      'diff-cascader': Cascader
    },
    data() {
      return {
        selected: [],
        source: ajax()
      }
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
