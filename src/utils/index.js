/* eslint-disable no-prototype-builtins */
import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('dayjs', function (dataStr, pattern = 'YYYY-MM-DD') {
  if (!dataStr) {
    return ''
  }
  return moment(dataStr).format(pattern)
})
/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export function filterObj (obj) {
  if (!(typeof obj === 'object')) {
    return
  }

  for (var key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === null || obj[key] === undefined || obj[key] === '')
    ) {
      delete obj[key]
    }
  }
  return obj
}
// 下载相关文件
export function downloadFile (url, name) {
  const eleLink = document.createElement('a')
  eleLink.download = name
  eleLink.style.display = 'none'
  eleLink.href = url
  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

export function formatData (list) {
  const arr = []
  let obj = {}
  if (Array.isArray(list) && list.length > 0) {
    list.forEach(item => {
      if (item.children) {
        item.children = formatData(item.children)
        obj = {
          value: item.organizationCode,
          title: item.organizationName,
          key: item.organizationCode,
          children: item.children
        }
      }
      arr.push(obj)
    })
  }
  return arr
}

/** 随机生成固定位数或者一定范围内的字符串数字组合
 * @param {Number} min 范围最小值
 * @param {Number} max 范围最大值，当不传递时表示生成指定位数的组合
 * @param {String} charStr指定的字符串中生成组合
 * @returns {String} 返回字符串结果
 * */
export function randomRange(min, max, charStr) {
  var returnStr = '' // 返回的字符串
  var range // 生成的字符串长度

  // 随机生成字符
  var autoGetStr = function() {
    var charFun = function() {
      var n = Math.floor(Math.random() * 62)
      if (n < 10) {
        return n // 1-10
      } else if (n < 36) {
        return String.fromCharCode(n + 55) // A-Z
      } else {
        return String.fromCharCode(n + 61) // a-z
      }
    }
    while (returnStr.length < range) {
      returnStr += charFun()
    }
  }

  // 根据指定的字符串中生成组合
  var accordCharStrGet = function() {
    for (var i = 0; i < range; i++) {
      var index = Math.round(Math.random() * (charStr.length - 1))
      returnStr += charStr.substring(index, index + 1)
    }
  }
  if (typeof min === 'undefined') {
    min = 10
  }
  if (typeof max === 'string') {
    charStr = max
  }
  range = ((max && typeof max === 'number') ? Math.round(Math.random() * (max - min)) + min : min)

  if (charStr) {
    accordCharStrGet()
  } else {
    autoGetStr()
  }
  return returnStr
}
export function s4 () {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
export function getUUID () {
  const uuid = (
    s4() +
    s4() +
    s4() +
    s4() +
    s4() +
    s4() +
    s4() +
    s4()
  ).toUpperCase()
  return uuid
}
