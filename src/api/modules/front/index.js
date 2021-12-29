import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, getActionHeader, postActionHeader, putActionHeader } from '../../tools'

// 首页-banner前台展示
const getHomeBanners = (params) => getAction(api.homeBanners, params)
// 信息中心-banner图
const getArticleBanners = (params) => getAction(api.articleBanners, params)
// 前台查询文章分页列表
const getArticlePage = (params) => getAction(api.articlePage, params)
// 前台查询相关推荐文章列表
const getRecommendArticle = (params) => getAction(api.recommendArticle, params)
// 服务中心-文章详情查询
const getArticleView = (params) => getAction(api.articleView + params)
// 信息中心-文章详情查询
const getArticleViews = (params) => getAction(api.articleViews + params)
// 溯源信息查询
const getOriginCode = (params) => getAction(api.originInfo + params)
// 获取入驻单位统计数据
const getUnitJoinCount = () => getAction(api.unitJoinCount)
// 根据标识的产品分类、产品目录获取信息
const getClientMark = (params) => getAction(api.clientMark, params)
// 获取订单详情（标识）
const getMarkOrder = (params) => getActionHeader(api.getMarkOrder + params)
// 获取订单详情（服务）
const getServiceBuyRecord = (params) => getActionHeader(api.clientServiceBuyRecord + params)
// 删除线下订单
const deleteOfflineService = (params) => deleteActionHeader(api.clientServiceBuyRecord + params, header.json)
//  提交订单（标识）
const postMarkOrder = (params) => postActionHeader(api.markOrder, params, header.json)
//  提交订单（服务）
const submitOrder = (params) => postActionHeader(api.submitOrder, params, header.json)
//  取消订单（标识）
const cancel = (params) => putActionHeader(api.cancel, params, header.json)
//  取消订单（服务）
const cancelOrder = (params) => putActionHeader(api.cancelOrder + params, header.json)
//  修改支付金额（标识）
const payment = (params) => putActionHeader(api.payment, params, header.json)
//  修改支付金额（服务）
const editPayPriceById = (params) => putActionHeader(api.editPayPriceById, params, header.json)
// 立即付款（标识）
const postClientPayment = (params) => postActionHeader(api.clientPayment, params, header.json)
// 获取标识购买订单
const getClientPage = (params) => getActionHeader(api.clientPage, params)
// 获取服务购买订单
const getServicePage = (params) => getActionHeader(api.servicePage, params)
// 获取服务购买订单（运营端）
const getAdminPage = (params) => getActionHeader(api.adminPage, params)
//  确认付款（标识）
const postVerificationCode = (params) => postActionHeader(api.useUnitVerificationCode, params, header.json)
//  确认收货（标识）
const receive = (params) => putActionHeader(api.receive, params, header.json)
//  确认发货（标识）
const deliver = (params) => putActionHeader(api.deliver, params, header.json)
// 立即付款（服务）
const postServicePayment = (params) => postActionHeader(api.servicePayment, params, header.json)
// 确认付款（服务）
const postServiceVerificationCode = (params) => postActionHeader(api.serviceVerificationCode, params, header.json)
// 下载标识购买合同
const getContract = (params) => getActionHeader(api.contract, params)
// 应用订单立即付款
const solutionOrderPayment = (params) => postActionHeader(api.solutionOrderPayment, params, header.json)
// 应用订单确认支付
const solutionOrderConfirmPayment = (params) => postActionHeader(api.solutionOrderConfirmPayment, params, header.json)
// 获取服务单价
const getSingServicePrice = (params) => getAction(api.getSingServicePrice, params)
// 标识订单金额是0时，立即付款
const signOrderPayZeroOrder = (params) => postActionHeader(api.signOrderPayZeroOrder, params)
export default {
  signOrderPayZeroOrder,
  deleteOfflineService,
  getSingServicePrice,
  solutionOrderPayment,
  solutionOrderConfirmPayment,
  getUnitJoinCount,
  getOriginCode,
  getHomeBanners,
  getArticleBanners,
  getArticlePage,
  getRecommendArticle,
  getArticleView,
  getArticleViews,
  postMarkOrder,
  submitOrder,
  getClientMark,
  getMarkOrder,
  getAdminPage,
  getServiceBuyRecord,
  postClientPayment,
  postServicePayment,
  getClientPage,
  getServicePage,
  postVerificationCode,
  cancel,
  cancelOrder,
  receive,
  deliver,
  payment,
  editPayPriceById,
  postServiceVerificationCode,
  getContract
}
