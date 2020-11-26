<template>
  <div class="diff-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <ol class="diff-uploader-fileList">
      <li v-for="file in fileList" :key="file.name">

        <template v-if="file.status === 'uploading'">
          <div class="diff-uploader-loading-wrapper">
            <diff-icon name="loading" class="diff-uploader-loading"></diff-icon>
          </div>
        </template>
        <template v-else-if="file.type.indexOf('image') === 0">
          <img class="diff-uploader-image" :src="file.url" width="32" height="32" alt="">
        </template>
        <template v-else>
          <div class="diff-uploader-defaultImage"></div>
        </template>

        <span class="diff-uploader-name" :class="{[file.status]:file.status}">{{file.name}}</span>
        <button class="diff-uploader-delete" @click="onDeleteFile(file)">x</button>
      </li>
    </ol>
    <div ref="temp" style="width:0;height:0;overflow: hidden;"></div>
  </div>
</template>
<script>
  import DiffIcon from '../icon/icon'
  export default {
    name: 'diff-uploader',
    components: {DiffIcon},
    data() {
      return {
        url: 'about:blank'
      }
    },
    props: {
      name: {type: String, required: true},
      action: {type: String, required: true},
      method: {type: String, default: 'POST'},
      parseResponse: {type: Function, required: true},
      fileList: {type: Array, default: () => []},
      sizeLimit: {type: Number},
    },
    methods: {
      onDeleteFile(file) {
        let answer = window.confirm('你确定要删除吗')
        if (answer) {
          let copy = [...this.fileList]
          let index = copy.indexOf(file)
          copy.splice(index, 1)
          this.$emit('update:fileList', copy)
        }
      },
      createInput() {
        this.$refs.temp.innerHTML = ''
        let input = document.createElement('input')
        input.type = 'file'
        input.multiple = true
        this.$refs.temp.appendChild(input)
        return input
      },
      beforeUploadFile(rawFile, newName) {
        let {size, type} = rawFile
        console.log(size)
        if (size > this.sizeLimit/*2*1024*1024 kb*/) {
          this.$emit('error', '文件过大')
          return false
        } else {
          // this.$emit('update:fileList', [
          //   ...this.fileList,
          //   {name: newName, type, size, status: 'uploading'}
          // ])
          this.$emit('addFile',{name: newName, type, size, status: 'uploading'})
          return true
        }
      },
      afterUploadFiles(newName, url) {
        // 从 fileList 找到更新状态的 file 和它的 index
        let file = this.fileList.filter(file => file.name === newName)[0]
        let index = this.fileList.indexOf(file)
        // 拷贝 file,更改状态
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.url = url
        fileCopy.status = 'success'
        // 拷贝 fileList,将更改状态后的 file 更换到里面
        let fileListCopy = [...this.fileList]
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
      },
      uploadFiles(rawFiles) {
        for (let i = 0; i < rawFiles.length; i++) {
          let rawFile = rawFiles[i]
          let {name} = rawFile
          let newName = this.generateName(name)
          let bool = this.beforeUploadFile(rawFile, newName)
          if (!bool) { return }
          let formData = new FormData()
          formData.append(this.name, rawFile)
          this.doUploadFiles(
            formData,
            (response) => {
              let url = this.parseResponse(response)
              this.url = url
              this.afterUploadFiles(newName, url)
            },
            (xhr) => {
              this.uploadError(xhr, newName)
            }
          )
        }
      },
      uploadError(xhr, newName) {
        let file = this.fileList.filter(file => file.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        // fileCopy.failMessage = '尺寸过大' // 后台返回 failReason
        let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
        let error = ''
        if (xhr.status === 0) { error = '网络中断' }
        this.$emit('error', error)
      },
      generateName(name) {
        // 生成新name
        if (this.fileList.filter(file => file.name === name).length > 0) {
          let dotIndex = name.lastIndexOf('.')
          let nameWithoutExtension = name.substring(0, dotIndex)
          let extension = name.substring(dotIndex)
          name = nameWithoutExtension + '(1)' + extension
          if (this.fileList.filter(file => file.name === name).length > 0) {
            let index = 2
            while (this.fileList.filter(file => file.name === name).length > 0) {
              let dotIndex = name.lastIndexOf('.')
              let nameWithoutExtension = name.substring(0, dotIndex)
              let realName = nameWithoutExtension.split('')
              realName.splice(-2, 1, index)
              nameWithoutExtension = realName.join('')
              let extension = name.substring(dotIndex)
              name = nameWithoutExtension + extension
              index++
            }
          }
        }
        return name
      },
      doUploadFiles(formData, success, fail) {
        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        // vue emit事件是同步的, render 任务是异步的
        xhr.onload = () => { success(xhr.response) }
        xhr.onerror = () => { fail(xhr, xhr.status) }
        xhr.send(formData)
      },
      onClickUpload() {
        let input = this.createInput()
        input.addEventListener('change', () => {
          this.uploadFiles(input.files)
          input.remove()
        })
        input.click()
      },
    }
  }
</script>
<style scoped lang="scss">
  @import 'var';
  .diff-uploader {
    &-fileList {
      list-style: none;
      > li {
        display: flex;
        align-items: center;
        margin: 8px 0;
        border: 1px solid darken($grey, 10);
      }
    }
    &-defaultImage {
      border: 1px solid red;
      width: 32px; height: 32px;
      margin-right: 8px;
    }
    &-image { margin-right: 8px; }
    &-name {
      margin-right: auto;
      &.success {
        color: green;
      }
      &.fail {
        color: red;
      }
    }
    &-delete { width: 32px; height: 32px; }
    &-loading { width: 24px; height: 24px; @include spin;
      &-wrapper {
        width: 32px; height: 32px;
        margin-right: 8px; display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
