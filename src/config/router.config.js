export const DynamicRouteRefSourceMap = {
  PageView: () => import(/* webpackChunkName: "page-view" */'@/layouts/PageView'),
   SystemMenu: () => import(/* webpackChunkName: "menu-manage" */ '../views/SystemSetting/MenuManage'),
  SystemAuth: () => import(/* webpackChunkName: "auth-manage" */ '../views/SystemSetting/AuthManage'),
  SystemRole: () => import(/* webpackChunkName: "role-manage" */ '../views/SystemSetting/RoleManage'),
  SystemOrganization: () => import(/* webpackChunkName: "org-manage" */ '../views/SystemSetting/OrgManage'),
  SystemUser: () => import(/* webpackChunkName: "user-manage" */ '../views/SystemSetting/UserManage'),
  SystemAccount: () => import(/* webpackChunkName: "account" */ '../views/SystemSetting/Account')
}
