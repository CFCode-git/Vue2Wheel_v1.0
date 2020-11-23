class Validator {
  static addRule(name, fn) { // 静态方法, Validator自己用, new Validator的实例不使用, 用于给各个实例的原型统一添加方法
    Validator.prototype[name] = fn
  }
  constructor() {}

  validate(data, rules) {
    let errors = {}
    rules.forEach(rule => {
      let value = data[rule.key]
      // required 特殊处理
      if (rule.required) {
        let error = this.required(value)
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key].required = error
          return
        }
      }
      // 除去 key 和 required  的 validate 的种类
      let validateTypes = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
      // 每一个作为函数名调用
      validateTypes.forEach(validateType => {
        // validateType: maxLength / minLength / pattern / hasNumber / ...
        // rule.key: email / phoneNumber / ...
        // rule[validateType]: rule 对应的验证种类的值
        // value : data 对应种类的值
        if (this[validateType]) {
          let error = this[validateType](value, rule[validateType])
          if (error) {
            ensureObject(errors, rule.key)
            errors[rule.key][validateType] = error
          }
        } else {
          throw `不存在的校验器:${validateType}`
        }
      })
    })
    return errors
  }

  required(value) {
    if (value !== 0 && !value) {
      return '必填'
    }
  }

  pattern(value, pattern) {
    if (pattern === 'email') { pattern = /^.+@.+$/ }
    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }

  minLength(value, minLength) {
    if (value.length < minLength) {
      return '太短'
    }
  }

  maxLength(value, maxLength) {
    if (value.length > maxLength) {
      return '太长'
    }
  }
}

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}

export default Validator
