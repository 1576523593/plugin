const api = {
  // 运营端---实名审核列表
  realNameList: '/platform/sysOrganization/waitCheckList/page',
  // 运营端---实名认证审核
  identification: '/platform/sysOrganization/identification',
  // 运营端---获取机构信息
  organizationDetail: '/platform/view/sysOrganization/organizationDetail/',
  // 运营端---查看用户列表
  adminBussinessUserPage: '/platform/sysUserOrganization/manage/page',
  // 运营端---查看用户信息详情
  adminBussinessUserPageById: '/platform/sysUserOrganization/',
  // 运营端---解冻冻结账号
  freezedAndDefrosting: '/platform/freezeOrUnfreezeCount/',
  // 运营端---已完成审核单位信息列表
  checkedOrgList: '/platform/approvedUnit',
  // 运营端 --- 指定单位
  pointOrganization: '/platform/pointOrganization',
  // 运营端---会员信息---重置密码
  editPassword: '/platform/sysUser/editPassword/',
  // 批量托管企业前缀
  snmsPrefixManagement: '/platform/sysOrganization/snms/entConfig'
}
export default api
