const api = {
  // 查询30天内即将到期或已到期的云服务列表
  getExpireService: '/platform/applicationServicePurchaseDetail/expireWithinThirtyDays',
  // 合并购买提交订单
  submitMergeOrder: '/platform/applicationService/submitOrderBatch',
  // 合并购买立即付款
  toPaymentMergeOrder: '/platform/applicationService/paymentBatch'
}
export default api
