// 默认程序入口 package.json 添加 “main” :"index.js"
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'
import Icon from './src/icon.vue'
// export {ButtonGroup as default} from './src/button-group'
export {ButtonGroup,Button,Icon}

// node 目前不支持 import
// 需要转义好后再发布给用户使用
// npx parcel build index.js --no-minify
// package.json => "main":"dist/index.js"
