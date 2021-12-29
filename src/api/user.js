import httpRequest from '@/request'
export function getRouteInfo () {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/auth',
    method: 'get'
  })
}

export function getUserInfo () {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/activeUser',
    method: 'get'
  })
}

export function login (params) {
  return httpRequest({
    url: '/front/jiliang/v1/userToken',
    method: 'POST',
    data: params
  })
}

export function logout () {
  return httpRequest({
    url: '/front/jiliang/v1/userToken',
    method: 'delete'
  })
}

export function getVertifyCode (params) {
  return httpRequest({
    url: '/front/jiliang/v1/verificationCode/imageCode',
    method: 'get',
    params,
    responseType: 'arraybuffer'
  })
}

// 获取手机验证码
export function getMobileVertifyCode (params) {
  return httpRequest({
    url: '/front/jiliang/v1/verificationCode/mobilePhoneCode',
    method: 'get',
    params
  })
}

export function alterPassword (params) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/forgetPassword',
    method: 'put',
    data: params
  })
}

// 手机号重复性校验
export function checkMobileIsRepeat(params) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/repeatCheck',
    method: 'get',
    params
  })
}

// 手机验证码校验
export function checkMobileCode (params) {
  return httpRequest({
    url: `/front/jiliang/v1/verificationCode/mobile/${params.mobile}/${params.validateCode}`,
    method: 'get',
    params: {
      isRemove: 0
    }
  })
}
