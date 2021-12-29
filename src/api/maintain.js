import httpRequest from '@/request'

const API = {
  ORGANIZATION: '/front/sun/v1/sysOrganization',
  PLAN: '/front/sun/v1/plan',
  ACTIVEPLAN: '/front/sun/v1/plan',
  PLANDETAIL: '/front/sun/v1/plan',
  METERLIST: '/front/sun/v1/plan/meter/page',
  RECORDDETAIL: '/front/sun/v1/taskMeter',
  FILELIST: '/front/sun/v1/sysAttachment'
}
// 获取组织机构tree
export function getOrgTree () {
  return httpRequest({
    url: API.ORGANIZATION,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function createPlan (params) {
  return httpRequest({
    url: params.id ? `${API.PLAN}/${params.id}` : `${API.PLAN}`,
    method: params.id ? 'put' : 'post',
    data: params
  })
}

export function activePlan (id, status) {
  return httpRequest({
    url: `${API.ACTIVEPLAN}/${id}/planStatus`,
    method: 'put',
    params: {
      planStatus: status
    }
  })
}

// 查看保养工单详情
export function getMaintainOrderDetail (id) {
  return httpRequest({
    url: `/front/sun/v1/planTask/${id}`,
    method: 'get'
  })
}

// 获取保养工单相关器具列表
export function getMaintainOrderRelatedEquipment (params) {
  return httpRequest({
    url: `/front/sun/v1/taskMeter/meter/page`,
    method: 'get',
    params
  })
}

// 获取器具详情信息
export function getEquipmentInfo (meterId) {
  return httpRequest({
    url: `/front/sun/v1/meter/details/${meterId}`,
    method: 'get'
  })
}

// 新增保养工单
export function addMaintainOrder (params) {
  return httpRequest({
    url: `/front/sun/v1/planTask`,
    method: 'post',
    data: params
  })
}

// 获取组织机构
export function getOrganization (params) {
  return httpRequest({
    url: '/front/sun/v1/sysOrganization',
    method: 'get'
  })
}

export function planDetail (id, status) {
  return httpRequest({
    url: `${API.PLANDETAIL}/${id}`,
    method: 'get'
  })
}

export function getMeterList (params) {
  return httpRequest({
    url: `${API.METERLIST}`,
    method: 'get',
    params
  })
}

export function getRecordDetail (id) {
  return httpRequest({
    url: `${API.RECORDDETAIL}/${id}`,
    method: 'get'
  })
}

export function getFileList (id) {
  return httpRequest({
    url: `${API.FILELIST}/${id}`,
    method: 'get'
  })
}
