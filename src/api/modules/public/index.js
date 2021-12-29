import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader, getActionHeader } from '../../tools'
import { param } from '../../../utils'

// 查询省市区
const getArea = () => getAction(api.area)
// 修改密码
const putNewPassword = (params) => postActionHeader(api.newPassword, params, header.json)
// 获取注册角色列表
const getRegisterRole = () => getAction(api.registerrole)
//  查询单位规模数据
const getOrganizationSize = () => getAction(api.organizationSize)
//  查询企业类型数据
const getIndustry = () => getAction(api.industry)
// 查询行业大类
const getTradeClass = () => getAction(api.tradeClass)
// 查询行业小类
const getLeafTradeClass = (params) => getAction(api.tradeLeafClass, params)
// 查询证书类型
const getCertificateType = (params) => getAction(api.certificateType)
// 获取生产属地
const getProductDependency = () => getAction(api.productDependency)
// 获取用途数据
const getMeterUsing = () => getAction(api.meterUsing)
// 获取溯源方式
const getOriginType = () => getAction(api.originType)
// 提交idis
const submitISID = (params) => putActionHeader(api.ISID, params, header.json)
// 用户获取实名认证信息
const getIdentification = () => getActionHeader(api.identification)
// 单位名称重复性验证
const organizationNameUsableCheck = (params) => getActionHeader(api.organizationName, params)
// 查统一社会信用代码重复性验证
const getorganizationCodeUsableCheck = (params) => getActionHeader(api.organizationCodeUsableCheck, params)
// 实名认证申请
const postIdentification = (params) => postActionHeader(api.identification, params, header.json)
// 运营端-实名审核修改实名信息
const postOpeIdentification = (params) => postActionHeader(api.opeIdentification, params, header.json)
// 初始化附件列表
const getAttachment = (params) => getActionHeader(api.attachment + params, '', header.form)
// 删除附件
const deleteAttachment = (params) => postActionHeader(api.deleteattachment, params, header.form)
// 营业执照上传
const uploadBusinessLicense = (params) => postActionHeader(api.uploadbusinessLicense, params, header.formData)
// 附件上传
const uploadAttachment = (params) => postActionHeader(api.uploadattachment, params, header.formData)
// 验证附件是否已经上传
const isExistAttachment = (params) => postActionHeader(api.isExistattachment, params, header.form)
// 注册环信账号（支持游客模式）
const imLogining = (params) => getAction(api.imLogin, params)
// 服务平台账号绑定环信账号
const imBindUsers = (params) => getActionHeader(api.imBindUser, params)
// 根据机构id获取检定机构账号信息
const imAccounts = (params) => getAction(api.imAccount + params)
// 获取运营人员账号信息
const imAdminInfo = (params) => getAction(api.imAdminInfo)
// 根据服务平台用户名获取环信账号信息
const imSysUsers = (params) => getActionHeader(api.imSysUser, params)
// 获取管理员权限
const imTokens = (params) => getAction(api.imToken, params)
// 添加好友
const imFriends = (params) => getAction(api.imFriend, params)
// 获取好友列表
const imContacts = (params) => getAction(api.imContacts, params)
// 获取聊天记录
const imChatRecords = (params) => getAction(api.imChatRecord, params)
// 根据环信用户名获取机构名称
const imOrgNames = (params) => getAction(api.imOrgName + params)
// 查询会员详细信息
const getMemberInfo = (params) => getActionHeader(api.memberInfo, params)
// 添加支付信息
const addPayInfo = (params) => putActionHeader(api.payInfo, params, header.json)
// 上传身份证正面
const UploadIdCardFront = (params) => postActionHeader(api.IdCardFront, params, header.formData)
// 上传身份证反面
const UploadIdCardBack = (params) => postActionHeader(api.IdCardBack, params, header.formData)
// 企业对公账户许可证上传
const UploadPermitLicense = (params) => postActionHeader(api.IdCardBack, params, header.formData)
// 检定端、使用端-增值服务-获取所有服务列表
const getClientServicePage = (params) => getActionHeader(api.clientServicePage, params)
// 检定端、使用端-增值服务-获取服务购买记录
const getClientServiceBuyRecord = (params) => getActionHeader(api.clientServiceBuyRecord, params)
// 根据服务名称获取服务信息
const getclientServiceView = (params) => getAction(api.clientServiceView, params)
// 立即付款（服务）
const postclientServicePay = (params) => postActionHeader(api.clientServicePay, params, header.json)
// 确认付款手机号码验证
const getPayOfCode = (params) => postActionHeader(api.payOfCode, params, header.json)
// 单点登录仪表商城
const toMeterMall = () => postActionHeader(api.toMeterMall, '', header.form)
// 获取标识解析次数
const getOriginCount = (params) => getAction(api.getOriginCount, params)
// 仪表品赋码
const yibiaoCode = (params) => postActionHeader(api.yibiaoCode, params)
// 是否需要重新提交实名认证
const repeatSubRealName = (params) => getAction(api.repeatSubRealName + params)
// 重新提交实名认证
const submitYibiaoRealName = (params) => putActionHeader(api.submitYibiaoRealName, params, header.json)
// 主账号-系统管理
const getPrSubSysUser = (params) => getActionHeader(api.prSubSysUser, params)
// 主账号-系统管理-新增子账号
const postPrAddSubSysUser = (params) => postActionHeader(api.prAddSubSysUser, params, header.json)
// 主账号-系统管理-修改子账号部门
const putSubSysUser = (params) => putActionHeader(api.prPutSubSysUser, params, header.json)
// 主账号-系统管理-子账号审核通过
const prCheckPass = (params) => putActionHeader(api.prCheckPass + params, header.form)
// 主账号-系统管理-子账号审核驳回
const prCheckNoPass = (params) => putActionHeader(api.prCheckNoPass + params, header.form)
// 主账号-系统管理-删除子账号
const prDeSubSysUser = (params) => deleteActionHeader(api.prDeSubSysUser + params, header.form)
// 主账号-系统管理-子账号已授予权限列表
const getPrSysUserRes = (params) => getActionHeader(api.prSysUserRes, params)
// 实名认证-查询单位列表
const getOrganizationList = (params) => getActionHeader(api.organizationList + params)
// 实名认证-提交选择单位
const prSubmitOrganization = (params) => putActionHeader(api.submitOrganization + params, header.form)
// 根据用户角色获取用户权限列表（子账号可被授予的所有权限列表）
const sysRoleResByUserId = (params) => getActionHeader(api.sysRoleResByUserId + params)
// 根据用户id查询已授予权限
const sysSubUserResByUserId = (params) => getActionHeader(api.sysSubUserResByUserId + params)
// 修改子账号权限
const sysSubUserRes = (params) => putActionHeader(api.sysSubUserRes, params, header.json)
// 根据当前用户获取审核状态
const prGetSysUser = () => getActionHeader(api.getSysUser, '')
// 修改子账号密码
const putPassword = (params) => putActionHeader(api.password, params, header.json)
// 取消选择单位
const prCacelOrganization = (params) => putActionHeader(api.cacelOrganization + params, header.form)
// 根据角色code查询资源列表
const prbyRoleCode = (params) => getActionHeader(api.byRoleCode + params)
// 获取云服务页面服务到期时间
const getServicePageDuring = (params) => getActionHeader(api.getServicePageDuring, params)
// 获取线下支付信息
const getOfflineAccountInfo = () => getAction(api.getOfflineAccountInfo)
// 获取收款账号
const getReceiveAccountInCharge = () => getAction(api.getReceiveAccountInCharge)
// 应用服务金额为0立即付款
const payServerOrderAmountZero = (params) => postActionHeader(api.payServerOrderAmountZero, params, header.json)
export default {
  payServerOrderAmountZero,
  getReceiveAccountInCharge,
  getOfflineAccountInfo,
  getServicePageDuring,
  submitYibiaoRealName,
  repeatSubRealName,
  yibiaoCode,
  getOriginCount,
  getPayOfCode,
  getArea,
  toMeterMall,
  getMeterUsing,
  getProductDependency,
  getCertificateType,
  getOriginType,
  UploadIdCardFront,
  UploadIdCardBack,
  UploadPermitLicense,
  getRegisterRole,
  putNewPassword,
  getIdentification,
  getOrganizationSize,
  getIndustry,
  organizationNameUsableCheck,
  getorganizationCodeUsableCheck,
  postIdentification,
  postOpeIdentification,
  getAttachment,
  deleteAttachment,
  uploadBusinessLicense,
  uploadAttachment,
  isExistAttachment,
  imLogining,
  imBindUsers,
  imAccounts,
  imAdminInfo,
  imSysUsers,
  imTokens,
  imFriends,
  imContacts,
  imChatRecords,
  imOrgNames,
  getMemberInfo,
  addPayInfo,
  getTradeClass,
  getLeafTradeClass,
  submitISID,
  getClientServicePage,
  getClientServiceBuyRecord,
  getclientServiceView,
  postclientServicePay,
  getPrSubSysUser,
  postPrAddSubSysUser,
  putSubSysUser,
  prCheckPass,
  prCheckNoPass,
  prDeSubSysUser,
  getPrSysUserRes,
  getOrganizationList,
  prSubmitOrganization,
  sysRoleResByUserId,
  sysSubUserResByUserId,
  sysSubUserRes,
  prGetSysUser,
  putPassword,
  prCacelOrganization,
  prbyRoleCode
}
