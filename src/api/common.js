import httpRequest from '@/request'

// 获取真实图片地址
export function getRealImgUrl (params) {
  return httpRequest({
    url: '/front/unit/v1/file/sign',
    method: 'get',
    params
  })
}

// 获取相关附件
export function getRelatedFile (fk) {
  return httpRequest({
    url: `/front/sun/v1/sysAttachment/${fk}`,
    method: 'get'
  })
}
// 附加上传
export function uploadFile (data) {
  return httpRequest({
    url: '/front/sun/v1/sysAttachment',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
// 查询删除附件
export function uploadAction (data) {
  return httpRequest({
    url: '/front/sun/v1/file/' + data.id,
    method: data.sign === 'del' ? 'delete' : 'get'
  })
}

// 维修记录列表 导出功能
// export function exportFileData (params) {
//   return httpRequest({
//     url: '/front/sun/v1/taskMeter/maintenance/excel',
//     method: 'get',
//     params,
//     responseType: 'blob'
//   })
// }
export function exportFileData (params) {
  return httpRequest({
    url: '/front/sun/v1/taskMeter/maintenance/exportExcel',
    method: 'get',
    params,
    responseType: 'blob'
  })
}

// 获取当前 组织
export function getCurrentOrg () {
  return httpRequest({
    url: '/front/sun/v1/sysOrganization/current',
    method: 'get'
  })
}

// 计量点地图获取单位
export function getByEnterprise (params) {
  return httpRequest({
    url: '/front/jiliang/v1/enterprise/countByEnterprise',
    method: 'get',
    params
  })
}

// 计量点获取单位信息
export function getByMeter (enterpriseId) {
  return httpRequest({
    url: `/front/jiliang/v1/meter/countByMeter/${enterpriseId}`,
    method: 'get'
  })
}

// 逾期未检单位名称列表
export function getEnterprise (params) {
  return httpRequest({
    url: '/front/jiliang/v1/meter/selectEnterpriseList',
    method: 'get',
    params
  })
}

// 用途分类-专业分类
export function getCatalogue () {
  return httpRequest({
    url: '/front/jiliang/v1/meter/catalogue',
    method: 'get'
  })
}

// 根据IP获取经纬度
export function getCurrentPosition () {
  return httpRequest({
    url: '/front/jiliang/v1/area/ipLocation',
    method: 'get'
  })
}

// 获取字典信息
export function getDictByTypeId (typeId) {
  return httpRequest({
    url: `/front/jiliang/v1/dictionary/${typeId}`,
    method: 'get'
  })
}

// 查询企查查
export function getQCC (params) {
  return httpRequest({
    url: `/front/jiliang/v1/qcc/fuzzySearch`,
    method: 'get',
    params

  })
}

// 获取器具种类
export function getCatalogueList (params) {
  return httpRequest({
    url: `/front/jiliang/v1/catalogue`,
    method: 'get',
    params
  })
}
