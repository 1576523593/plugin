export default {
  // 提交添加或删除调用
  isOk (_this, id) {
    let module = {
      module: _this.$route.meta.module
    }
    _this.$store.dispatch('tagsView/changeRouterTabStatus', module)
    _this.$store.dispatch('tagsView/delView', _this.$route).then(({ visitedViews }) => {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        if (id) {
          _this.$router.push({ name: _this.$route.meta.module, params: { id } })
        } else {
          _this.$router.push({ name: _this.$route.meta.module })
        }
      } else {
        _this.$router.push('/')
      }
    })
  },
  // 操作成功时在activated钩子函数中调用
  checkModule (_this) {
    const moduleList = _this.$store.state.tagsView.pageActionStatus
    const currentModule = _this.$route.meta.title
    if (moduleList.some(v => v.module === currentModule)) {
      _this.$store.dispatch('tagsView/deleteRouterTabStatus', currentModule)
      return true
    } else {
      return false
    }
  }
}
