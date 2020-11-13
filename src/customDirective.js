// // import Vue from 'vue'
// //
// // Vue.directive('input-number', {
// //   bind: function (el, binding, vnode) {
// //     inputNumber(el, binding, vnode)
// //   }
// // })
// //
// //
// // Vue.directive('input-max-length', {
// //   bind: function (el, binding, vnode) {
// //     inputMaxLength(el, binding, vnode)
// //   }
// // })
// //
// //
// // function inputMaxLength(el, binding, vnode) {
// //   const input = el.getElementsByTagName('input')[0]
// //   let bindValue = binding.value
// //   let bindValueArray = bindValue.split(',')
// //   input.onkeyup = function (e) {
// //     let value = input.value
// //     input.value = validNumberLength(bindValue, bindValueArray, value)
// //     trigger(input, 'input')
// //   }
// //   input.onblur = function (e) {
// //     let value = input.value
// //     input.value = validNumberLength(bindValue, bindValueArray, value)
// //     trigger(input, 'input')
// //   }
// // }
// //
// //
// // function inputNumber(el, binding, vnode) {
// //   // const input = el.getElementsByTagName('input')[0]
// //   const input = el
// //   let bindValue = binding.value
// //   let bindValueArray = bindValue.split(',')
// //
// //   let singleReg = /[^0-9]/g
// //   let manyReg = /[^\d.{1}]/g
// //
// //   input.onkeyup = function (e) {
// //     let value = input.value
// //     if (value.length === 1) {
// //       value = value.replace(singleReg, '')
// //     } else {
// //       value = value.replace(manyReg, '')
// //     }
// //     input.value = validNumberLength(bindValue, bindValueArray, value)
// //     trigger(input, 'input')
// //     input.blur()
// //     input.focus()
// //   }
// //   input.onblur = function (e) {
// //     let value = input.value
// //     if (input.value.length === 1) {
// //       value = value.replace(singleReg, '')
// //     } else {
// //       value = value.replace(manyReg, '')
// //     }
// //     input.value = validNumberLength(bindValue, bindValueArray, value)
// //     trigger(input, 'input')
// //     input.blur()
// //     input.focus()
// //   }
// // }
// //
// // function validNumberLength(bindValue, bindValueArray, value) {
// //   if (bindValue && value) {
// //     if (bindValueArray.length == 2) {
// //       let valueArray = value.split('.')
// //       if (valueArray.length >= 2) {
// //         return returnMaxLengthData(valueArray[0], bindValueArray[0]) + '.' + returnMaxLengthData(valueArray[1], bindValueArray[1])
// //       } else {
// //         return returnMaxLengthData(value, bindValueArray[0])
// //       }
// //     } else if (bindValueArray.length == 1) {
// //       return returnMaxLengthData(value, bindValueArray[0])
// //     }
// //   }
// //   return value
// // }
// //
// // function returnMaxLengthData(value, maxLength) {
// //   if (value && value.length > maxLength) {
// //     return value.substring(0, maxLength)
// //   }
// //   return value
// // }
// //
// // const trigger = (el, type) => {
// //   const e = document.createEvent('HTMLEvents')
// //   e.initEvent(type, true, true)
// //   el.dispatchEvent(e)
// // }
// //
// // const customDirective = null
// //
// // // 参考 https://blog.csdn.net/weixin_34174422/article/details/88006880,https://www.cnblogs.com/y896926473/articles/7841430.html
// //
// // export default customDirective
// import Vue from 'vue'
//
// Vue.directive('input-number', {
//   bind: function (el, binding, vnode) {
//     inputNumber(el, binding, vnode)
//   }
// })
//
//
// Vue.directive('input-max-length', {
//   bind: function (el, binding, vnode) {
//     inputMaxLength(el, binding, vnode)
//   }
// })
//
//
// function inputMaxLength (el, binding, vnode) {
//   // const input = el.getElementsByTagName('input')[0]
//   const input = el
//   let bindValue = binding.value
//   let bindValueArray = bindValue.split(',')
//
//   input.onkeypress= function (e) {
//     let value = input.value
//     input.value = validNumberLength(bindValue,bindValueArray,value)
//     trigger(input, 'input')
//   }
//   input.onkeyup = function (e) {
//     let value = input.value
//     input.value = validNumberLength(bindValue,bindValueArray,value)
//     trigger(input, 'input')
//   }
//   input.onblur = function (e) {
//     let value = input.value
//     input.value = validNumberLength(bindValue,bindValueArray,value)
//     trigger(input, 'input')
//   }
// }
//
// const singleReg = /[^0-9]/g
// const manyReg = /[^\d.{1}]/g
//
// function getValue(input,bindValue,bindValueArray) {
//   let value = input.value
//   if (value.length === 1) {
//     value = value.replace(singleReg, '')
//   } else {
//     value = value.replace(manyReg, '')
//   }
//   input.value = validNumberLength(bindValue,bindValueArray,value)
//   input.focus()
//   trigger(input, 'input')
// }
//
//
// function inputNumber (el, binding, vnode) {
//   // const input = el.getElementsByTagName('input')[0]
//   const input = el
//   let bindValue = binding.value
//   let bindValueArray = bindValue.split(',')
//   input.onkeypress = function(e) {
//     getValue(input,bindValue,bindValueArray)
//   }
//   input.onkeyup = function (e) {
//     getValue(input,bindValue,bindValueArray)
//   }
//   input.onblur = function (e) {
//     getValue(input,bindValue,bindValueArray)
//   }
// }
//
// function validNumberLength(bindValue,bindValueArray,value) {
//   if(bindValue && value) {
//     if(bindValueArray.length == 2) {
//       let valueArray = value.split('.')
//       if(valueArray.length >= 2) {
//         return returnMaxLengthData(valueArray[0],bindValueArray[0]) + "." + returnMaxLengthData(valueArray[1],bindValueArray[1])
//       } else {
//         return returnMaxLengthData(value,bindValueArray[0])
//       }
//     } else if(bindValueArray.length == 1) {
//       return returnMaxLengthData(value,bindValueArray[0])
//     }
//   }
//   return value
// }
//
// function returnMaxLengthData(value,maxLength) {
//   if(value && value.length > maxLength) {
//     return value.substring(0,maxLength)
//   }
//   return value
// }
//
// const trigger = (el, type) => {
//   const e = document.createEvent('HTMLEvents')
//   e.initEvent(type, true, true)
//   el.dispatchEvent(e)
// }
//
// const customDirective = null
//
// // 参考 https://blog.csdn.net/weixin_34174422/article/details/88006880,https://www.cnblogs.com/y896926473/articles/7841430.html
//
// export default customDirective
