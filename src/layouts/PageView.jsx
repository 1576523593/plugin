const PageView = {
  name: 'PageView',
  render () {
    const { $route: { meta } } = this
    const noKeepAlive = (
      <router-view></router-view>
    )
    const keepAlive = (
      <router-view></router-view>
    )

    return meta.isKeepAlive ? keepAlive : noKeepAlive
  }
}
export default PageView
