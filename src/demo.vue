<template>
  <div>
    <diff-uploader
      method="POST" name="file" accept="image/*"
      action="http://127.0.0.1:8888/upload">
      <button>上传</button>
      <template slot="tips">
        <div>只能上传 300kb 以内的 png、jpeg 文件</div>
      </template>
    </diff-uploader>
  </div>
</template>

<script>
  import DiffUploader from './uploader/uploader'
  export default {
    name: 'demo',
    components: {DiffUploader},
    data() { return {fileList: []} },
    methods: {}
  }
</script>

<style>
  * { margin: 0;padding: 0;box-sizing: border-box; }
  body {background: #fff;}
</style>

<style scoped lang="scss"></style>
