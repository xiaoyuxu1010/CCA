// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import i18n from './i18n'
import injection from './injections'

import './icons' // icon

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium',
  zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  created () {
    console.log('main created')

    injection.init()
    _initStorageListener()
  },
  mounted () {
    console.log('main mounted:')
  }
})

/* share sessionStorage between mulitple browser tabs */
function _initStorageListener () {
  if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', Date.now())
  }

  window.addEventListener('storage', function (event) {
    if (event.key === 'getSessionStorage') {
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage))
      localStorage.removeItem('sessionStorage')
    } else if (event.key === 'sessionStorage' && !sessionStorage.length) {
      var data = JSON.parse(event.newValue)
      for (var key in data) {
        sessionStorage.setItem(key, data[key])
      }
    }
  })
}
