/* eslint-disable import/no-duplicates */
import 'core-js/stable'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import plugin from 'sl-test1111'
import Initializer from '@/boot'
import './permission'
import '@/assets/styles/index.less'
import print from 'vue-print-nb'
import constants from './utils/contants'
import { downloadFile, getUUID } from './utils/index'
import VCharts from 'v-charts'
import VueMap from 'vue-amap'
import plugin1 from 'sl-test1111'

Vue.use(print)
Vue.use(VCharts)
Vue.use(VueMap)
Vue.use(plugin1[0])
Vue.use(plugin1[1])

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
new Vue({
  router,
  store,
  created: Initializer,
  render: h => h(App)
}).$mount('#app')
