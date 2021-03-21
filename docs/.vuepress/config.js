const path = require('path')
module.exports = {
  base:'/Vue2Wheel_v1.0/',
  title: 'Diff UI',
  description: '好用的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'GitHub', link: 'https://github.com/CFCode-git'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable:false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
          '/components/slides',
          '/components/pager',
          '/components/nav',
          '/components/tabs',
          '/components/uploader',
          '/components/sticky'
        ]
      },
    ]
  },
}
