module.exports = {
  base:'/Vue2Wheel_v1.0/',
  title: 'Diff UI',
  description: '好用的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
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
        collapsable:false,
        children: ['/components/button']
      },
    ]
  }
}
