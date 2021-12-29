import api from './api'
import header from '@/api/header'
import { getAction, postActionHeader } from '../../tools'
// 获取过期服务列表
const getExpireService = (params) => getAction(api.getExpireService, params)
// 合并购买提交订单
const submitMergeOrder = (params) => postActionHeader(api.submitMergeOrder, params, header.json)
// 合并购买立即付款
const toPaymentMergeOrder = (params) => postActionHeader(api.toPaymentMergeOrder, params, header.json)
export default {
  getExpireService,
  submitMergeOrder,
  toPaymentMergeOrder
}
