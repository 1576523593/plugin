import api from './api'
import header from '@/api/header'
import { getAction } from '../../tools'

// 我的优惠券分页
const getMyTicketsPage = (params) => getAction(api.myticketsPage, params)
// 我的优惠券列表
const getMyticketsDetail = (params) => getAction(api.myticketsDetail + params)
export default {
  getMyTicketsPage,
  getMyticketsDetail
}
