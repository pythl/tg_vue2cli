export default {
  formatDate (value, isTime) {
    var date
    if (value instanceof Date) {
      date = value
    } else if (value instanceof Object) {
      date = value._d
    } else {
      var arr = value.split(/[- : /]/)
      if (value.indexOf(':') > -1) {
        date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5])
      } else {
        date = new Date(arr[0], arr[1] - 1, arr[2])
      }
    }
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    if (!isTime) {
      return Y + M + D
    }
    var h = ' ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
  },
  randomNumFile (name, url) {
    var randomNum = Math.floor(Math.random() * 100000)
    var file = {
      uid: randomNum + '',
      name: name,
      status: 'done',
      url: url,
      response: { data: { url: url } },
    }
    return file
  },
  phoneFun (phones) {
    var myreg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/
    if (!myreg.test(phones)) {
      console.log('手机号格式不正确')
      return false
    } else {
      console.log('手机号格式正确')
      return true
    }
  },
  emailFun (email) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
    return reg.test(email)
  },
}
