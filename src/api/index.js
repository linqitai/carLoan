import http from './public'
let root = '/rz'
let zed = '/zed'
// let root = 'http://192.168.18.177:8030'
// 用户进入页面后保存数据
export const visit = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/visit.json', params)
}
// 车辆品牌列表
export const queryForBrankList = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/queryForBrankList.json', params)
}
// 车系列表
export const queryForSeriesList = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/querySeriesList.json', params)
}
// 车型列表
export const queryModelList = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/queryModelList.json', params)
}
// 城市列表
export const queryCitylList = (params) => {
  return http.fetchPostPrimary(root + '/m/filter/cheCredit/queryCitylList.json', params)
}
// 车辆评估
export const queryCarPrice = (params) => {
  return http.fetchPostPrimary(root + '/m/filter/cheCredit/queryCarPrice.json', params)
}
// 修改申请状态
export const editApplyStatus = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/editApplyStatus.json', params)
}
// 提交申请
export const submitApply = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/submitApply.json', params)
}
// 提交申请
export const dataCache = (params) => {
  return http.fetchPostPrimary(root + '/m/filter/cheCredit/dataCache.json', params)
}
// 手机号是否注册
export const phoneISRegistered = (params) => {
  return http.fetchPostPrimary(zed + '/account/accountManager/queryAccountByPhone.do', params)
}
// 手机号注册
export const phoneRegistered = (params) => {
  return http.fetchPostPrimary(zed + '/account/accountManager/createAccount.json', params)
}
// 查询验证码
export const queryCode = (params) => {
  return http.fetchPostPrimary(zed + '/account/accountManager/getCodeUrl.json', params)
}
// 登录臻e盾
export const loginZed = (params) => {
  return http.fetchPostPrimary(zed + '/account/accountManager/loginNew.json', params)
}
// 判断是否登录（使用查询店铺接口）
export const searchShop = (params) => {
  return http.fetchPostPrimary(zed + '/customer/deviceManage/queryShopDetails.do', params)
}