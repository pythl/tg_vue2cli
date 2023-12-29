import axios from '../axios'

// 获取七牛上传的token
export const getUpToken = () => {
  return axios({
    url: 'https://match.matchn.cn/match-api/match/file/getUpToken',
    method: 'get'
  })
}

export const matchDetail = (id) => {
  return axios({
    url: '/match/matchList/detail/' + id,
    method: 'get'
  })
}
