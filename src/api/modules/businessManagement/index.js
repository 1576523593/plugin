import api from './api'
import header from '@/api/header'
import { getActionHeader, putActionHeader, deleteActionHeader, postActionHeader, getAction } from '../../tools'

// 获取实名审核列表
const getRealNameList = (params) => getActionHeader(api.realNameList, params)
// 审核
const sysOrganization = (params) => putActionHeader(api.identification, params, header.json)
// 查看机构信息
const handleOrganizationDetail = (params) => getActionHeader(api.organizationDetail + params)
// 运营端---查看用户列表
const adminBussinessUserPage = (params) => getAction(api.adminBussinessUserPage, params)
// 运营端---查看用户信息详情
const adminBussinessUserPageById = (params) => getAction(api.adminBussinessUserPageById + params)
const freezedAndDefrosting = (params) => postActionHeader(api.freezedAndDefrosting + params, header.form)
// 运营端 -- 获取已完成审核的信息列表
const getCheckedOrgList = (params) => getAction(api.checkedOrgList, params)
// 运营端 --- 指定单位
const pointOrganization = (params) => postActionHeader(api.pointOrganization, params, header.form)
// 运营端---会员信息---重置密码
const editPassword = (params) => putActionHeader(api.editPassword + params, header.form)
// 批量托管企业前缀
const snmsPrefixManagement = () => postActionHeader(api.snmsPrefixManagement, '', header.form)
export default {
  snmsPrefixManagement,
  getRealNameList,
  sysOrganization,
  handleOrganizationDetail,
  adminBussinessUserPage,
  adminBussinessUserPageById,
  freezedAndDefrosting,
  getCheckedOrgList,
  pointOrganization,
  editPassword
}
