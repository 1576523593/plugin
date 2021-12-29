import Account from '../views/SystemSetting/Account'
import AuthManage from '../views/SystemSetting/AuthManage'
/* eslint-disable import/no-duplicates */
import 'core-js/stable'
import 'babel-polyfill'
import Vue from 'vue'
import '../assets/styles/index.less'
import print from 'vue-print-nb'
import constants from '../utils/contants'
import { downloadFile, getUUID } from '../utils/index'
import VCharts from 'v-charts'
import VueMap from 'vue-amap'

Vue.use(print)
Vue.use(VCharts)
Vue.use(VueMap)

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, 'constants', { value: constants })
Object.defineProperty(Vue.prototype, 'downloadFile', { value: downloadFile })
Object.defineProperty(Vue.prototype, 'getUUID', { value: getUUID })
VueMap.initAMapApiLoader({
  key: 'd5bc1a77aeaeac5f1c9eec3100a47833',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.Marker',
    'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0.11'
})
// 组件集合，用于遍历
const components = [
    AuthManage,
    Account
]
// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    // 遍历注册全局组件
    components.map(component =>
        Vue.component(component.name, component)
    )
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    AuthManage,
    Account
}
