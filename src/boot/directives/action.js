/**
 * v-action使用:
 */
import Vue from 'vue'
import store from '@/store'
const action = Vue.directive('action', {
  inserted: (el, binding, vnode) => {
    filterPermission(el, binding, vnode)
  }
})

function filterRouter (route) {
  var mapRoles = []
  if (route && route.length > 0) {
    for (var i = 0; i < route.length; i++) {
      if (route[i] && route[i].length > 0) {
      for (var j = 0; j < route[i].children.length; j++) {
        if (route[i].children && route[i].children[j].path === '/meter/manage/index') {
          mapRoles = route[i].children[j].permissions
        }
      }
    }
    }
  }

  return mapRoles
}
export const filterPermission = (el, binding, vnode) => {
  const permissionList = []
  var authList = (vnode.context.$route && vnode.context.$route.meta.permissions) || []
  if (vnode.context.$route.path === '/meter/statistics/index') {
    authList = authList.concat(filterRouter(store.state.menuInfo))
  }
  // if (vnode.context.$route)
  for (const auth of authList) {
    permissionList.push(auth)
  }
  if (!permissionList.length) {
    el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
    return
  }
  if (!permissionList.includes(binding.value)) {
    el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
  }
}
export default action
