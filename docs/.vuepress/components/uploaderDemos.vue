<template>
  <div>
    <div class="demo">
      <h3>基本使用</h3>
      <Demo :index="0" :source-code="codeDemo1">
        <diff-uploader
          accept="image/*"
          method="POST"
          action="http://127.0.0.1:3000/upload"
          name="file"
          :parseResponse="parseResponse"
          :file-list.sync="fileList"
          @error="error=$event"
          :size-limit="1024*1024"
        >
          <diff-button icon="upload">上传</diff-button>
        </diff-uploader>
      </Demo>
    </div>
    <div class="demo">
      <h3>Uploader Props</h3>
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
            <td>name</td>
            <td class="des">上传的文件名</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>action</td>
            <td class="des">上传地址，必选</td>
            <td class="type">String</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>method</td>
            <td class="des">上传文件的请求方法</td>
            <td class="type">String</td>
            <td>GET，POST</td>
            <td>POST</td>
          </tr>
          <tr>
            <td>parseResponse</td>
            <td class="des">上传成功后的回调，必选，需要返回图片的 url 给 uploader 处理。</td>
            <td class="type">Function</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>fileList</td>
            <td class="des">上传的文件列表，默认传空数组。数组内部是文件对象组成的集合，对象包括name，type，size，status</td>
            <td class="type">Array</td>
            <td>——</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>sizeLimit</td>
            <td class="des">上传文件大小限制</td>
            <td class="type">Number</td>
            <td>——</td>
            <td>——</td>
          </tr>
          <tr>
            <td>accept</td>
            <td class="des">支持上传的文件类型</td>
            <td class="type">String</td>
            <td>——</td>
            <td>image/*</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td class="des">是否支持多个文件</td>
            <td class="type">Boolean</td>
            <td>true,false</td>
            <td>false</td>
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
  import Button from '../../../src/button/button'
  import Uploader from '../../../src/uploader/uploader'

  export default {
    name: 'uploader-demo',
    mixins: [mixin],
    components: {
      Demo,
      'diff-button': Button,
      'diff-uploader': Uploader
    },
    data() {
      return {
        fileList: [],
        error: '',
        codeDemo1: `
          <diff-uploader
            accept="image/*"
            method="POST"
            action="http://127.0.0.1:3000/upload"
            name="file"
            :parseResponse="parseResponse"
            :file-list.sync="fileList"
            @error="error=$event"
            :size-limit="1024*1024"
          >
            <diff-button icon="upload">上传</diff-button>
          </diff-uploader>

          data() {
            return {
              fileList: [],
              error: '',
            }
          }

          methods: {
            parseResponse (response) {
              let object = JSON.parse(response)
              let url = 'http://127.0.0.1:3000/preview/'+object.id
              return url
            },
            updateFileList(newFileList){
              this.fileList = newFileList
            }
          }
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
    methods: {
      parseResponse (response) {
        let object = JSON.parse(response)
        let url = 'http://127.0.0.1:3000/preview/'+object.id
        return url
      },
      updateFileList(newFileList){
        this.fileList = newFileList
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
