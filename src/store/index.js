/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import Vuex from 'vuex'
import BasicLayout from '@/layouts/BasicLayout'
import { DynamicRouteRefSourceMap } from '@/config/router.config.js'
import { logout, login, getUserInfo, getRouteInfo } from '@/api/user'
import notification from 'ant-design-vue/es/notification'

Vue.use(Vuex)

/**
 * 生成最终路由
 * @param {*} data
 */
function generateRoute (data = []) {
  const rootRoute = {
    path: '/',
    name: 'index',
    component: BasicLayout,
    children: []
  }
  rootRoute.children = formatRoute(data)
  if (rootRoute.children && rootRoute.children.length > 0) {
    rootRoute.redirect = rootRoute.children[0].path
  }
  return rootRoute
}

/**
 * 规范化返回数据，生成满足vue-router的数据模型
 * @param {*} data
 */
function formatRoute (data = []) {
  const childRoutes = data.map((routeInfo, index) => {
    const newRouteInfo = {
      path: routeInfo.path,
      name: routeInfo.name,
      component: DynamicRouteRefSourceMap[routeInfo.component],
      meta: {
        id: routeInfo.id,
        title: routeInfo.title,
        permissions: routeInfo.level === 2 && routeInfo.permissions
      }
    }
    if (routeInfo.level === 1 && routeInfo.children && routeInfo.children.length > 0) {
      newRouteInfo.redirect = routeInfo.children[0].path
    }
    if (routeInfo.children && routeInfo.children.length > 0) {
      newRouteInfo.children = formatRoute(routeInfo.children)
    }
    return newRouteInfo
  })
  return childRoutes
}

/**
 * 过滤路由去除菜单信息
 * @param {*} result
 */
function filterRoute (result = []) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].level !== 1) {
      if (result[i].children && result[i].children.length > 0) {
        result[i].children = filterRoute(result[i].children)
      }
    } else {
      if (result[i].children && result[i].children.length > 0) {
        // 将目录类型的数据去除，拍平整个数组后重新遍历该层级
        // eslint-disable-next-line no-useless-call
        result.splice.apply(result, [i, 1, ...result[i].children])
        i = i - 1
      }
    }
  }
  return result
}

export default new Vuex.Store({
  state: {
    token: '',
    menuInfo: [],
    userInfo: ''
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_MENUINFO (state, menuInfo) {
      state.menuInfo = menuInfo
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    Login ({ commit }, params) {
      return new Promise((resolve, reject) => {
        login(params).then((res) => {
          if (res && res.status === 0) {
            const token = res.data.token
            Vue.ls.set('ACCESS_TOKEN', token)
            Vue.ls.set('USER_NAME', params.userName)
            Vue.ls.set('USER_PASSWORD', params.password)
            commit('SET_TOKEN', token)
            resolve()
          } else {
            notification.error({
              message: res.message
            })
            reject(new Error('获取token信息失败！'))
          }
        })
      })
    },
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          if (res && res.status === 0) {
            commit('SET_USER_INFO', res.data)
            resolve()
          } else {
            reject(new Error('获取用户信息失败！'))
          }
        })
      })
    },
    GetRouteInfo ({ commit }) {
      return new Promise((resolve, reject) => {
      getRouteInfo().then((res) => {
         if (res && res.status === 0) {
           const data = res.data
            commit('SET_MENUINFO', data)
            const cloneData = filterRoute(JSON.parse(JSON.stringify(data)))
            const routerInfo = generateRoute(cloneData)
            resolve(routerInfo)
          } else {
            reject(new Error('获取路由信息失败！'))
          }
        })
      })
    },
    Logout ({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then((res) => {
          if (res && res.status === 0) {
            commit('SET_TOKEN', null)
            Vue.ls.remove('ACCESS_TOKEN')
            Vue.ls.remove('USER_NAME')
            Vue.ls.remove('USER_PASSWORD')
            resolve()
          } else {
            this.$message.error(res.message)
            reject(res.message)
          }
        })
      })
    }
  }
})
