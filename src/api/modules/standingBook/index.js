import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader } from '../../tools'

// 查询服务类型列表
const getStandList = (params) => getAction(api.standList, params)
// 新增台账
const addStandBook = (params) => postActionHeader(api.standAction, params, header.json)
// 编辑台账
const updateStandBook = (params) => putActionHeader(api.standAction, params, header.json)
// 删除台账
const deleteStandBook = (params) => deleteActionHeader(api.standAction + params, header.json)
// 根据id 查看台账
const getStandById = (params) => getAction(api.standAction + params)
// 器具赋码
const meterCoding = (params) => postActionHeader(api.meterCoding, params, header.json)
// 导入台账
const importStand = (params) => postActionHeader(api.uploadStand, params, header.formData)
// 获取制造单位
const getProduceOrg = (params) => getAction(api.searchProductOrg, params)
// 验证台账信息
const checkUploadStand = (params) => postActionHeader(api.checkUploadStand, params, header.formData)
export default {
  checkUploadStand,
  getStandList,
  addStandBook,
  updateStandBook,
  deleteStandBook,
  getStandById,
  meterCoding,
  importStand,
  getProduceOrg
}
