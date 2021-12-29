import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader } from '../../tools'

// 查询服务分页查询
const getMyServicePage = (params) => getAction(api.myServicePage, params)
// 服务规格列表查询
const getMyServiceIndex = (params) => getAction(api.myServicePageIndex + params)
// 服务详情查询
const getWebsiteMyServiceDetail = (params) => getAction(api.myServiceDetail + params)
// 模板下载
const downloadMyServiceTemplate = () => getAction(api.myServiceTemplate)
// 导入服务
const importServicePage = (params) => postActionHeader(api.importService, params, header.formData)
// 服务新增
const addWebsiteService = (params) => postActionHeader(api.myServiceAction, params, header.json)
// 服务修改
const updateWebsiteService = (params) => putActionHeader(api.myServiceAction, params, header.json)
// 服务删除
const deleteWebsiteService = (params) => deleteActionHeader(api.myServiceAction + params, header.form)
export default {
  getMyServicePage,
  getMyServiceIndex,
  getWebsiteMyServiceDetail,
  downloadMyServiceTemplate,
  importServicePage,
  addWebsiteService,
  updateWebsiteService,
  deleteWebsiteService
}
