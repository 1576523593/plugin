import api from './api'
import header from '@/api/header'
import { getAction, getActionHeader, postActionHeader } from '../../tools'

// 用户充值
const userCharge = (params) => postActionHeader(api.userCharge, params, header.json)
// 用户提现
const userToCash = (params) => postActionHeader(api.toCash, params, header.json)
// 查询用户余额
const searchUserBalance = (params) => getActionHeader(api.userBalance, header.json)
// 确认提现
const getCashOfCash = (params) => postActionHeader(api.getCashOfCash, params, header.json)
export default {
  userCharge,
  userToCash,
  searchUserBalance,
  getCashOfCash
}
