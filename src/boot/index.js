/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import store from '@/store'
import VueStorage from 'vue-ls'
import config from '@/config/localstorage.config'
import './libs/lazy_components'
import action from './directives/action'
Vue.use(VueStorage, config.storageOptions, action)

export default function Initializer () {
  store.commit('SET_TOKEN', Vue.ls.get('ACCESS_TOKEN'))
}
