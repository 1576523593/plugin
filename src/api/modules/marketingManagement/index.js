import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, getActionHeader, postActionHeader, putActionHeader } from '../../tools'

// 优惠券分页
const getMarketingTicketsPage = (params) => getAction(api.marketingTicketsList, params)
// 添加优惠券
const addMarketingTickets = (params) => postActionHeader(api.MarketingTicketsAction, params, header.json)
// 失效优惠券
const InvalidateTickets = (params) => putActionHeader(api.MarketingTicketsAction + params, header.form)
// 发放优惠券
const sendTickets = (params) => postActionHeader(api.sendTickets, params, header.json)
// 删除优惠券
const deleteTickets = (params) => deleteActionHeader(api.MarketingTicketsAction + params, header.form)
// 发放时选择优惠券(不分页)
const getMarketingCouponList = () => getActionHeader(api.marketingCouponList)
export default {
  getMarketingTicketsPage,
  addMarketingTickets,
  InvalidateTickets,
  sendTickets,
  deleteTickets,
  getMarketingCouponList
}
