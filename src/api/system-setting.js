import httpRequest from '@/request'

// 获取父级菜单列表
export function getParentMenus () {
  return httpRequest({
    url: '/front/jiliang/v1/sysResource/tree',
    method: 'get'
  })
}
// 新增、修改菜单
export function menusAction (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysResource/' + (data.tag === 'view' ? data.id : ''),
    method: data.tag === 'view' ? 'get' : data.id ? 'put' : 'post',
    data
  })
}
// 新增、修改角色
export function roleAction (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysRole' + (data.tag === 'view' ? '/' + data.id : ''),
    method: data.tag === 'view' ? 'get' : data.id ? 'put' : 'post',
    data
  })
}

// 获取角色信息
export function getRoleInfo (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysRole/' + data.id,
    method: 'get',
    data
  })
}

// 新增、修改机构
export function orgAction (data) {
  return httpRequest({
    url: '/front/sun/v1/sysOrganization' + (data.tag === 'view' ? '/' + data.id : ''),
    method: data.tag === 'view' ? 'get' : data.id ? 'put' : 'post',
    data
  })
}
// 新增、修改机构
export function userAction (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser' + (data.tag === 'view' ? '/' + data.id : ''),
    method: data.tag === 'view' ? 'get' : data.id ? 'put' : 'post',
    data
  })
}
// 新增根目录
export function submitRootMenu (params) {
  return httpRequest({
    url: '/api/user.json',
    method: 'post',
    data: params
  })
}

// 获取权限下拉
export function getRoleSelect () {
  return httpRequest({
    url: '/front/jiliang/v1/sysAuth/select',
    method: 'get'
  })
}
// 获取角色code下拉
export function getRoleCodeSelect () {
  return httpRequest({
    url: '/front/sun/v1/sysRole/select',
    method: 'get'
  })
}
// 重置密码
// 获取权限下拉
export function resetPass (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/restPassword',
    method: 'put',
    data
  })
}
// 修改当前用户信息
export function userInfoAction (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/current',
    method: 'put',
    data
  })
}
// 获取验证码
export function getPhoneCode (params) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/mobilePhoneCode',
    method: 'get',
    params
  })
}
// 修改当前用户密码
export function updateCurUserPass (data) {
  return httpRequest({
    url: '/front/jiliang/v1/sysUser/current/updatePassword',
    method: 'put',
    data
  })
}

// 获取权限选项
export function getAuthMetaData (params) {
  return httpRequest({
    url: '/front/jiliang/v1/sysResource/tree',
    method: 'get',
    params
  })
}

// 查看、新增、修改权限
export function authAction (tag, params) {
  return httpRequest({
    url: '/front/jiliang/v1/sysAuth' + (tag === 'view' ? '/' + params.id : ''),
    method: tag === 'view' ? 'get' : params.id ? 'put' : 'post',
    data: params
  })
}
