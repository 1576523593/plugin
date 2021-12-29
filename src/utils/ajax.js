import axios from 'axios'
import storage from '@/utils/sessionStorage'
import constants from '@/utils/constants'
// const baseUrl = 'http://192.168.10.59:8762'
const urlPrefix = '/api'

const instance = axios.create({
  baseURL: urlPrefix + '/'
  // headers: {
  //   'X-Custom-Header': 'Web',
  //   'Content-Type': 'application/json'
  // }
})

instance.interceptors.request.use(config => {
  axios.defaults.withCredentials = true
  const token = storage.getItem(constants.TOKEN_KEY)
  if (token) {
    // token不能设置问题
    if (config.headers === undefined) {
      config.headers = {}
    }
    config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, error => {
  return error
})

instance.interceptors.response.use(response => {
  return response.data
  // 过滤null
  // const success = response.data.success
  // if (!success) {
  //   alert(response.data.error_message || '系统报错')
  // }
  // return response
}, error => {
  return alert(error)
})

export const get = (url, params = {}, config = {}) => instance.get(url, config)

export default {
  get
}
