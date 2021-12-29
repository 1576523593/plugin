/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import '@/assets/styles/nprogress.less'
NProgress.configure({ showSpinner: false })

const whiteList = ['Login', 'Forgot', 'Query']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const hasToken = !!Vue.ls.get('ACCESS_TOKEN')
  if (hasToken) {
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      if (store.state.menuInfo.length === 0) {
        store.dispatch('GetUserInfo').then(() => {
          store.dispatch('GetRouteInfo').then((route) => {
            router.addRoute(route)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 白名单免登录
      next()
    } else {
      // 否则跳到登录页
      next({ path: '/login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
