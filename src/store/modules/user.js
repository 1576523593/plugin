import api from '@/api'
import storage from '@/utils/sessionStorage'
import constants from '@/utils/constants'
import Config from '@/config'
import { Message, Notification } from 'element-ui'
import { login, getRoleInfo, translateKey, checkUserRealNameStatus, ishasPayInfo, ishasPhone, ishasAssign, ishasBiddingPhone } from '@/api/login'
import Axios from 'axios'
const state = {
  userId: storage.getItem(constants.USER_ID_KEY),
  token: storage.getItem(constants.TOKEN_KEY),
  userInfo: storage.getItem(constants.USER_INFO_KEY),
  roleCode: storage.getItem(constants.ROLE_CODE)
}

const mutations = {
  SET_USER_ID: (state, userId) => {
    storage.setItem(constants.USER_ID_KEY, userId)
    state.userId = userId
  },
  SET_ROLE_CODE: (state, roleCode) => {
    storage.setItem(constants.ROLE_CODE, roleCode)
    state.roleCode = roleCode
  },
  SET_TOKEN: (state, token) => {
    storage.setItem(constants.TOKEN_KEY, token)
    state.token = token
  },
  SET_USER_INFO: (state, userInfo) => {
    storage.setItem(constants.USER_INFO_KEY, userInfo)
    state.userInfo = userInfo
  }
}

