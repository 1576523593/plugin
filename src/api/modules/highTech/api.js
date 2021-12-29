const api = {
  // 根据code获取器具信息
  meter: '/platform/view/meter/',
  // 静态台账_测试无需token
  staticMeter: '/platform/gaoxinFtzCustomization/staticMeter',
  // 动态台账_测试无需token
  dynamicMeter: '/platform/gaoxinFtzCustomization/dynamicMeter',
  // 电子证书_测试无需token
  certificate: '/platform/gaoxinFtzCustomization/certificate',
  // 缺陷历史_测试无需token
  defectHistory: '/platform/gaoxinFtzCustomization/defectHistory',
  // 动态台账-维修记录分页
  maintenanceRecordPage: '/platform/view/gaoxinFtzCustomization/maintenanceRecordPage',
  // 动态台账-保养记录分页
  upkeepRecordPage: '/platform/view/gaoxinFtzCustomization/upkeepRecordPage',
  // 器具关联采集点报警点查询
  itemWarn: '/platform/view/opcMeter/itemWarn/'
}
export default api
