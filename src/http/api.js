/**
 * 接口统一集成模块
 */
const requireComponent = require.context('./modules', false, /\.js$/) 
const modules = {}
requireComponent.keys().forEach(key => {
  const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, '$2')
  const value = requireComponent(key)
  // 兼容ts
  modules[moduleName] = value
})

// 默认全部导出
export default modules
