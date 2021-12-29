import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader, getActionHeader } from '../../tools'

// 获取机构基础资料
const getVccsInstitutions = () => getActionHeader(api.vccsInstitutions)

// 修改机构基础资料
const putVccsInstitutions = (params) => putActionHeader(api.vccsInstitutions, params, header.json)
// 获取机构资质图片
const putQualification = (params) => putActionHeader(api.qualification, params, header.json)
export default {
  getVccsInstitutions,
  putVccsInstitutions,
  putQualification
}
