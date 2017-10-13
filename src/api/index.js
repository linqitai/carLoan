import http from './public'
let root = '/carLoan'
// let root = 'http://192.168.18.177:8030'
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
  return http.fetchPost(root + '/m/filter/cheCredit/queryCitylList.json', params)
}
// 车辆评估
export const queryCarPrice = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/queryCarPrice.json', params)
}
// 提交申请
export const submitApply = (params) => {
  return http.fetchPost(root + ' /m/filter/cheCredit/submitApply.json', params)
}
