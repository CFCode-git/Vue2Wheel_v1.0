import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '../../src/validator'

chai.use(sinonChai)


describe('Validator', () => {
  it('存在.', () => {
    expect(Validator).to.be.exist
  })
  it('require true 报错', () => {
    let data = {email: ''}
    let rules = [{key: 'email', required: true}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.required).to.eq('必填')
  })
  it('require true 通过', () => {
    let data = {email: 0}
    let rules = [{key: 'email', required: true}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern 报错', () => {
    let data = {email: '@chau.com'}
    let rules = [{key: 'email', pattern: /^.+@.+$/}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('pattern 通过', () => {
    let data = {email: '1@chau.com'}
    let rules = [{key: 'email', pattern: /^.+@.+$/}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern email 通过', () => {
    let data = {email: '1@chau.com'}
    let rules = [{key: 'email', pattern: 'email'}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email).to.not.exist
  })
  it('pattern email 报错', () => {
    let data = {email: '@chau.com'}
    let rules = [{key: 'email', pattern: 'email'}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.pattern).to.eq('格式不正确')
  })
  it('require & pattern', function () {
    let data = {email: ''}
    let rules = [{key: 'email', required: true, pattern: 'email'}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.required).to.exist
    expect(errors.email.pattern).to.not.exist
  })
  it('pattern & minLength', function () {
    let data = {email: ''}
    let rules = [{key: 'email', pattern: 'email', minLength: 6}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.pattern).to.exist
    expect(errors.email.minLength).to.exist
  })
  it('maxLength', function () {
    let data = {email: 'xxxx@yyyy.com'}
    let rules = [{key: 'email', maxLength: 10}]
    let validator = new Validator()
    let errors = validator.validate(data, rules)
    expect(errors.email.maxLength).to.exist
  })
  it('many Keys', () => {
    let data = {email: '123123123123'}
    let rules = [
      {
        key: 'email', required: true, pattern: 'email', maxLength: 10,
        minLength: 5, hasNumber: true, hasLowerAndUpperCase: true, hasDot: true,
        hasUnderscore: true, hasChow: true
      }
    ]
    let fn = () => {
      let validator = new Validator()
      validator.validate(data, rules)
    }
    expect(fn).to.throw()
  })
  it('自定义测试规则 hasNumber', () => {
    let data = {email: 'abcabcabcabc'}
    let validator = new Validator()
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {key: 'email', required: true, hasNumber: true}
    ]
    let errors
    let fn = () => {
      errors = validator.validate(data, rules)
    }
    expect(fn).to.not.throw()
    expect(errors.email.hasNumber).to.eq('必须含有数字')
  })
  it('两个validator实例之间互相不影响', () => {
    let data = {email: 'abcabcabcabc'}
    let validator1 = new Validator()
    let validator2 = new Validator()
    validator1.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }
    let rules = [
      {key: 'email', required: true, hasNumber: true}
    ]
    expect(()=>{validator1.validate(data,rules)}).to.not.throw()
    expect(()=>{validator2.validate(data,rules)}).to.throw()
  })
  it('可以全局添加新的校验规则', () => {
    let data = {email: 'abcabcabcabc'}
    let validator1 = new Validator()
    let validator2 = new Validator()
    Validator.addRule('hasNumber', (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    })
    let rules = [
      {key: 'email', required: true, hasNumber: true}
    ]
    expect(()=>{validator1.validate(data,rules)}).to.not.throw()
    expect(()=>{validator2.validate(data,rules)}).to.not.throw()
  })
})

