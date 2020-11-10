<template>
  <div>
    <p>111111</p>
    <diff-cascader :source="source" height="200px"></diff-cascader>
    <p>111111</p>
  </div>
</template>

<script>
  import Button from './button'
  import Cascader from './cascader'

  export default {
    name: 'demo',
    components: {
      'diff-button': Button,
      'diff-cascader': Cascader
    },
    data() {
      return {
        source: [
          {
            name: '浙江',
            children: [
              {
                name: '杭州',
                children: [
                  {name: '上城'},
                  {name: '下城'},
                  {name: '江干'}
                ]
              },
              {
                name: '嘉兴',
                children: [
                  {name: '南湖'},
                  {name: '秀洲'},
                  {name: '嘉善'}
                ]
              },
            ]
          },
          {
            name: '福建',
            children: [
              {
                name: '福州',
                children: [
                  {name: '鼓楼'},
                  {name: '台江'},
                  {name: '仓山'}
                ]
              },
            ]
          },
          {
            name: '广东',
            children: [
              {
                name: '广州', children: [
                  {name: '天河'},
                  {name: '番禺'}
                ]
              },
              {
                name: '佛山', children: [
                  {name: '顺德'},
                  {name: '禅城'}
                ]
              }
            ]
          }
        ]
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
