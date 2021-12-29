import api from './api'
import header from '@/api/header'
import { getAction, getActionHeader, postActionHeader } from '../../tools'

// 查询检定机构列表
const orgListPage = (params) => getAction(api.orgListPage, params)
// 查询检定机构详情
const orgDetail = (params) => getAction(api.orgDetail + params)
// 查询检定机构服务列表
const orgServiceList = (params) => getAction(api.orgServiceList, params)
// 获取检定机构下的资质列表
const orgQualificationList = (params) => getAction(api.orgQualificationList + params)
// 根据使用单位id获取待检校器具列表’
const getNeedCalibrationMeters = (params) => getAction(api.meterListByEnteroriseId, params)
// 获取系统内机构列表
const getAllOrgList = () => getAction(api.getAllOrgList)
// 台账下单-根据器具id匹配的服务分类的集合查询出的机构服务
const getServiceListByMeterId = (params) => getActionHeader(api.getServiceListByMeterId, params, header.json)
// 台账下单-提交委托单
const submitStandOrder = (params) => postActionHeader(api.submitStandOrder, params, header.json)
// 快速下单 获取检定机构下所有列表
const getServiceListByOrgId = (params) => getAction(api.getServiceListByOrgId, params)
// 快速下单-提交委托单
const submitQuickOrder = (params) => postActionHeader(api.submitQuickOrder, params, header.json)
export default {
  orgListPage,
  orgDetail,
  orgServiceList,
  orgQualificationList,
  getNeedCalibrationMeters,
  getAllOrgList,
  getServiceListByMeterId,
  submitStandOrder,
  getServiceListByOrgId,
  submitQuickOrder
}
