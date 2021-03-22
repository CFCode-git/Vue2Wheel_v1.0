---
title:快速上手
---
# 快速上手

## 引入必要资源

```js
import {ToastPlugin} from 'vue2wheel'
import {Button} from 'vue2wheel'
import Vue from 'vue'
import 'vue2wheel/dist/vue2wheel.css'
Vue.use(ToastPlugin)
```

## 注册组件

```js
 export default {
  name: 'App',
  components: {
    'diff-button': Button
  },
  methods:{
    showToast(){
      this.$toast('Hi,this is diff-toast')
    }
  }
}
```