const actions = {
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        const { code, msg } = res
        if (constants.SUCCESS_CODE === code) {
          const token = res.data.token
          commit('SET_USER_ID', res.data.userCode)
          commit('SET_TOKEN', token)
          resolve(res)
        } else {
          reject(msg)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  getUserInfo ({ commit }, userCode) {
    return new Promise((resolve, reject) => {
      let userInfo = storage.getItem(constants.USER_INFO_KEY)
      if (userInfo) {
        commit('SET_USER_INFO', userInfo)
        resolve(userInfo)
      } else {
        let userId = state.userId ? state.userId : userCode.userCode
        getRoleInfo(userId).then(res => {
          if (constants.SUCCESS_CODE === res.code) {
            const role = res.data.routerList
            const roleCode = res.data.roleCode
            userInfo = role
            storage.setItem('phone', res.data.phone)
            commit('SET_ROLE_CODE', roleCode)
            commit('SET_USER_INFO', role)
          }
          resolve(userInfo)
        }).catch(error => {
          reject(error)
        })
      }
    })
  },
  translateKey ({ commit }) {
    return new Promise((resolve, reject) => {
      let params = {
        token: storage.getItem('token'),
        publicKey: constants.PUBLIC_KEY
      }
      translateKey(params).then(res => {
        if (constants.SUCCESS_CODE === res.code) {
          commit('SET_USER_ID', res.data.userCode)
          resolve(res.data.userCode)
        } else {
          resolve(res.data.userCode)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  setStatus ({ commit }) {
    return new Promise((resolve, reject) => {
      let orgid = ''
      let payInfoCheckStatus = ''
      checkUserRealNameStatus().then(res => {
        if (res.code === constants.SUCCESS_CODE) {
          let status = res.data.checkStatus
          // 已经实名认证
          if (res.data.id !== '1' && status === 2) {
            if (storage.getItem('roleCode') === '1') {
              Notification({
                title: '提示',
                duration: 10000,
                dangerouslyUseHTMLString: true,
                message: `
                <div>
                <span>您的账号已审核完成，点击“网站档案”完善相关信息后，您的机构信息会展示在检校云服务机构列表中显示。</span>
                <style>
                .current{
                width: 100%;height: 6px;background-color: #0aa0f5;position: absolute;left: 0;border-radius: 10px;
                animation: process 10s linear forwards ;
                }
                @keyframes process
                  {
                    0%{left: 0%;}
                    10%{left:10%;}
                    20%{left:20%;}
                    30%{left:30%;}
                    40%{left:40%;}
                    50%{left:50%;}
                    60%{left:60%;}
                    70%{left:70%;}
                    80%{left:80%;}
                    90%{left:90%;}
                    100%{left:100%;}
                  }
                  .Progress_container{
                  position: relative;
                  width: 280px;
                  margin-top: 8px;
                  overflow: hidden;
                  height: 6px;
                  border-radius: 10px;
                  }
                </style>
                <div
                class="Progress_container">
                <div class="current"></div>
                  </div>
                 </div>
                `
              })
            }
            orgid = res.data.id
            payInfoCheckStatus = res.data.payInfoCheckStatus
            // 判断是否有支付信息
            ishasPayInfo(res.data.id).then(PayInfo => {
              // 含有支付信息
              if (payInfoCheckStatus === 2) {
                // 判断是否有手机号码
                ishasBiddingPhone(orgid).then(hasPhone => {
                  if (hasPhone.code === constants.SUCCESS_CODE) {
                    // 有手机号码信息
                    // 是否有签约信息
                    ishasAssign(orgid).then(hasAssign => {
                      if (hasAssign.code === constants.SUCCESS_CODE) {
                        // 有签约信息
                        storage.removeItem('status')
                        resolve('')
                      } else {
                        storage.setItem('status', 4)
                        resolve(4)
                      }
                    })
                  } else {
                    // 无手机号码信息
                    storage.setItem('status', 3)
                    resolve(3)
                  }
                })
              } else {
                storage.setItem('status', 2)
                resolve(2)
              }
            })
          } else {
            storage.setItem('status', 1)
            resolve(1)
          }
        }
      })
    })
  },
  setUserId ({ commit }, userId) {
    commit('SET_USER_ID', userId)
  },
  updateUserInfo ({ commit }, role) {
    return new Promise((resolve, reject) => {
      commit('SET_USER_INFO', parseInt(role))
      //   http(api.getUserInfo()).then(res => {
      //     let { code, data } = res.data
      //     if (constants.SUCCESS_CODE === code) {
      //       userInfo = data
      //       commit('SET_USER_INFO', data)
      //     }
      //     resolve(userInfo)
      //   }).catch(error => {
      //     reject(error)
      //   })
    })
  },
  resetToken ({ commit }, token) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', token)
      resolve(true)
    })
  },

  // user logout
  logout ({ rootState, commit }, isNormal) {
    return new Promise((resolve) => {
      // 用户信息为空，则不进行重复操作
      if (rootState.user.userId === null) {
        // 此处防止同时多个请求，因token失效，全部被拦截并掉用此方法，执行多次重复操作及提示。
        return resolve()
      }
      // 移除用户信息
      commit('SET_USER_ID', null)
      commit('SET_TOKEN', null)
      commit('SET_USER_INFO', null)
      commit('SET_ROLE_CODE', null)
      sessionStorage.clear()
      // 提示信息展示时间
      let tipsShowTime = 1500
      // 退出后跳转到的页面
      let url = ''
      // 判断是不是非正常退出
      if (isNormal) {
        switch (process.env.NODE_ENV) {
          case 'development':
            url = Config.websiteLoginUrl.dev
            break
          case 'staging':
            url = Config.websiteLoginUrl.staging
            break
          case 'production':
            url = Config.websiteLoginUrl.pro
            break
        }
        // Message.error({
        //   message: '系统检测到您长时间未操作或已在其他地点登录，请重新登录。',
        //   duration: tipsShowTime
        // })
      } else {
        switch (process.env.NODE_ENV) {
          case 'development':
            url = Config.websiteHomepage.dev
            break
          case 'staging':
            url = Config.websiteHomepage.staging
            break
          case 'production':
            url = Config.websiteHomepage.pro
            break
        }
        Message.success({
          message: '退出成功',
          duration: tipsShowTime
        })
      }
      // 此处必须刷新，因vue router 目前未提供清空路由的功能，只能通过刷新页面确保新登录的用户路由配置正确。
      setTimeout(() => {
        location.href = '/'
      }, (tipsShowTime + 500))
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
