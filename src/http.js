export default function http(method, url, options) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => { options.success?.(xhr.response) }
  xhr.onerror = () => { options.fail?.(xhr, xhr.status) }
  xhr.send(options.data)
}
