const api = {
  // 获取企业数量
  getOrgCount: '/platform/largeScreen/enterpriseCount/',
  // 获取器具数量
  getMeterCount: '/platform/largeScreen/meterCount/',
  // 获取强检器具总量
  getStrongRecordCount: '/platform/largeScreen/mandatoryMeterCount/',
  // 获取抽检数量
  getCheckCount: '/platform/largeScreen/sampleCount/',
  // 抽检合格数量
  getCheckPassCount: '/platform/largeScreen/samplePassCount/',
  // 强检备案数量
  getRecordMeterTypeCount: '/platform/largeScreen/recordMeterCount/',
  // 受检数量
  getHasCheckCount: '/platform/largeScreen/checkMeterCount/',
  // 受检合格数量
  getStrongCheckPassCount: '/platform/largeScreen/checkMeterPassCount/',
  // 按月获取强检合格率曲线图
  getStrongMeterLineChart: '/platform/largeScreen/checkMeterChatByMonth/',
  // 获取地图信息
  getMapInfo: '/platform/largeScreen/gis/orgInfo',
  // 获取企业名单
  getSupervisorOrgList: '/platform/largeScreen/enterpriseList/',
  // 获取企业器具详情
  getSupervisorOrgMeterDetail: '/platform/largeScreen/enterpriseMeterList/',
  // 获取企业强检器具详情
  getSupervisorStrongRecordList: '/platform/largeScreen/enterpriseMandatoryMeterList/'
}
export default api
