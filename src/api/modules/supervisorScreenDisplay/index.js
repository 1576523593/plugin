import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader } from '../../tools'
// 获取单位数量
const getOrgCount = (params) => getAction(api.getOrgCount + params)
// 获取机构总量
const getSupervisorMeterCount = (params) => getAction(api.getMeterCount + params)
// 获取强检器具总量
const getStrongRecordCount = (params) => getAction(api.getStrongRecordCount + params)
// 获取抽检总量
const getCheckCount = (params) => getAction(api.getCheckCount + params)
// 获取抽检合格数量
const getCheckPassCount = (params) => getAction(api.getCheckPassCount + params)
// 获取强检备案数据
const getRecordMeterTypeCount = (params) => getAction(api.getRecordMeterTypeCount + params)
// 获取受检数量
const getHasCheckCount = (params) => getAction(api.getHasCheckCount + params)
// 受检合格数
const getStrongCheckPassCount = (params) => getAction(api.getStrongCheckPassCount + params)
// 获取强检折线图
const getStrongMeterLineChart = (params) => getAction(api.getStrongMeterLineChart + params)
// 获取地图信息
const getSupervisorMapInfo = (params) => getAction(api.getMapInfo, params)
// 获取监管企业下的单位
const getSupervisorOrgList = (params) => getAction(api.getSupervisorOrgList + params)
// 获取监管单位器具列表
const getSupervisorOrgMeterDetail = (params) => getAction(api.getSupervisorOrgMeterDetail + params.orgCode, params)
// 获取监管请见器具列表
const getSupervisorStrongRecordList = (params) => getAction(api.getSupervisorStrongRecordList + params.orgCode, params)
export default {
  getSupervisorStrongRecordList,
  getSupervisorOrgMeterDetail,
  getSupervisorOrgList,
  getStrongMeterLineChart,
  getStrongCheckPassCount,
  getOrgCount,
  getSupervisorMeterCount,
  getStrongRecordCount,
  getCheckCount,
  getCheckPassCount,
  getRecordMeterTypeCount,
  getHasCheckCount,
  getSupervisorMapInfo
}
