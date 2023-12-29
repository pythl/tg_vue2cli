import axios from '../axios'
import Qs from 'qs'

/**
 * 登录
 * @param {*} data
 */
 export const oauthToken = data => {
  return axios({
    url: '/auth/oauth/token',
    method: 'post',
    data: Qs.stringify(data),
    headers: {
      isToken: false,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 发送重置密码的验证码
 * @param {*} data
 */
 export const forgotPwdSms = data => {
  return axios({
    url: '/auth/forgot_pwd_sms',
    method: 'post',
    data: Qs.stringify(data),
    headers: {
      isToken: false,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 重置密码
 * @param {*} data
 */
 export const forgotPwd = data => {
  return axios({
    url: '/auth/forgot_pwd',
    method: 'post',
    data: Qs.stringify(data),
    headers: {
      isToken: false,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

/**
 * 机构后台的配置信息
 * @param {*} data
 */
 export const agencySetting = data => {
  return axios({
    url: '/agency/agencySetting/getSetting/' + data.agencyId,
    method: 'get'
  })
}