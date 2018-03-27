// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/**
 * Env settings
 */
import 'babel-polyfill'
import 'es6-promise/auto'

/**
 * Vue and vue packages
 */
import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './store/'
import PluginStorageLocal from './plugins/storage-local'
import PluginStorageSession from './plugins/storage-session'

/**
 * Styles
 */
import 'normalize.css'
import './styles/index.scss'

/**
 * Load vue plugins
 */
// this.$ls
Vue.use(PluginStorageLocal)
// this.$ss
Vue.use(PluginStorageSession)

/**
 * Load mock when development env
 */
if (process.env.NODE_ENV === 'development') require('./mock/')

/**
 * Vue config
 */
Vue.config.productionTip = false

/**
 * Vue root
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
