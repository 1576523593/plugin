import api from './api'
import header from '@/api/header'
import {
  deleteActionHeader,
  getAction,
  getActionHeader,
  postAction,
  postActionHeader, putAction,
  putActionHeader
} from '../../tools'

// 查询服务类型列表
const getServiceType = (params) => getAction(api.serviceList, params)
// 新增服务类型
const addServiceType = (params) => postActionHeader(api.serviceTypeAction, params, header.json)
// 修改服务类型
const updateServiceType = (params) => putActionHeader(api.serviceTypeAction, params, header.json)
// 删除服务类型
const deleteServiceType = (params) => deleteActionHeader(api.serviceTypeAction + params, header.json)
// 运营人员-检校服务-委托管理-委托单列表
const getAdminConsoleOrderList = (params) => getAction(api.adminConsoleOrderList, params)
const getAdminConsoleOrderListbyId = (params) => getAction(api.adminConsoleOrderListById + params)
// 运营人员-获取服务列表（运营端）
const getclientServiceList = (params) => getActionHeader(api.clientServiceList, params)
// 运营人员-获取服务列表（运营端）
const getclientServiceAll = () => getActionHeader(api.clientServiceAll)
// 运营人员-新增服务（运营端）
const addClientService = (params) => postActionHeader(api.clientService, params, header.json)
// 运营人员-修改服务（运营端）
const putClientService = (params) => putActionHeader(api.clientService, params, header.json)
// 运营人员-删除服务（运营端）
const clientServiceDelete = (params) => deleteActionHeader(api.clientService + params, header.json)
// 运营人员-服务详情（运营端）
const clientServiceDetail = (params) => getAction(api.clientService + params)
// 获取所有服务列表 （运营端根据orgId获取）
const getOrgIdService = (params) => getActionHeader(api.byOrgId, params)
// 实名认证查看添加提交idis
const realNameCheckIdis = (params) => getAction(api.realNameCheckIdis + params)
// 运营端台账管理列表
const getallMeterPage = (params) => getActionHeader(api.allMeter, params)
// 运营端采集器管理列表
const getcollectorPage = (params) => getActionHeader(api.collector, params)
// 运营端采集器审核
const putaAuditCheck = (params) => putActionHeader(api.auditCheck, params, header.json)

