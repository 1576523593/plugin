import { axios } from '@/utils/request'
import storage from '@/utils/sessionStorage'
import constants from '@/utils/constants'
// 登录
export function login (parameter) {
  return axios({
    url: '/auth/token',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json',
      'clientKey': 'auth',
      'clientPassword': 'ratel200'
    }
  })
}
// 注册
export function register (parameter) {
  return axios({
    url: '/platform/view/sysUser/register',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 注册
export function registerQds (parameter) {
  return axios({
    url: '/platform/view/sysUser/noDevCode/register',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 忘记密码
export function putForgetPassword (params) {
  return axios({
    url: '/auth/authUser/forgetPassword',
    method: 'put',
    params: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 获取手机验证码
export function getSmsCaptcha (parameter) {
  return axios({
    url: '/auth/code/sms/' + sessionStorage.getItem('pRadom'),
    method: 'get',
    params: parameter
  })
}
// 令牌解析 根据公key
export function translateKey (parameter) {
  return axios({
    url: '/auth/translate/token',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 检查客户端
export function checkClient (parameter) {
  return axios({
    url: '/auth/authClient/page/1/10/create_time',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
//  查询手机号是否存在
export function getExistPhone (parameter) {
  return axios({
    url: '/platform/view/sysUser/existPhone/' + parameter,
    method: 'get'
  })
}
// 获取用户权限信息
export function getRoleInfo (parameter) {
  return axios({
    url: '/platform/sysUser/res/' + parameter,
    method: 'get'
  })
}
// 退出登录
export function logout (parameter) {
  return axios({
    url: '/auth/token/logout',
    method: 'delete',
    params: parameter,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'clientKey': 'auth',
      'clientPassword': 'ratel200'
    }
  })
}
// 查看实名认证情况
export function checkUserRealNameStatus () {
  return axios({
    url: '/platform/identification',
    method: 'get',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY)
    }
  })
}
// 查看是否有支付信息
export function ishasPayInfo (params) {
  return axios({
    url: '/platform/identification/isPayInfoComplete/' + params,
    method: 'get',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY)
    }
  })
}
// 是否有手机号
export function ishasPhone () {
  return axios({
    url: '/platform/sysUser/phone',
    method: 'get',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY)
    }
  })
}
// 手机号码是否绑定通联
// 是否有绑定手机号
export function ishasBiddingPhone (params) {
  return axios({
    url: '/platform/payUser/isValidAllinPhone/' + params,
    method: 'get',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY)
    }
  })
}
// 是否签约通联支付
export function ishasAssign (params) {
  return axios({
    url: '/platform/payUser/isSignContract/' + params,
    method: 'get',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY)
    }
  })
}
// 发送通联手机号码验证码
export function payPhoneCheck (params) {
  return axios({
    url: '/platform/payUser/sendVerificationCode/' + params,
    method: 'post',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY),
      'Content-Type': 'application/json'
    }
  })
}
// 绑定通联手机号码
export function bindingPhone (params) {
  return axios({
    url: '/platform/sysUser/phone/' + params,
    method: 'post',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY),
      'Content-Type': 'application/json'
    }
  })
}
// 获取电子会员签约地址
export function getAssignUrl (params) {
  return axios({
    url: '/platform/payUser/signContract',
    method: 'get',
    headers: {
      token: storage.getItem(constants.TOKEN_KEY),
      'Content-Type': 'application/json'
    }
  })
}
