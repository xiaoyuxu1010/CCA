import axios from 'axios'
import router from '../router'
import urlConfig from '../config/url'

axios.interceptors.request.use((request) => {
  let accessToken = _.get(sessionStorage, 'accessToken')
  if (!accessToken && _.indexOf(urlConfig.whiteList, request.url) < 0) {
    router.replace({ name: 'OAuth' })
    return Promise.reject(new Error('API request denied.'))
  }

  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`
  }

  if (!_.isEqual(_.toUpper(request.method), 'GET')) {
    request.headers['Content-Type'] = 'application/json'
  }

  return request
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  if (response.status === 401) {
    _.remove(sessionStorage, 'accessToken')
    router.replace({ name: 'OAuth' })
  }
  return response
}, (error) => {
  return Promise.reject(error)
})

export default axios
