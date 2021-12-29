import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader, getActionHeader } from '../../tools'

// 获取轮播图分页列表
const getAcBannerPage = (params) => getActionHeader(api.acBannerPage, params)
// 新增轮播
const postSysPicture = (params) => postActionHeader(api.sysPicture, params, header.json)
// 修改轮播
const putSysPicture = (params) => putActionHeader(api.sysPicture, params, header.json)
// 删除轮播
const deleteSysPicture = (params) => deleteActionHeader(api.sysPicture + params, header.form)

export default {
  getAcBannerPage,
  postSysPicture,
  putSysPicture,
  deleteSysPicture
}
