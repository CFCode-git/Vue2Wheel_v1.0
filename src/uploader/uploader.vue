<template>
  <div class="diff-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="temp" style="width:0;height:0;overflow: hidden;"></div>
  </div>
</template>
<script>
  export default {
    name: 'diff-uploader',
    props: {
      name: {type: String, required: true},
      action: {type: String, required: true},
      method: {type: String, default: 'POST'},
    },
    methods: {
      onClickUpload() {
        let input = document.createElement('input')
        input.type = 'file'
        this.$refs.temp.appendChild(input)
        input.addEventListener('change', () => {
          let file = input.files[0]
          input.remove()
          console.log(file)
          let formData = new FormData()
          formData.append(this.name, file)
          let xhr = new XMLHttpRequest()
          xhr.open(this.method, this.action)
          xhr.onload = function () {
            console.log(xhr.response)
          }
          xhr.send(formData)
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
