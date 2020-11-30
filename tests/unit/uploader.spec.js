import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Uploader from '../../src/uploader/uploader'
import http from '../../src/http'

chai.use(sinonChai)


describe('Uploader.vue.', () => {
  it('存在.', () => {
    expect(Uploader).to.be.exist
  })
  it('可以上传一个文件.', (done) => {
    http.post = (url, options) => {
      setTimeout(() => {
        options.success('{"id":"123123"}')
      }, 100)
    }
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file', action: '/upload', method: 'post',
        parseResponse: (response) => {
          let object = JSON.parse(response)
          return `/preview/${object.id}`
        },
        fileList: [],
      },
      slots: {default: '<button id="x">upload</button>'},
      listeners: {/* .sync不起作用,手动添加事件监听 */
        'update:fileList': (fileList) => {
          wrapper.setProps({fileList: fileList})
        },
        'uploaded': () => {
          setTimeout(() => {
            // 上传成功, expect loading 不存在
            expect(wrapper.find('use').element).to.not.exist
            expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
            done()
          })
        }
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    // 生成文件
    let file1 = new File(['xxx'], 'xxx.txt')

    // 生成 dataTransfer,上传文件
    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files
    // 触发 change 事件
    inputWrapper.trigger('change')
    // let use = wrapper.find('use').element
    // console.log(1, use)
    // 异步 expect loading
    setTimeout(() => {
      let use = wrapper.find('use').element
      expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    }, 0)
  })

})
