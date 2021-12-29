import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader, getActionHeader } from '../../tools'

// 子账号分页列表
const getZqsubUserPage = (params) => getActionHeader(api.zqsubUserPage, params)
// 删除子账号
const deleteZqSubuser = (params) => deleteActionHeader(api.zqdeleteSubuser + params, header.json)
// 子账号重置密码
const resetZqPassword = (params) => putActionHeader(api.zqresetPassword + params, header.form)
// 新增子账号
const saveZqSubUser = (params) => postActionHeader(api.zqsaveSubUser, params, header.json)
// 修改子账号
const editZqSubUser = (params) => putActionHeader(api.zqeditSubUser, params, header.json)
// 获取部门
const getZqDepartment = (params) => getActionHeader(api.zqDepartment, params)
// 删除部门
const deleteZqDepartment = (params) => deleteActionHeader(api.zqdeleteDepartment + params, header.form)
// 新增部门
const saveZqsysDepartment = (params) => postActionHeader(api.zqsysDepartment, params, header.json)
// 修改部门
const editZqsysDepartment = (params) => putActionHeader(api.zqeditDepartment, params, header.json)
// 文件管理
// 文件管理列表分页
const getZqFilePage = (params) => getActionHeader(api.zqFilePage, params)
// 根据文件id获取文件可见人
const getZqVisiblePersonList = (params) => getActionHeader(api.zqVisiblePersonList + params)
// 根据文件id获取文件可见人
const getZqApproverList = (params) => getActionHeader(api.zqApproverList + params)
// 根据单位id查询组织机构树
const getZqOrgDeptUserTree = (params) => getActionHeader(api.zqOrgDeptUserTree, params)
// 发布文件
const addZqFile = (params) => postActionHeader(api.zqFileAdd, params, header.json)
// 根据文件id获取文件指派人
const getZqDesignatorList = (params) => getActionHeader(api.zqDesignatorList + params)
// 删除文件
const deleteZqFile = (params) => deleteActionHeader(api.zqDeleteFile + params, header.form)
// 指派
const putZqDesignate = (params) => putActionHeader(api.zqDesignate, params, header.json)
// 根据文件id获取审核弹窗中的内容
const getZqViewFile = (params) => getActionHeader(api.zqViewFile + params)
// 审核通过
const putZqCheckPass = (params) => putActionHeader(api.zqCheckPass, params, header.json)
// 审核驳回
const putZqCheckReject = (params) => putActionHeader(api.zqCheckReject, params, header.json)
// 查看驳回原因
const getZqzqRejectReason = (params) => getActionHeader(api.zqRejectReason + params)

export default {
  getZqsubUserPage,
  deleteZqSubuser,
  resetZqPassword,
  saveZqSubUser,
  editZqSubUser,
  getZqDepartment,
  deleteZqDepartment,
  saveZqsysDepartment,
  editZqsysDepartment,
  getZqFilePage,
  getZqVisiblePersonList,
  getZqApproverList,
  getZqOrgDeptUserTree,
  addZqFile,
  getZqDesignatorList,
  deleteZqFile,
  putZqDesignate,
  getZqViewFile,
  putZqCheckPass,
  putZqCheckReject,
  getZqzqRejectReason
}
