import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, getActionHeader, postActionHeader, putActionHeader } from '../../tools'
// 根据code获取器具信息
const getMeter = (params) => getAction(api.meter + params)
// 静态台账_测试无需token
const getStaticMeter = (params) => getActionHeader(api.staticMeter, params)
// 动态台账_测试无需token
const getDynamicMeter = (params) => getActionHeader(api.dynamicMeter, params)
// 电子证书_测试无需token
const getCertificate = (params) => getActionHeader(api.certificate, params)
// 缺陷历史_测试无需token
const getDefectHistory = (params) => getActionHeader(api.defectHistory, params)
// 动态台账-维修记录分页
const getMaintenanceRecordPage = (params) => getAction(api.maintenanceRecordPage, params)
// 动态台账-保养记录分页
const getUpkeepRecordPage = (params) => getAction(api.upkeepRecordPage, params)
// 器具关联采集点报警点查询
const getItemWarn = (params) => getAction(api.itemWarn + params)
export default {
  getMeter,
  getStaticMeter,
  getDynamicMeter,
  getCertificate,
  getDefectHistory,
  getMaintenanceRecordPage,
  getUpkeepRecordPage,
  getItemWarn
}
