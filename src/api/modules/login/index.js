import api from './api'
import header from '@/api/header'
import { getAction, getActionHeader, postAction, postActionHeader, putActionHeader, postActionHeaderParams } from '../../tools'
// 登录
const isLogin = (params) => postActionHeader(api.login, params, header.client)
const hasRole = (params) => getAction(api.userRole + params)
const translateKey = (params) => postActionHeader(api.translateKey, params)
const checkToken = (params) => postActionHeader(api.checkToken, params, header.json)
// 判断当前用户是否有手机号信息
const checkUserHasPhone = () => putActionHeader(api.checkUserHasPhone)
// 查看是否有手机号码
const isHasPhone = () => getAction(api.isHasPhone)
// 判断当前用户支付信息是否完整
const checkUserHasPayInfo = (params) => getAction(api.checkUserHasPayInfo)
//   // 申请修改（补充）支付信息
const addUpdatePayInfo = (params) => putActionHeader(api.addUpdatePayInfo, params, header.json)
// 拉取第三方平台单位数据
const thirdUnitInfo = (params) => getAction(api.thirdUnitInfo + params)
// 跳转航天云网
const toCASICloud = () => getAction(api.toCASICloud)
// 航天云网修改角色
const changeRole = (params) => putActionHeader(api.changeRole + params, '', header.form)
// 修改区域code
const changAreaCode = (params) => putActionHeader(api.changAreaCode + params, '', header.json)
// 航天员王首次登录补充信息
const CASIAddInfo = (params) => postActionHeader(api.CASIaddInfo, params, header.json)
export default {
  isLogin,
  changAreaCode,
  CASIAddInfo,
  changeRole,
  toCASICloud,
  hasRole,
  thirdUnitInfo,
  translateKey,
  checkToken,
  checkUserHasPhone,
  isHasPhone,
  checkUserHasPayInfo,
  addUpdatePayInfo
}
