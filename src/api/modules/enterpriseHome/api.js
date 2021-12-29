const api = {
  // 首页统计信息
  homeStatistics: '/platform/useUnitOrder/statistics',
  // 首页推荐机构
  homePromoteOrg: '/platform/useUnitOrder/organization',
  // 首页指导价格
  homeGuidPrice: '/platform/useUnitOrder/guidePrice',
  // 检校提醒列表
  homeNeedCalibrationList: '/platform/useUnitOrder/calibration/page',
  // 使用单位获取应用服务
  getServiceListInHome: '/platform/applicationServices/page',
  // 应用服务合并购买订单提交
  unionPaymentSubmit: '/platform/applicationService/submitOrderBatch',
  // 应用服务合并购买订单提交
  unionPaymentSave: '/platform/applicationService/paymentBatch',
  // 获取单位认证状态
  certificationStatusById: '/platform/organization/certificationStatusById',
  // 激活码激活应用服务
  unionPaymentActivateService: '/platform/activationCode/activationApplicationService',
  // 模糊匹配单位
  getOrgBykeywords: '/platform/fuzzyMatchingOrgName'
}
export default api
