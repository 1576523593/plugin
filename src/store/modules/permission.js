import {
  currentRouter, useEnterpriseControlRouter, noRealNameRouter, salesRouter, salesRouters, noSalesRouter, noRealNameORrgRouter, hasRealNameRouter, hasRealNameOrgRouter, hasRealNameOrgZQRouter, haslimitRouter
} from '@/router/modules/control'
import { routes } from '@/router'
import Layout from '@/layout'
import { checkUserRealNameStatus } from '@/api/login'
import constants from '@/utils/constants'
import storage from '@/utils/sessionStorage'
/**
通过meta.role判断是否与当前用户权限匹配
@param roles
@param route
**/
function filterCurrent (current, asyncRouter) {
  const filteredRouter = []
  current[0].children.forEach(v => {
    asyncRouter.filter(val => {
      if (val.value === v.meta.permission[0]) {
        filteredRouter.push({
          path: v.path,
          name: v.name,
          component: v.component,
          hidden: v.hidden || false,
          meta: v.meta,
          children: []
        })
        if (val.children.length > 0) {
          val.children.forEach(second => {
            if (v.children) {
              v.children.forEach(currentChild => {
                if (second.value === currentChild.meta.permission[0]) {
                  filteredRouter.forEach(filtered => {
                    if (filtered.name === currentChild.meta.parentRouter) {
                      filtered.children.push(currentChild)
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  })
  return filteredRouter
}

function routerFilter (asyncRouterMap, routerList) {
  // 初始化路由
  const arrMap = [
    {
      path: '/control',
      component: Layout,
      meta: {
        title: 'control-home',
        affix: true,
        keepAlive: true
      },
      children: []
    }
  ]
  const filteredRouter = filterCurrent(asyncRouterMap, routerList)
  arrMap[0].children.push(...filteredRouter)
  return arrMap
}
/**
递归过滤异步路由表，返回符合用户角色权限的路由表
@param routes asyncRoutes
@param roles
**/
const state = {
  routes: [],
  currentRoutes: []
}

const mutations = {
  SET_ROUTES: (state, currentRoutes) => {
    state.currentRoutes = currentRoutes
    state.routes = routes.concat(currentRoutes)
  }
}

const actions = {
  async generateRoutes ({ commit }, role) {
    return new Promise((resolve) => {
      if (!['1', '2', '5', '6', '1000', '3', '8', '4', '7', '9'].includes(storage.getItem(constants.ROLE_CODE))) {
        haslimitRouter[0].component = Layout
        commit('SET_ROUTES', haslimitRouter)
        resolve(haslimitRouter)
      } else {
        // 判断是否为检定机构或使用单位
        let roleCode = ['1', '2', '3', '4', '5', '8', '9'].includes(storage.getItem(constants.ROLE_CODE))
        if (roleCode) {
          let orgid = ''
          // let payInfoCheckStatus = ''
          checkUserRealNameStatus().then(res => {
            if (res.code === constants.SUCCESS_CODE) {
              let status = res.data.checkStatus
              // let payInfoCheckStatus = res.data.payInfoCheckStatus
              // 已经实名认证
              if (res.data.id !== '1' && status === 2) {
                // if (payInfoCheckStatus === 2) {
                orgid = res.data.id
                if (orgid === constants.ZQ_PRIMARY) {
                  const roleList = role.filter((item, index) => item.title !== '主账号系统管理')
                  const currentFilterRouter = routerFilter(currentRouter, roleList)
                  commit('SET_ROUTES', currentFilterRouter)
                  resolve(currentFilterRouter)
                } else {
                  const roleList = role.filter((item, index) => item.title !== '章丘定制系统管理')
                  const currentFilterRouter = routerFilter(currentRouter, roleList)
                  commit('SET_ROUTES', currentFilterRouter)
                  resolve(currentFilterRouter)
                }
                // } else {
                //   if (storage.getItem(constants.ROLE_CODE) === constants.ENTERPRISE_CODE) {
                //     useEnterpriseControlRouter[0].component = Layout
                //     commit('SET_ROUTES', useEnterpriseControlRouter)
                //     resolve(useEnterpriseControlRouter)
                //   } else if (storage.getItem(constants.ROLE_CODE) === constants.CALIBRATION_CODE) {
                //     orgid = res.data.id
                //     if (orgid === constants.ZQ_PRIMARY) {
                //       hasRealNameOrgZQRouter[0].component = Layout
                //       commit('SET_ROUTES', hasRealNameOrgZQRouter)
                //       resolve(hasRealNameOrgZQRouter)
                //     } else {
                //       hasRealNameOrgRouter[0].component = Layout
                //       commit('SET_ROUTES', hasRealNameOrgRouter)
                //       resolve(hasRealNameOrgRouter)
                //     }
                //   } else if (storage.getItem(constants.ROLE_CODE) === '9') {
                //     const currentFilterRouter = routerFilter(currentRouter, role)
                //     commit('SET_ROUTES', currentFilterRouter)
                //     resolve(currentFilterRouter)
                //   } else if (['3', '8'].includes(storage.getItem(constants.ROLE_CODE))) {
                //     // 制造销售单位 制造商
                //     salesRouter[0].component = Layout
                //     commit('SET_ROUTES', salesRouter)
                //     resolve(salesRouter)
                //   } else if (storage.getItem(constants.ROLE_CODE) === '4') {
                //     salesRouters[0].component = Layout
                //     commit('SET_ROUTES', salesRouters)
                //     resolve(salesRouters)
                //   }
                // }
              } else {
                // 未进行实名认证只有首页和实名认证页面
                if (storage.getItem(constants.ROLE_CODE) === constants.ENTERPRISE_CODE) {
                  noRealNameRouter[0].component = Layout
                  commit('SET_ROUTES', noRealNameRouter)
                  resolve(noRealNameRouter)
                } else if (storage.getItem(constants.ROLE_CODE) === constants.CALIBRATION_CODE) {
                  // 检定机构去掉首页
                  noRealNameORrgRouter[0].component = Layout
                  commit('SET_ROUTES', noRealNameORrgRouter)
                  resolve(noRealNameORrgRouter)
                } else if (['3', '8', '4'].includes(storage.getItem(constants.ROLE_CODE))) {
                  // 制造销售单位 制造商
                  noSalesRouter[0].component = Layout
                  commit('SET_ROUTES', noSalesRouter)
                  resolve(noSalesRouter)
                }
                storage.setItem('status', 1)
              }
            }
          })
        } else {
          // 运营人员和系统管理员权限
          const currentFilterRouter = routerFilter(currentRouter, role)
          commit('SET_ROUTES', currentFilterRouter)
          resolve(currentFilterRouter)
        }
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
