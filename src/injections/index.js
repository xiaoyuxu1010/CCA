import Vue from 'vue'
import _ from 'lodash'
import http from './http'

var init = function () {
  Object.defineProperty(Vue.prototype, '_', { value: _ })
  Object.defineProperty(Vue.prototype, '$http', { value: http })
}

export default {
  init
}
