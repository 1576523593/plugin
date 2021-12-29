import api from './api'
import header from '@/api/header'
import { getActionHeader, postActionHeader, putActionHeader, deleteActionHeader } from '../../tools'
// 收货地址查询
const addressListPage = () => getActionHeader(api.addressList)
// 收货地址新增
const addShippingAddress = (params) => postActionHeader(api.shippingAddress, params, header.json)
// 收货地址修改
const updateShippingAddress = (params) => putActionHeader(api.shippingAddress, params, header.json)
// 收货地址删除
const deleteShippingAddress = (params) => deleteActionHeader(api.shippingAddress + params, header.form)
export default {
  addressListPage,
  addShippingAddress,
  updateShippingAddress,
  deleteShippingAddress
}
