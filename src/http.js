function core(method, url, options) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => { options.success?.(xhr.response) }
  xhr.onerror = () => { options.fail?.(xhr, xhr.status) }
  xhr.send(options.data)
}


export default {
  get() {},
  post(url, options) {
    console.log('post 了')
    core('post', url, options)
  },
  put() {},
  delete() {},
  patch() {},
}

