import api from './api'
import header from '@/api/header'
import {
  deleteAction,
  deleteActionHeader,
  getAction,
  getActionHeader,
  postActionHeader,
  putActionHeader
} from '../../tools'

// 使用单位-委托管理-获取委托单列表
const getEnterpriseOrderList = (params) => getAction(api.enterpriseOrderList, params)
// 使用单位-委托管理-通过id查询委托单详情
const getUserOrderDetailById = (params) => getAction(api.enterpriseOrderDetailById + params)
// 使用单位-委托管理-确认收货
const userReceiveGoods = (params) => putActionHeader(api.enterpriseReceiveGoods + params, '', header.json)
// 使用单位-委托管理-立即付款
const userToPay = (params) => postActionHeader(api.enterpriseToPay, params, header.json)
// 使用单位-委托管理-创建通联个人会员
const createUnitPayAccount = (params) => postActionHeader(api.createUnitPayAccount, params, header.form)
// 通联个人会员获取手机验证码
const getPersonalMemberCode = (params) => postActionHeader(api.getPersonalMemberCode, params, header.form)
// 通联个人会员绑定手机号码
const personMemberBiddingPhone = (params) => postActionHeader(api.personalMemberBiddingPhone, params, header.form)
// 通联个人会员状态
const personalMemberStatus = () => getAction(api.personalMemberStatus)
// 个人会员立即付款
const personMemberPayment = (params) => postActionHeader(api.personMemberPayment, params, header.json)
// 使用单位-委托管理-取消委托单
const userCancelOrder = (params) => putActionHeader(api.enterpriseCancelOrder + params, header.json)
// 检定机构-委托单管理-委托单列表
const getCalibrationOrderList = (params) => getAction(api.calibrationOrderList, params)
// 检定机构-委托单管理-通过id查询委托单详情
const getCalibrationOrderDetailById = (params) => getAction(api.calibrationOrderDetailById + params)
// 检定机构-委托单管理-处理委托单
const calibrationHandleOrder = (params) => putActionHeader(api.calibrationHandleOrder, params, header.json)
// 检定机构-委托单管理-确认收货
const calibrationReciveGoods = (params) => putActionHeader(api.calibrationReciveGoods + params, header.form)
// 检定机构-委托单管理-工作台详情
const calibrationWorkStage = (params) => getAction(api.calibrationWorkStage + params)
// 检定机构-委托单管理-送检器具是否检校
const calibrationIsMeterCheck = (params) => putActionHeader(api.calibrationIsMeterCheck, params, header.json)
// 检定机构-委托单管理-工作台是否维修
const calibrationIsRepaire = (params) => putActionHeader(api.calibrationIsRepaire, params)
// 检定机构-委托单管理-修改工作台检校服务
const calibrationUpdateService = (params) => putActionHeader(api.calibrationUpdateService, params, header.json)
// 检定机构-委托单管理-删除检校服务
const calibrationDeleteService = (params) => deleteAction(api.calibrationDeleteService + params)
// 检定机构-委托单管理-修改工作台备注
const calibrationUpdateRemark = (params) => putActionHeader(api.calibrationUpdateRemark, params, header.json)
// 检定机构-委托单管理-新增证书、编辑证书、 删除证书
const calibrationCertificateAdd = (params) => postActionHeader(api.calibrationCertificateAction, params, header.json)
const calibrationCertificateUpdate = (params) => putActionHeader(api.calibrationCertificateAction, params, header.json)
const calibrationCertificateDelete = (params) => deleteAction(api.calibrationCertificateAction + params)
const calibrationCertificateView = (params) => getAction(api.calibrationCertificateAction + params)
// 检定机构-委托单管理-修改工作台维修金额
const calibrationUpdateAmount = (params) => putActionHeader(api.calibrationUpdateAmount, params, header.json)
// 检定机构-委托单管理-修改工作台一口价
const calibrationUpdateBuyout = (params) => putActionHeader(api.calibrationUpdateBuyout, params, header.json)
// 检定机构-委托管理-一口价置空
const buyOutSetNull = (params) => putActionHeader(api.buyOutSetNull, params, header.json)
// 检定机构-委托单管理-新增检校服务
const calibrationAddService = (params) => postActionHeader(api.calibrationAddService, params, header.json)
// 检定机构-委托单管理-填写物流信息
const calibrationAddExpressInfo = (params) => putActionHeader(api.calibrationAddExpressInfo, params, header.json)
// 查询委托单详情节点信息
const orderNodeName = () => getAction(api.orderNodeName)
// 检定机构--上传协议
const uploadProtocol = (params) => postActionHeader(api.uploadProtocol, params, header.json)
// 检定机构--删除协议
const deleteProtocol = (params) => deleteActionHeader(api.uploadProtocol + params, header.json)
// 使用单位-委托管理-修改委托单付款状态(一口价为0时调用)
const changeOrderStatus = (params) => putActionHeader(api.changeOrderStatus, params, header.json)
// 检定机构--一键免除费用
const orderFree = () => putActionHeader(api.orderFree, '', header.form)
// 检定机构--免除委托单费用
const orderFreeById = (params) => putActionHeader(api.orderFreeById, params, header.json)
// 检定机构--获取待付款委托单数量
const getNeedPayOrderCount = () => getAction(api.getNeedPayOrderCount)
// 发送委托单数据到语墨
const postSendToYumo = (params) => postActionHeader(api.sendToYumo, params, header.json)
export default {
  orderFree,
  orderFreeById,
  getNeedPayOrderCount,
  changeOrderStatus,
  buyOutSetNull,
  personMemberPayment,
  personalMemberStatus,
  personMemberBiddingPhone,
  createUnitPayAccount,
  getPersonalMemberCode,
  orderNodeName,
  uploadProtocol,
  deleteProtocol,
  getEnterpriseOrderList,
  getUserOrderDetailById,
  userReceiveGoods,
  userToPay,
  userCancelOrder,
  getCalibrationOrderList,
  getCalibrationOrderDetailById,
  calibrationHandleOrder,
  calibrationReciveGoods,
  calibrationWorkStage,
  calibrationIsMeterCheck,
  calibrationIsRepaire,
  calibrationUpdateService,
  calibrationDeleteService,
  calibrationUpdateRemark,
  calibrationCertificateAdd,
  calibrationCertificateUpdate,
  calibrationCertificateDelete,
  calibrationCertificateView,
  calibrationUpdateAmount,
  calibrationUpdateBuyout,
  calibrationAddService,
  calibrationAddExpressInfo,
  postSendToYumo
}
