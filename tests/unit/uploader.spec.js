import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Uploader from '../../src/uploader/uploader'

chai.use(sinonChai)


describe('Uploader.vue.', () => {
  it('存在.', () => {
    expect(Uploader).to.be.exist
  })
  it('可以上传一个文件.', () => {
    const wrapper = mount(Uploader, {
      propsData: {
        name: 'file',
        action: '/upload',
        parseResponse: () => {}
      },
      slots: {
        default: '<button id="x">upload</button>'
      }
    })
    wrapper.find('#x').trigger('click')
    let inputWrapper = wrapper.find('input[type="file"]')
    let input = inputWrapper.element
    let file1 = new File(['xxx'], 'xxx.txt')
    let file2 = new File(['yyy'], 'yyy.txt')

    const data = new DataTransfer()
    data.items.add(file1)
    data.items.add(file2)
    input.files = data.files

  })

})
