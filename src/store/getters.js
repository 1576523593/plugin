const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  roleCode: state => state.user.roleCode,
  userInfo: state => state.user.userInfo,
  platformPackage: state => state.permission.platformPackage,
  controlType: state => state.layout.controlType,
  isControl: state => state.layout.isControl,
  controlRoutes: state => state.permission.currentRoutes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  pageActionStatus: state => state.tagsView.pageActionStatus
}
export default getters
