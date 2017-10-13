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
