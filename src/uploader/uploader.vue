<template>
  <div class="diff-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="width:0;height:0;overflow: hidden;"></div>
    <ol>
      <li v-for="file in fileList" :key="file.name">
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
      uploadFile(file) {
        let formData = new FormData()
        formData.append(this.name, file)
        let {name, size, type} = file
        this.doUploadFile(formData, (response) => {
          let url = this.parseResponse(response)
          this.url = url

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


          this.$emit('update:fileList', [...this.fileList, {name, type, size, url}])
        })
      },
      doUploadFile(formData, success) {
        let xhr = new XMLHttpRequest()
        xhr.open(this.method, this.action)
        xhr.onload = () => { success(xhr.response) }
        xhr.send(formData)
      },
      onClickUpload() {
        let input = this.createInput()
        input.addEventListener('change', () => {
          let file = input.files[0]
          this.uploadFile(file)
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
