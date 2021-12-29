import httpRequest from '@/request'

// 获取组织机构
export function getOrganization (params) {
  return httpRequest({
    url: '/front/sun/v1/sysOrganization/current',
    method: 'get'
  })
}

// 获取当前用户管辖下的组织机构
export function getCurrentOrganization (params) {
  return httpRequest({
    url: '/front/sun/v1/sysOrganization/current',
    method: 'get'
  })
}

// 故障确认详情
export function getMalfunctionConfirmDetail (id) {
  return httpRequest({
    url: `/front/sun/v1/breakdownTask/${id}`,
    method: 'get'
  })
}

// 故障确认
export function submitConfirmResult (id, params) {
  return httpRequest({
    url: `/front/sun/v1/breakdownTask/${id}`,
    method: 'put',
    data: params
  })
}

// 查看维修记录详情
export function getRepairRecordDetail (id) {
  return httpRequest({
    url: `/front/sun/v1/taskMeter/${id}`,
    method: 'get'
  })
}

// 查看维修工单详情
export function getRepairOrderDetail (id) {
  return httpRequest({
    url: `/front/sun/v1/planTask/${id}`,
    method: 'get'
  })
}

// 获取维修工单相关器具列表
export function getMaintainOrderRelatedEquipment (params) {
  params.sourceType = 3
  return httpRequest({
    url: `/front/sun/v1/taskMeter/meter/page`,
    method: 'get',
    params
  })
}

// 提交维修工单
export function submitRepairOrder (params) {
  return httpRequest({
    url: `/front/sun/v1/planTask/maintain`,
    method: 'post',
    data: params
  })
}

// 获取器具详情信息
// export function getEquipmentInfo (meterId, queryMeterType) {
//   if (queryMeterType === 2) {
//     return httpRequest({
//       url: `/front/sun/v1/meterUpdateRecord/${meterId}`,
//       method: 'get'
//     })
//   } else {
//     return httpRequest({
//       url: `/front/sun/v1/meter/${meterId}`,
//       method: 'get'
//     })
//   }
// }

// 获取器具详情
export function getEquipmentInfo (meterId) {
  return httpRequest({
    url: `/front/jiliang/v1/meter/${meterId}`,
    method: 'get'
  })
}

// 查询机构待维修器具
export function getNeedFixMeters (orgid) {
    return httpRequest({
      url: `/front/sun/v1/breakdownTask/meter/page?organizationCode=${orgid}`,
      method: 'get'
    })
}
