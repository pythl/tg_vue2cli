// 将axios封装成插件，按插件方式引入
// 导入所有接口
import apis from './api.js'

const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true
  // 导入请求接口
  Object.defineProperties(Vue.prototype, {
    // 注意：此处挂载在Vue的原型的 $api 对象上
    $api: {
      get () {
        return apis
      }
    }
  })
}
export default install
