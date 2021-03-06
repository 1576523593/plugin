const api = {
  // 首页-banner前台展示
  homeBanners: '/platform/view/sysPicture/banners',
  // 信息中心-banner图
  articleBanners: '/platform/view/articlePicture',
  // 前台查询文章分页列表
  articlePage: '/platform/view/article/page',
  // 前台查询相关推荐文章列表
  recommendArticle: '/platform/view/recommendArticle',
  // 服务中心-文章详情查询
  articleView: '/platform/view/article/service/',
  // 信息中心-文章详情查询
  articleViews: '/platform/view/article/news/',
  // 溯源信息查询
  originInfo: '/platform/view/meterLifeCycleLog/',
  // 获取入驻单位统计数据
  unitJoinCount: '/platform/view/sysOrganization/settledUnit',
  // 根据标识的产品分类、产品目录获取信息
  clientMark: '/platform/view/clientMark',
  // 提交订单（标识）
  markOrder: '/platform/markOrder',
  // 提交订单（服务）
  submitOrder: '/platform/applicationService/submitOrder',
  //  获取订单详情（标识）
  getMarkOrder: '/platform/markOrder/',
  // 立即付款（标识）
  clientPayment: '/platform/markOrder/payment',
  // 立即付款（服务）
  servicePayment: '/platform/clientServiceBuyRecord/payment',
  // 取消订单（标识）
  cancel: '/platform/markOrder/cancel',
  // 确认收货（标识）
  receive: '/platform/markOrder/receive',
  // 确认发货（标识）
  deliver: '/platform/markOrder/deliver',
  // 修改支付金额（标识）
  payment: '/platform/markOrder/payment',
  // 修改支付金额（服务）
  editPayPriceById: '/platform/clientServiceBuyRecord/editPayPriceById',
  // 获取标识购买订单
  clientPage: '/platform/markOrder/page',
  // 获取服务购买订单
  servicePage: '/platform/applicationServicePurchaseDetail/page',
  // 确认付款（标识）
  useUnitVerificationCode: '/platform/markOrder/useUnitVerificationCode',
  // 确认付款（服务）
  serviceVerificationCode: '/platform/clientServiceBuyRecord/useUnitVerificationCode',
  // 取消订单（服务）
  cancelOrder: '/platform/applicationService/cancelPayment/',
  // 获取订单详情（服务）
  clientServiceBuyRecord: '/platform/applicationServicePurchaseDetail/',
  // 获取服务购买订单（运营人员）
  adminPage: '/platform/clientServiceBuyRecord/manage/page',
  // 下载标识购买合同
  contract: '/platform/view/markOrder/download/contract',
  // 应用订单立即付款
  solutionOrderPayment: '/platform/applicationService/payment',
  // 应用订单确认支付
  solutionOrderConfirmPayment: '/platform/applicationService/confirmPayment',
  // 获取服务单价
  getSingServicePrice: '/platform/view/activationService',
  // 标识订单金额是0时，立即付款
  signOrderPayZeroOrder: '/platform/markOrder/paymentZero'
}
export default api
