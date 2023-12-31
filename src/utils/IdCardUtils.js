/**  身份证校验工具 */
/**
 * 身份证15位编码规则：dddddd yymmdd xx p
 * dddddd：地区码
 * yymmdd: 出生年月日
 * xx: 顺序类编码，无法确定
 * p: 性别，奇数为男，偶数为女
 * <p />
 * 身份证18位编码规则：dddddd yyyymmdd xxx y
 * dddddd：地区码
 * yyyymmdd: 出生年月日
 * xxx:顺序类编码，无法确定，奇数为男，偶数为女
 * y: 校验码，该位数值可通过前17位计算获得
 * <p />
 * 18位号码加权因子为(从右到左) wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,1 ]
 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ]
 * 校验位计算公式：Y_P = mod( ∑(Ai×wi),11 )
 * i为身份证号码从右往左数的 2...18 位; Y_P为校验码所在校验码数组位置
 *
 */
// 加权因子
const wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
// 身份证验证位值.10代表X
const valideCodeArr = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]
// 区域ID
const areaMap = {11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外'}
// 错误信息
// const status = new Array("true", "身份证号码位数不对!", "身份证号码出生日期超出范围或含有非法字符!", "身份证号码校验错误!", "身份证地区非法!")

/**
 * 校验身份证是否合法
 * @param {*} idCard  身份证号码
 */
export function checkIdCard (idCard) {
  // 去掉首尾空格
  idCard = trim(idCard.replace(/ /g, ''))
  if (idCard.length === 15 || idCard.length === 18) {
    if (!checkArea(idCard)) {
      console.log(1)
      return false
    } else if (!checkBrith(idCard)) {
      console.log(2)
      return false
    } else if (idCard.length === 18 && !check18Code(idCard)) {
      console.log(3)
      return false
    } else {
      return true
    }
  } else {
    // 不是15或者18，位数不对
    return false
  }
}

/**
 * 从身份证中解析出区域信息
 * @param {*} idCard
 */
export function getArea (idCard) {
  return areaMap[parseInt(idCard.sustr(0, 2))]
}

/**
 * 从身份证中解析出性别信息
 * @param {*} idCard
 */
export function getSex (idCard) {
  if (idCard.length === 15) {
    return idCard.substring(14, 15) % 2 === 0 ? 2 : 1
  } else {
    return idCard.substring(14, 17) % 2 === 0 ? 2 : 1
  }
}

/**
 * 从身份证中解析出生日
 * @param {*} idCard "yyyy-mm-dd"
 */
export function getBirthday (idCard) {
  var birthdayStr
  if (idCard.length === 15) {
    birthdayStr = idCard.charAt(6) + idCard.charAt(7)
    if (parseInt(birthdayStr) < 10) {
      birthdayStr = '20' + birthdayStr
    } else {
      birthdayStr = '19' + birthdayStr
    }
    birthdayStr = birthdayStr + '-' + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11)
  } else if (idCard.length === 18) {
    birthdayStr = idCard.charAt(6) + idCard.charAt(7) + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11) + '-' + idCard.charAt(12) + idCard.charAt(13)
  }
  return birthdayStr
}

// 去掉字符串头尾空格
function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}

/**
 * 验证身份证的地区码
 * @param {Object} idCard 身份证字符串
 */
function checkArea (idCard) {
  if (areaMap[parseInt(idCard.substr(0, 2))] == null) {
    return false
  } else {
    return true
  }
}

/**
 * 验证身份证号码中的生日是否是有效生日
 * @param idCard 身份证字符串
 * @return
 */
function checkBrith (idCard) {
  var result = true
  if (idCard.length === 15) {
    var year = idCard.substring(6, 8)
    var month = idCard.substring(8, 10)
    var day = idCard.substring(10, 12)
    let tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (tempDate.getYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
      result = false
    }
  } else if (idCard.length === 18) {
    let year = idCard.substring(6, 10)
    let month = idCard.substring(10, 12)
    let day = idCard.substring(12, 14)
    var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (tempDate.getFullYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
      result = false
    }
  } else {
    result = false
  }
  return result
}

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param idCardArr 身份证号码数组
 * @return
 */
function check18Code (idCardStr) {
  var idCardArr = idCardStr.split('')
  var sum = 0 // 声明加权求和变量
  if (idCardArr[17].toLowerCase() === 'x') {
    idCardArr[17] = 10// 将最后位为x的验证码替换为10方便后续操作
  }
  for (var i = 0; i < 17; i++) {
    sum += wi[i] * idCardArr[i]// 加权求和
  }
  var valCodePosition = sum % 11// 得到验证码所位置
  console.log(idCardArr[17])
  console.log(valideCodeArr[valCodePosition])
  if (Number(idCardArr[17]) === Number(valideCodeArr[valCodePosition])) {
    return true
  } else {
    return false
  }
}