// 获取角色列表
const getclientRoleList = (params) => getAction(api.clientRoleList)
// 运营端激活码列表
const getActivationCodePage = (params) => getAction(api.activationCodePage, params)
// 运营端-添加激活码
const addActivationCode = (params) => postActionHeader(api.activationCodeAction, params, header.json)
// 运营端-修改激活码
const updateActivationCode = (params) => putActionHeader(api.activationCodeAction, params, header.json)
// 运营端-删除激活码
const delActivationCode = (params) => deleteActionHeader(api.activationCodeAction + params, '', header.json)
// 运营端-停用激活码
const forbidActivationCode = (params) => putActionHeader(api.pauseActivationCode + params, '', header.json)
// 运营端-查询激活码绑定单位列表
const activateCodeBindingOrg = (params) => getAction(api.activateCodeBindingOrg + params)
// 运营端-获取可购买服务列表 todo 未完成
const getAppList = () => getAction(api.getAppList)
// 公共-激活码管理-激活码列表
const commonActivateCodePage = (params) => getAction(api.commonActivateCodePage, params)
// 公共-激活码管理-查询激活码可激活应用
const activateApplication = (params) => getAction(api.activateApplication + params)
// 公共-激活码管理-移除某个单位使用激活码
const removeOrgActivateCode = (params) => putActionHeader(api.removeOrgActivateCode, params, header.json)
// 公共-激活码管理-判断是否有权限激活应用服务
const HasApplicationService = (params) => getAction(api.HasApplicationService, params)
// 公共-激活码管理-激活码激活应用服务
const activationAppService = (params) => postActionHeader(api.activationAppService, params, header.json)
// 运营-id查询激活码详情
const activateCodeDetail = (params) => getAction(api.activateCodeDetail + params)
// 公共-已购买服务列表
const hasBuyApps = (params) => getAction(api.hasBuyApps, params)
// 使用服务
const tryService = (params) => postActionHeader(api.tryService + params, '', header.json)
// 获取激活码时长
const getActivateDurs = (params) => getAction(api.getActivateDurs, params)
// 获取检校区域分页
const getCalibrationAreaPage = (params) => getAction(api.calibrationAreaPage, params)
// 新增检校区域
const calibrationAreaAdd = (params) => postActionHeader(api.calibrationAreaAction, params, header.json)
// 删除检校区域
const calibrationAreaDelete = (params) => deleteActionHeader(api.calibrationAreaAction + params, '', header.form)
// 修改检校区域
const calibrationAreaUpdate = (params) => putActionHeader(api.calibrationAreaAction, params, header.json)
// 会员信息-快速注册
const registerAccoByyy = (params) => postActionHeader(api.inputOrgInfo, params, header.json)
// 获取未实名认证用户接口
const getUnRealnameUserList = (params) => getAction(api.getUnRealnameUserList, params)
// 获取待续费认证用户列表
const getRenewUserList = (params) => getAction(api.getRenewUserList, params)
// 获取最近登陆用户列表
const getActiveUserList = (params) => getAction(api.getActiveUserList, params)
// 获取用户活跃度统计
const getAllUserActive = (params) => getAction(api.getAllUserActive, params)
// 线下订单提交
const submitOfflineOrder = (params) => postActionHeader(api.submitOfflineOrder, params, header.json)
// 获取机构影印件状态
const getOrgCertiFileStatus = () => getAction(api.getOrgCertiFileStatus)
// 身份证上传正面
const uploadIdCardFront = (params) => postActionHeader(api.uploadIdCardFront, params, header.formData)
// 身份证反面上传
const uploadIdCardBack = (params) => postActionHeader(api.uploadIdCardBack, params, header.formData)
// 提交通联影印件
const submitCertiFileUnionPay = (params) => postActionHeader(api.submitCertiFileUnionPay, params, header.json)
// 获取服务到期信息
const getServiceExpireDruing = () => getAction(api.getServiceExpireDruing)
// 导出最新登录记录
const getUserLastedLogin = () => getAction(api.getUserLastedLogin)
// 导出待续费用户
const getRenewRecordFile = () => getAction(api.getUserLastedLogin)
// 数据字典获取服务名称
const getServiceNameByDic = () => getAction(api.getServiceNameByDic)
// 服务名称获取服务时长
const getServiceDurBySerName = (params) => getAction(api.getServiceDurBySerName + params)
// 修改用户信息申请企业前缀字段
const updateUserIsApplyPrefix = (params) => putAction(api.updateUserIsApplyPrefix + params)
// 提交仪表按钮
const submitybRealname = (params) => putAction(api.submitybRealname, params)
export default {
  submitybRealname,
  updateUserIsApplyPrefix,
  getServiceDurBySerName,
  getServiceNameByDic,
  getUserLastedLogin,
  getRenewRecordFile,
  getServiceExpireDruing,
  submitCertiFileUnionPay,
  uploadIdCardBack,
  uploadIdCardFront,
  getOrgCertiFileStatus,
  submitOfflineOrder,
  getAllUserActive,
  getActiveUserList,
  getActivateDurs,
  getRenewUserList,
  getUnRealnameUserList,
  tryService,
  hasBuyApps,
  getclientServiceAll,
  clientServiceDetail,
  activateCodeDetail,
  commonActivateCodePage,
  activateApplication,
  removeOrgActivateCode,
  HasApplicationService,
  activationAppService,
  getAppList,
  activateCodeBindingOrg,
  getActivationCodePage,
  addActivationCode,
  delActivationCode,
  updateActivationCode,
  forbidActivationCode,
  calibrationAreaAdd,
  calibrationAreaDelete,
  calibrationAreaUpdate,
  getCalibrationAreaPage,
  getServiceType,
  realNameCheckIdis,
  addServiceType,
  updateServiceType,
  deleteServiceType,
  getAdminConsoleOrderList,
  getAdminConsoleOrderListbyId,
  addClientService,
  getclientServiceList,
  putClientService,
  clientServiceDelete,
  getallMeterPage,
  getcollectorPage,
  putaAuditCheck,
  getOrgIdService,
  getclientRoleList,
  registerAccoByyy
}
