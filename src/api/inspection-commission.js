import httpRequest from '@/request'
// 新增、编辑委托单
export function commissionAction (data) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/' + (data.id ? data.id : ''),
    method: data.id ? 'put' : 'post',
    data
  })
}
// 获取委托单详情
export function getCommissionDetail (id) {
  return httpRequest({
    // url: '/front/sun/v1/delegateOrder/' + id,
    url: '/front/sun/v1/delegateOrder/' + id,
    method: 'get'
  })
}
// 受理委托单
export function acceptOrder (data) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/',
    method: 'put',
    data
  })
}
// 根据委托单查询所属器具列表
export function getMeterListByOrderId (id, params) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/meters/pages/' + id,
    method: 'get',
    params
  })
}
// 取消委托单
export function cancelOrder (id) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/cancelDelegate/' + id,
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
// 获取器具详情
export function getMeterDetails (id, params) {
  return httpRequest({
    url: '/front/sun/v1/meter/' + id,
    method: 'get',
    params
  })
}
// 完检上报
export function reportCalires (data) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/meters/reporter',
    method: 'post',
    data
  })
}
// 手工核对
export function handleReport (data) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/meters/checkDelegateMeters',
    method: 'post',
    data
  })
}
// 发送到lims
export function sendToLIMS (data) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/meters/lims',
    method: 'post',
    data
  })
}
// 扫码获取器具信息
export function getMeterInfoByScan (carrierId, identificationCode) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/meters/scanCodeMeterInfo?carrierId=' + carrierId + '&identificationCode=' + identificationCode,
    method: 'get'
  })
}
// 获取打印委托单数据
export function getPrintOrderInfo (id) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/printTemplate/' + id,
    method: 'get'
  })
}
// 扫码上报器具
export function scanReport (data) {
  return httpRequest({
    url: '/front/sun/v1/delegateOrder/meters/qrCodeCheck',
    method: 'post',
    data
  })
}
// 导出年度周检计划
export function exportYearsCheckPlan (params) {
  return httpRequest({
    url: '/front/sun/v1/verificationPlan/export',
    method: 'get',
    params,
    responseType: 'blob'
  })
}
