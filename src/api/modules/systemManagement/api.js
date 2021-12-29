const api = {
  // 分页查询字典类型列表
  sysDicList: '/platform/sysDicClass/page',
  // 字典类型增删改查
  sysDicTypeAction: '/platform/sysDicClass/',
  // 分页查询字典详情列表
  sysDicPage: '/platform/sysDicItem/page',
  // 字典详情增删改查
  sysDicAction: '/platform/sysDicItem/',
  // 分页查询用户
  sysUserList: '/platform/sysUser/page',
  // 新增用户
  sysUserAction: '/platform/sysUser/',
  // 查询定时任务列表
  timingTaskList: '/platform/job/list',
  // 定时任务增删改查
  timingTaskAction: '/platform/job/',
  // 立即执行定时任务
  actionTimingTask: '/platform/job/',
  // 获取角色列表
  getRoleList: '/platform/sysRole/list',
  // 角色信息分页查询
  getRolePage: '/platform/sysRole/page',
  // 角色修改、删除、增加
  roleAction: '/platform/sysRole/',
  // 查询资源树
  getResourceTree: '/platform/sysRes/listTree',
  // 资源修改、删除、增加
  resourceTree: '/platform/sysRes/',
  // 查询所有收费单位
  getAllChargeUnit: '/platform/view/chargeUnit'
}
export default api
