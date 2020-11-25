<template>
  <div class="diff-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="width:0;height:0;overflow: hidden;"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
        <template v-if="file.status === 'uploading'">
          loading...
        </template>
        <img :src="file.url" width="100" height="100" alt=""> {{file.name}}
        <button @click="onDeleteFile(file)">x</button>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    name: 'diff-uploader',
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
      fileList: {type: Array, default: () => []}
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
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        return input
      },
      beforeUploadFile(rawFile, newName) {
        let {size, type} = rawFile
        this.$emit('update:fileList', [
          ...this.fileList,
          {name: newName, type, size, status: 'uploading'}
        ])
      },
      afterUploadFile(newName, url) {
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
      uploadFile(rawFile) {
        let {name} = rawFile
        let newName = this.generateName(name)
        this.beforeUploadFile(rawFile, newName)
        let formData = new FormData()
        formData.append(this.name, rawFile)
        this.doUploadFile(formData, (response) => {
          let url = this.parseResponse(response)
          this.url = url
          this.afterUploadFile(newName, url)
        }, () => {
          this.uploadError(newName)
        })
      },
      uploadError(newName) {
        let file = this.fileList.filter(file => file.name === newName)[0]
        let index = this.fileList.indexOf(file)
        let fileCopy = JSON.parse(JSON.stringify(file))
        fileCopy.status = 'fail'
        // fileCopy.failMessage = '尺寸过大'
        let fileListCopy = JSON.parse(JSON.stringify(this.fileList))
        fileListCopy.splice(index, 1, fileCopy)
        this.$emit('update:fileList', fileListCopy)
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
      doUploadFile(formData, success, fail) {
        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => {
          success(xhr.response)
          // fail()
        }
        xhr.send(formData)
      },
      onClickUpload() {
        let input = this.createInput()
        input.addEventListener('change', () => {
          this.uploadFile(input.files[0])
          input.remove()
        })
        input.click()
      }
    }
  }
</script>
<style scoped lang="scss">
  .diff-uploader {
    border: 1px solid red;
  }
</style>
