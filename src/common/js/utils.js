/*  说明：
 *  插件文件：utils.js
 *  作者：林祺泰  QQ：514917919
 * */
export const getFullDate = (t) => {
  var time = new Date(t);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  // var d = time.getDate();
  // return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
  return y + '-' + (m < 10 ? '0' + m : m);
}
// 验证手机号码
export const checkPhone = (value) => {
  if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
    return true
  } else {
    return false
  }
}
// 判断参数中是否存在空值
export const isObjectHaveNull = (params) => {
  var isNull = false
  for (let key in params) {
    if (params[key] === '') {
      isNull = true
    }
  }
  return isNull
}
