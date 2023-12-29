// axios 默认配置，包含基础路径等信息
export default {
  method: 'get',
  // URL 前缀
  baseURL: process.env.VUE_APP_MODEL_BASE_URL,
  // baseURL: 'https://match.matchn.cn/match-api',
  // 图片上传地址
  // baseImgURL: process.env.VUE_APP_MODEL_BASE_URL + '/match/file/upload',
  baseImgURL: 'https://match.matchn.cn/match-api/match/file/upload',
  // header信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回数据类型
  responseType: 'json',
}
