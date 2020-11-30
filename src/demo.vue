<template>
  <div style="margin:20px;">
    {{error}}
    <hr>
    {{fileList}}
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <diff-uploader
      method="POST" name="file" accept="image/*"
      action="http://127.0.0.1:8888/upload"
      :parse-response="parseResponse"
      :file-list.sync="fileList"
      @error="error=$event" :size-limit="1024*1024"
      multiple
    >
      <diff-button icon="upload">上传</diff-button>
    </diff-uploader>
  </div>
</template>

<script>
  import DiffUploader from './uploader/uploader'
  import DiffButton from './button/button'

  export default {
    name: 'demo',
    components: {DiffUploader, DiffButton},
    data() {
      return {
        fileList: [],
        error:''
      }
    },
    methods: {
      parseResponse(response) {
        let object = JSON.parse(response)
        return `http://127.0.0.1:8888/preview/${object.id}`
      }
    }
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
