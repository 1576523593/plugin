import api from './api'
import header from '@/api/header'
import { getAction, getActionHeader, postActionHeader } from '../../tools'

// 首页统计信息
const homeStatistics = () => getAction(api.homeStatistics)
// 首页推荐机构
const homePromoteOrg = () => getAction(api.homePromoteOrg)
// 首页指导价格
const homeGuidPrice = () => getAction(api.homeGuidPrice)
// 检校提醒列表
const homeNeedCalibrationList = (params) => getAction(api.homeNeedCalibrationList, params)
// 获取使用单位首页服务列表
const getServiceListInHome = () => getAction(api.getServiceListInHome)
// 合并购买提交订单
const unionPaymentSubmit = (params) => postActionHeader(api.unionPaymentSubmit, params, header.json)
// 合并购买立即付款
const unionPaymentSave = (params) => postActionHeader(api.unionPaymentSave, params, header.json)
// 获取单位认证状态
const getCertificationStatus = () => getActionHeader(api.certificationStatusById)
// 激活码激活应用服务
const unionPaymentActivateService = (params) => postActionHeader(api.unionPaymentActivateService, params, header.json)
// 模糊匹配单位
const getOrgBykeywords = (params) => getAction(api.getOrgBykeywords, params)
export default {
  getOrgBykeywords,
  unionPaymentActivateService,
  unionPaymentSave,
  unionPaymentSubmit,
  getServiceListInHome,
  homeStatistics,
  homePromoteOrg,
  homeGuidPrice,
  homeNeedCalibrationList,
  getCertificationStatus
}
