const api = {
  // 登录
  login: '/auth/token',
  userRole: '/platform/sysUser/res/',
  // 解析token
  translateKey: '/auth/translate/token',
  // 令牌有效性检查
  checkToken: '/auth/check/token',
  // 核对后删除
  checkUserHasPhone: '/platform/sysUser/hasPhone',
  // 是否有手机号信息
  isHasPhone: '/platform/sysUser/phone/',
  // 判断当前用户支付信息是否完整
  checkUserHasPayInfo: '/platform/identification/isPayInfoComplete',
  // 拉取第三方平台单位信息
  thirdUnitInfo: '/auth/third/orgInfo/',
  // 跳转航天云网
  toCASICloud: '/platform/view/casicloud/path',
  // 航天云网用户修改角色
  changeRole: '/platform/sysUser/role/',
  // 修改區域編碼
  changAreaCode: '/platform/sysOrganization/',
  // 航天云网首次登录补充信息
  CASIaddInfo: '/platform/view/casicloud/addInfo'
}
export default api
