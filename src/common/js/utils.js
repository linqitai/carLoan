/*  说明：
 *  插件文件：utils.js
 *  作者：林祺泰  QQ：514917919
 * */

import {zcd} from '../../api/index'
import './app-api';

export const getFullDate = (t) => {
  var time = new Date(t);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  return y + '-' + (m < 10 ? '0' + m : m);
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

// 验证手机号码
export const checkPhone = (value) => {
  if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
    return true
  } else {
    return false
  }
}
// 验证身份证号
export const checkIdentity = (value) => {
  let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (reg.test(value)) {
    return true
  } else {
    return false
  }
}
// headAPP
export const headAPP = () => {

    if (jiexin.isIos()) {
    // alert(2)
    // jiexin.isShowRight = function () {
      let aa = {};
      aa.title = '';
      aa.imageUrl = 'https://qiniujiexino2opublic.51icare.cn/icon_help@3x.png';
      isShowRightButton(aa);
    // }
  }

  if (jiexin.isAndroid()) {
    // jiexin.isShowRight = function () {
    // alert(2)
      let aa = {};
      aa.code = 1;
      aa.title = '';
      aa.imageUrl = 'https://qiniujiexino2opublic.51icare.cn/icon_help@3x.png';
      // https://qiniujiexino2opublic.51icare.cn/icon_help@3x.png
      // console.log(JSON.stringify(aa))
      htmlToJava.handleEDunWebViewAction(JSON.stringify(aa));
    // }
  }

    jiexin.rightEvent = function () {
      jiexin.openWindow({
        url: document.location.protocol + '//' + window.location.host + zcd() + '/#/help',
        viewid: 'help',
        title: '帮助中心'
      })
    }
}
