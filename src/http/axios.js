// 二次封装的axios模块，包含拦截器等信息
import axios from 'axios'
import config from './config'
import router from '@/router'
import notification from 'ant-design-vue/es/notification'
import { oauthToken } from '@/http/modules/user'
// 使用vuex
import store from '@/store'
window.isRefreshing = false
// 被挂起的请求数组
var refreshSubscribers = []

// push所有请求到数组中
function subscribeTokenRefresh (cb) {
  refreshSubscribers.push(cb)
}

// 刷新请求(refreshSubscribers数组中的请求得到新的token之后会自执行，用新的token去请求数据)
function onRrefreshed (token) {
  refreshSubscribers.map(cb => cb(token))
}
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: config.headers,
      transformResponse: [() => {}]
    })
    // request 拦截器
    instance.interceptors.request.use(
      config => {
        const isToken = (config.headers || {}).isToken === false
        // 存储的时间戳
        let timeStamp = store.getters['user/timeStamp']
        // 剩余的秒数
        let expiresIn = store.getters['user/expiresIn']
        let accessToken = store.getters['user/accessToken']
        let refreshToken = store.getters['user/refreshToken']
        if (!isToken) {
          // 带上token验证，如果token是在未到期的30s内
          if ((Date.parse(new Date()) - timeStamp) / 1000 < expiresIn - 5) {
            config.headers.Authorization =  'Bearer ' + accessToken
          } else {
            // 判断是否正在刷新
            if (!window.isRefreshing) {
              // 将刷新token的标志置为true*/
              window.isRefreshing = true
              oauthToken({grant_type: "refresh_token",client_secret: "123456",client_id: "app",refresh_token: refreshToken}).then(res => {
                // 将标志置为false
                window.isRefreshing = false
                if (res.status > 0) {
                  store.commit('user/USER_CHANGE_ACCESS_TOKEN', '')
                  store.commit('user/USER_CHANGE_AUTH_MENU_TREE', [])
                  store.commit('user/USER_CHANGE_REFRESH_TOKEN', '')
                  store.commit('user/USER_CHANGE_EXPIRES_IN', '')
                  // 记录一个当前时间戳
                  store.commit('user/USER_CHANGE_TIME_STAMP', 0)
                  // 重定向到登录界面
                  router.push('/User/Login')
                } else {
                  store.commit('user/USER_CHANGE_ACCESS_TOKEN', res.data.access_token)
                  store.commit('user/USER_CHANGE_REFRESH_TOKEN', res.data.refresh_token)
                  store.commit('user/USER_CHANGE_EXPIRES_IN', res.data.expires_in)
                  // 记录一个当前时间戳
                  store.commit('user/USER_CHANGE_TIME_STAMP', Date.parse(new Date()))
                  // 执行数组里的函数,重新发起被挂起的请求
                  onRrefreshed(res.data.access_token)
                  // 执行onRefreshed函数后清空数组中保存的请求
                  refreshSubscribers = []
                }
              })
            }
            // 把请求(token)=>{....}都push到一个数组中
            const retry = new Promise((resolve, reject) => {
              console.log(reject)
              // (token) => {...}这个函数就是回调函数
              subscribeTokenRefresh((token) => {
                console.log('挂起请求')
                config.headers.Authorization = 'Bearer ' + token
                // 将请求挂起
                resolve(config)
              })
            })
            return retry
          }
        }
        return config
      },
      // 请求错误时
      error => {
        console.log('request error:', error)
        // 1.判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('请求超时')
        }
        // 2.需要重定向到错误页面
        const errorInfo = error.response
        if (errorInfo) {
          error = errorInfo.data // 页面那边catch的时候就能拿到详细的错误信息，看最下边的Promise.reject
          const errorStatus = errorInfo.status // 404 403 500...
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error)  // 在调用的通过catch可以拿到错误信息
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        if (response.config.responseType !== 'blob') {
          let data
          // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
          if (response.data === undefined) {
            data = JSON.parse(response.request.responseText)
          } else {
            data = response.data
          }
          return data
        } else {
          return response.request.response
        }
        
      },
      err => {
        if (err && err.response) {
          err.message = '请求错误'
        }
        notification.error({
          message: '提示',
          description: err.message
        })
        if (err.response.status === 302 || err.response.status === 303 || err.response.status === 304) {
          // token 验证未通过，删除cookie中的token和sessionStorage中的用户信息
          router.push('/User/Login')
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}