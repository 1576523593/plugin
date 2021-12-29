import api from './api'
import header from '@/api/header'
import { deleteActionHeader, getAction, postActionHeader, putActionHeader } from '../../tools'

// 分页查询字典类型列表
const getDicTypeList = (params) => getAction(api.sysDicList, params)
// 新增数据字典类型
const addDicType = (params) => postActionHeader(api.sysDicTypeAction, params, header.json)
// 修改字典类型
const updateDicType = (params) => putActionHeader(api.sysDicTypeAction, params, header.json)
// 删除字典类型
const deleteDicType = (params) => deleteActionHeader(api.sysDicTypeAction + params, header.json)
// 查询字典详情
const getDicList = (params) => getAction(api.sysDicPage, params)
// 新增字典详情
const addDic = (params) => postActionHeader(api.sysDicAction, params, header.json)
// 修改字典详情
const updateDic = (params) => putActionHeader(api.sysDicAction, params, header.json)
// 删除字典详情
const deleteDic = (params) => deleteActionHeader(api.sysDicAction + params, header.json)
// 获取用户列表
const getUserList = (params) => getAction(api.sysUserList, params)
// 新增用户
const addSysUser = (params) => postActionHeader(api.sysUserAction, params, header.json)
// 修改用户
const updateSysUser = (params) => putActionHeader(api.sysUserAction, params, header.json)
// 获取用户详情
const getSysUserDetailById = (params) => getAction(api.sysUserAction + params)
// 删除用户权限
// const deleteUserRole = (params) => deleteActionHeader(api.sysUserAction + params)
// 定时任务列表
const getTimingTaskList = (params) => getAction(api.timingTaskList, params)
// 新增定时任务
const addTimingTask = (params) => postActionHeader(api.timingTaskAction, params, header.json)
// 删除定时任务
const deleteTimingTask = (params) => deleteActionHeader(api.timingTaskAction + params, header.form)
// 更新定时任务
const updateTimingTask = (params) => putActionHeader(api.timingTaskAction, params, header.json)
// 启动定时任务
const startTimingTask = (params) => postActionHeader(api.timingTaskAction + 'resume/' + params, header.form)
// 暂停定时任务
const pauseTimingTask = (params) => postActionHeader(api.timingTaskAction + 'pause/' + params, header.form)
// 立即执行定时任务
const startTimingTaskNow = (params) => postActionHeader(api.actionTimingTask + params, '', header.form)
// 获取角色信息分页
const getRolePage = (params) => getAction(api.getRolePage, params)
// 获取获取角色列表
const getRoleList = (params) => getAction(api.getRoleList, params)
// 新增角色
const addRoleAction = (params) => postActionHeader(api.roleAction, params, header.json)
// 修改角色
const updateRoleAction = (params) => putActionHeader(api.roleAction, params, header.json)
// 删除角色
const deleteRoleAction = (params) => deleteActionHeader(api.roleAction + params, header.json)
// 获取资源树
const getResourceTree = (params) => getAction(api.getResourceTree, params)
// 新增资源
const addResourceTree = (params) => postActionHeader(api.resourceTree, params, header.json)
// 修改资源
const updateResourceTree = (params) => putActionHeader(api.resourceTree, params, header.json)
// 删除资源
const deleteResourceTree = (params) => deleteActionHeader(api.resourceTree + params, header.json)
// 获取收费单位
const getAllChargeUnit = () => getAction(api.getAllChargeUnit)
export default {
  getDicTypeList,
  addDicType,
  updateDicType,
  deleteDicType,
  getDicList,
  addDic,
  updateDic,
  deleteDic,
  getUserList,
  addSysUser,
  getSysUserDetailById,
  updateSysUser,
  getTimingTaskList,
  addTimingTask,
  deleteTimingTask,
  updateTimingTask,
  startTimingTask,
  pauseTimingTask,
  startTimingTaskNow,
  getRolePage,
  getRoleList,
  addRoleAction,
  updateRoleAction,
  deleteRoleAction,
  getResourceTree,
  addResourceTree,
  updateResourceTree,
  deleteResourceTree,
  getAllChargeUnit
}
