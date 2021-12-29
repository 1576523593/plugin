import axios from 'axios'
import Vue from 'vue'
import notification from 'ant-design-vue/es/notification'

const httpRequest = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 1000 * 60 * 5,
  headers: {
    'cache-control': 'no-cache',
    Pragma: 'no-cache'
  }
})

const handleRequestError = error => {
  return Promise.reject(error)
}

// 请求拦截
httpRequest.interceptors.request.use(config => {
  const isConnectNet = window.navigator.onLine
  if (!isConnectNet) { // 断网提示
    return config
  }
  const token = Vue.ls.get('ACCESS_TOKEN')
  const url = ['/front/jiliang/v1/verificationCode/imageCode']
  if (token && !url.includes(config.url)) {
    config.headers.Authorization = token
  }
  return config
}, handleRequestError)

const handleResponseError = error => {
  return Promise.reject(error)
}

// 响应拦截
httpRequest.interceptors.response.use(response => {
  const status = response.status
  if (status === 200) {
    if (response.data.status === 52119) {
      notification.error({
        key: 'tokenFailure',
        message: '当前登录身份已过期, 请重新登录!'
      })
      const token = Vue.ls.get('ACCESS_TOKEN')
      if (token) {
        Vue.ls.remove('ACCESS_TOKEN') // 删除token
      }
      setTimeout(function () {
        window.location.reload()
      }, 1200)
      return Promise.reject(new Error(response.data.message || 'Error'))
    } else if (response.data.status === 50000) {
     // const handleUrl = 'front/sun/v1/meter/meterBasicQrcodeInfo'
      const msg = 'cn.yibiao163.common.web.exception.CheckRuntimeException:'
      // if (response.config.url.indexOf(handleUrl) === -1 && response.data.message.indexOf(msg) === -1) {
      //   notification.error({
      //     key: 'serviceError',
      //     message: response.data.message || '服务报错了!'
      //   })
      // }
      if (response.data.message.indexOf(msg) > -1) {
        notification.error({
          message: response.data.message.replace(msg, '')
        })
      } else {
        return Promise.reject(response.data.message || '服务报错了!')
      }
    } else {
      return response.data
    }
  }
}, handleResponseError)
export default httpRequest
