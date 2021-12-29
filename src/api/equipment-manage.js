import httpRequest from '@/request'

// 获取组织机构tree
export function getOrgTree () {
  return httpRequest({
    url: '/front/sun/v1/sysOrganization/current',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 查询字典表数据
export function getDicData (code) {
  return httpRequest({
    url: '/front/jiliang/v1/dictionary/' + code,
    method: 'get'
  })
}
// 导入模板数据
export function importMeters (data) {
  return httpRequest({
    url: '/front/sun/v1/meter/import',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
// 导出履历表
export function importResume (metid) {
  return httpRequest({
    url: '/front/sun/v1/meter/resume/' + metid,
    method: 'get',
    responseType: 'blob'
  })
}
// 导出委托单
export function exportMeterOrder (delegateId) {
  return httpRequest({
    url: '/front/jiliang/v1/meter/purposeTotal/export',
    method: 'get',
    responseType: 'blob'
  })
}
// 导出器具
export function exportMeters (params) {
  return httpRequest({
    url: '/front/sun/v1/meter/export',
    method: 'post',
    data: params,
    responseType: 'blob'
  })
}
// 全部导出
export function exportAllMeters (params) {
  return httpRequest({
    url: '/front/sun/v1/meter/exportByParam',
    method: 'post',
    data: params,
    responseType: 'blob'
  })
}

// 逾期未检导出
export function exportOutTimeTotal (params) {
  return httpRequest({
    url: '/front/jiliang/v1/meter/exportOutTimeTotal',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

// 用途分类导出
export function exportMeterPurpose (params) {
  return httpRequest({
    url: '/front/jiliang/v1/meter/exportMeterPurpose',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

export function exportMeter (params) {
  return httpRequest({
    url: '/front/jiliang/v1/meter/purposeTotal/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
// 更换所属机构
export function changeMeterOrg (params) {
  return httpRequest({
    url: '/front/sun/v1/meter/org',
    method: 'put',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 模糊查询器具分类
export function searchMeterClass (params) {
  return httpRequest({
    url: '/front/sun/v1/meter/category',
    method: 'get',
    params
  })
}
// 模糊查询器具制造商
export function searchMeterProducter (params) {
  return httpRequest({
    url: '/front/sun/v1/meter/factory',
    method: 'get',
    params
  })
}
// 查看器具详情
export function getMeterDetail (meterId) {
  return httpRequest({
    url: '/front/jiliang/v1/meter/' + meterId,
    method: 'get'
  })
}
// 删除器具
export function deleteMeter (meterId) {
  return httpRequest({
    url: '/front/jiliang/v1/meter',
    method: 'delete',
    data: meterId
  })
}

// 删除文件
export function deleteFile (id) {
  return httpRequest({
    url: '/front/sun/v1/meter/' + id,
    method: 'delete'
  })
}
// 新增器具
export function addMeter (data) {
  return httpRequest({
    url: data.id ? `/front/jiliang/v1/meter/${data.id}` : `/front/jiliang/v1/meter`,
    method: data.id ? 'put' : 'post',
    data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 新增器具证书
export function addCertificates (data) {
  return httpRequest({
    url: '/front/sun/v1/certificate/batch',
    method: 'post',
    data
  })
}
// 获取RFID打印数据
export function getRfidProdecutInfo (meterId) {
  return httpRequest({
    url: '/front/sun/v1/meter/' + meterId,
    method: 'get'
  })
}
// 上报RFID标签载体信息
export function uploadRfidInfo (data) {
  return httpRequest({
    url: '/front/sun/v1/meter/rfid',
    method: 'post',
    data
  })
}
// RFID电子标签信息校验 data1CheckRfid
export function CheckRfid (data) {
  return httpRequest({
    url: '/front/sun/v1/rfidInfo/check',
    method: 'post',
    data
  })
}
// 执行检查标签类型操作权限
export function checkUnitCreditCode (hex) {
  return httpRequest({
    url: '/front/sun/v1/rfidInfo/checkUnitCreditCode?hex=' + hex,
    method: 'get'
  })
}
// 检测有无安装打印软件
export function checkIsPrintRun (parameter) {
  return httpRequest({
    url: '/front/jiliang/v1/meterBasicQrcodeInfo/' + parameter + '/0',
    method: 'get'
  })
}

// 获取勾选仪表的数据存放URL 获取二维码打印数据id
export function GetPrintDataUrl (parameter) {
  return httpRequest({
    url: '/front/jiliang/v1/meterBasicQrcodeInfo/generate',
    method: 'post',
    data: parameter
  })
}
// 查看器具二维码
export function viewQRcode (meterId) {
  return httpRequest({
    url: '/front/sun/v1/meter/qrcode/' + meterId,
    method: 'get'
  })
}

// 辖区统计
export function jurisdictionStatistic () {
  return httpRequest({
    url: '/front/jiliang/v1/meter/purposeTotal',
    method: 'get'
  })
}

// 企业模糊查询
export function searchUnit (parameter) {
  return httpRequest({
    url: '/front/jiliang/v1/enterprise/' + parameter,
    method: 'get'
  })
}
