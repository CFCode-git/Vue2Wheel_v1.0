export default function validator(data, rules) {
  let errors = {}
  rules.forEach(rule => {
    let value = data[rule.key]
    // required 特殊处理
    if (rule.required) {
      let error = validator.required(value)
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
      if (validator[validateType]) {
        let error = validator[validateType](value, rule[validateType])
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

validator.required = (value) => {
  if (value !== 0 && !value) {
    return '必填'
  }
}

validator.pattern = (value, pattern) => {
  if (pattern === 'email') { pattern = /^.+@.+$/ }
  if (pattern.test(value) === false) {
    return '格式不正确'
  }
}

validator.minLength = (value, minLength) => {
  if (value.length < minLength) {
    return '太短'
  }
}

validator.maxLength = (value, maxLength) => {
  if (value.length > maxLength) {
    return '太长'
  }
}

function ensureObject(obj, key) {
  if (typeof obj[key] !== 'object') {
    obj[key] = {}
  }
}
