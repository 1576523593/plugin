const api = {
  // 台账管理列表
  standList: '/platform/meter/page',
  // 台账增删改查
  standAction: '/platform/meter/',
  // 器具赋码
  meterCoding: '/platform/useUnitOrder/meterCode',
  // 导入台账
  importStand: '/platform/useUnitOrder/importMeter',
  // 上传台账
  uploadStand: '/platform/importExcel',
  // 验证台账信息
  checkUploadStand: '/platform/checkImportExcel',
  // 搜索制造单位列表
  searchProductOrg: '/platform/meter/productOrg/list'
}
export default api
