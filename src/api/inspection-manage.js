import httpRequest from '@/request'

const API = {
  ORGANIZATION: '/front/sun/v1/sysOrganization',
  ACTIVATION_PLAN: '/front/sun/v1/plan',
  TASK_METER: '/front/sun/v1/taskMeter',
  DRIVE_TASKMETEER: '/front/sun/v1/taskMeter/excel',
  ADD_TASKMETER: '/front/sun/v1/planTask/',
  VIEW_TASKMETER: '/front/sun/v1/planTask',
  ADD_PLAN: '/front/sun/v1/plan',
  VIEW_PLAN: '/front/sun/v1/plan',
  EDIT_PLAN: '/front/sun/v1/plan',
  METER_PAGE: '/front/sun/v1/planTask/meter/page',
  ORGANIZATION_CURRENT: '/front/sun/v1/sysOrganization/current'
}

// 组织机构列表
export function getOrganization () {
  return httpRequest({
    url: API.ORGANIZATION,
    method: 'get'
  })
}

// 当前用户管辖机构列表
export function getOrganizationCurrent () {
  return httpRequest({
    url: API.ORGANIZATION_CURRENT,
    method: 'get'
  })
}

// 启用/停用计划
export function putActivationPlan (id, params) {
  return httpRequest({
    url: `${API.ACTIVATION_PLAN}/${id}/planStatus`,
    method: 'put',
    params
  })
}

// 巡检记录详情
export function getTaskMeter (id) {
  return httpRequest({
    url: `${API.TASK_METER}/${id}`,
    method: 'get'
  })
}

// 导出巡检记录
export function getDriveTaskmeter (params) {
  return httpRequest({
    url: API.DRIVE_TASKMETEER,
    method: 'get',
    responseType: 'blob',
    params
  })
}

// 创建工单
export function postAddTaskMeter (params) {
  return httpRequest({
    url: `${API.ADD_TASKMETER}`,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 工单详情
export function getViewTaskMeter (id) {
  return httpRequest({
    url: `${API.VIEW_TASKMETER}/${id}`,
    method: 'get'
  })
}

// 创建计划
export function postAddPlan (params) {
  return httpRequest({
    url: `${API.ADD_PLAN}`,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

// 查看计划
export function getViewPlan (id) {
  return httpRequest({
    url: `${API.VIEW_PLAN}/${id}`,
    method: 'get'
  })
}

// 编辑计划
export function editViewPlan (id, params) {
  return httpRequest({
    url: `${API.EDIT_PLAN}/${id}`,
    method: 'put',
    data: params
  })
}

// 创建计划、工单器具列表
export function getMeterPage (params) {
  return httpRequest({
    url: `${API.METER_PAGE}`,
    method: 'get',
    params
  })
}
