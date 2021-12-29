import api from './api'
import header from '@/api/header'
import { getActionHeader, putActionHeader, deleteActionHeader, postActionHeader, getAction } from '../../tools'
// 采集器列表分页查询
const collectorPage = (params) => getAction(api.collectorList, params)
// 采集器新增、修改、删除、详情
const collectorAdd = (params) => postActionHeader(api.collectorAction, params, header.json)
const collectorUpdate = (params) => putActionHeader(api.collectorAction, params, header.json)
const collectorDelete = (params) => deleteActionHeader(api.collectorAction + params, header.json)
const collectorDetail = (params) => getAction(api.collectorAction + params, '', header.json)
// 控制器开关
const collectorControl = (params) => postActionHeader(api.collectorControl + params, '', header.form)
// 采集器具分页列表查询
const collectorMeterPage = (params) => getAction(api.collectorMeterPage, params)
// 采集器具批量删除
const collectorDeleteMeter = (params) => deleteActionHeader(api.collectorMeterAction + params, header.form)
// 采集器具添加
const addCollectorMeter = (params) => postActionHeader(api.collectorMeterAction, params, header.form)
// 获取待导入的采集器具
const getNeedExportMeters = (params) => getAction(api.getNeedExportMeters, params)
// 获取采集点列表
const collectorPointPage = (params) => getAction(api.collectorPointPage + params.meterId, params)
// 查询所有采集点
const collertorPointList = (params) => getAction(api.collertorPointList + params)
// 删除采集点
const deleteCollectorPoint = (params) => deleteActionHeader(api.collectorPointAction + params, header.form)
// 新增采集点
const addCollectorPoint = (params) => postActionHeader(api.collectorPointAction, params, header.json)
// 修改采集点采集器
const updateCollectors = (params) => putActionHeader(api.collectorMeterAction, params, header.json)
// 获取采集器
const collectorsData = (params) => getAction(api.collectorsData, params)
// 报警点分页列表查询
const getWarningPage = (params) => getAction(api.getWarningPage + params.meterId, params)
// 报警点删除
const deleteWarnPoint = (params) => deleteActionHeader(api.warnPointAction + params, header.form)
// 报警点增加
const addWarnPoint = (params) => postActionHeader(api.warnPointAction, params, header.json)
// 实时数据大屏-单位下器具总数
const getMeterCount = (params) => getAction(api.getMeterCount + params)
// 实时数据大屏-单位下采集点总数
const getCollectorPointCount = (params) => getAction(api.getCollectorPointCount + params)
// 实时数据大屏-单位下激活器具总数
const getActivateMeterCount = (params) => getAction(api.getActivateMeterCount + params)
// 器具关联采集点报警点
const getMeterCollectorRelation = (params) => getAction(api.getMeterCollectorRelation + params)
// 获取器具健康信息
const getMeterPieData = (params) => getAction(api.getMeterPieData + params)
// 单位关联采集点报警点
const getOrgCollertorRelationList = (params) => getAction(api.getOrgCollertorRelationList + params)
export default {
  getMeterPieData,
  getOrgCollertorRelationList,
  getMeterCollectorRelation,
  getCollectorPointCount,
  getActivateMeterCount,
  getMeterCount,
  collectorPage,
  addCollectorMeter,
  collectorAdd,
  collertorPointList,
  updateCollectors,
  addWarnPoint,
  addCollectorPoint,
  collectorUpdate,
  collectorDelete,
  collectorDetail,
  collectorControl,
  collectorMeterPage,
  collectorDeleteMeter,
  getNeedExportMeters,
  collectorPointPage,
  collectorsData,
  getWarningPage,
  deleteWarnPoint,
  deleteCollectorPoint
}
