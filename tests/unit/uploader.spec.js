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
    // http.post = sinon.stub().returns(100) 使用stub可以统计函数被调用了几次
    let stub = sinon.stub(http, 'post').callsFake((url, options) => {
      setTimeout(() => {
        options.success('{"id":"123123"}')
      }, 100)
    })
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
      listeners: {
        'update:fileList': (fileList) => {
          wrapper.setProps({fileList: fileList})
        },
        'uploaded': () => {
          setTimeout(() => {
            expect(wrapper.find('use').element).to.not.exist
            expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
            stub.restore() /* 恢复 http.post,下一个测试用例test调用的是真post */
            done()
          })
        }
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'], 'xxx.txt')

    const data = new DataTransfer()
    data.items.add(file1)
    input.files = data.files
    inputWrapper.trigger('change')
    setTimeout(() => {
      let use = wrapper.find('use').element
      expect(use.getAttribute('xlink:href')).to.eq('#i-loading')
    }, 0)
  })
})
