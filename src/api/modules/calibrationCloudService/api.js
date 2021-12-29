const api = {
  // 查询检定机构列表分页
  orgListPage: '/platform/view/vccsInstitutions/page',
  // 前台获取检定机构详情
  orgDetail: '/platform/view/institutionsDetail/',
  // 获取检定机构下的服务
  orgServiceList: '/platform/view/vccsService/attrList',
  // 获取检定机构下的资质列表
  orgQualificationList: '/platform/view/vccsInstitutions/qualificationList/',
  // 根据使用单位id获取待检定器具列表
  meterListByEnteroriseId: '/platform/meter/list',
  // 获取系统内机构列表
  getAllOrgList: '/platform/authOrg',
  // 台账下单-根据器具id匹配的服务分类的集合查询出的机构服务
  getServiceListByMeterId: '/platform/vccsOrder/service',
  // 台账下单-提交委托单
  submitStandOrder: '/platform/vccsOrder',
  // 快速下单-根据检定机构id获取检校服务
  getServiceListByOrgId: '/platform/quickOrder/service/',
  // 快速下单-提交委托单
  submitQuickOrder: '/platform/quickOrder'
}
export default api
