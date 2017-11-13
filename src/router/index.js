import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import carEvaluate from '@/pages/car/carEvaluate'
import applyBM from '@/pages/car/applyBM'
import offlineManage from '@/pages/car/offlineManage'
import help from '@/pages/car/help'
// 选择车型
import selectBrand from '@/pages/car/selectCarType/selectBrand'
import selectSeries from '@/pages/car/selectCarType/selectSeries'
import selectCarType from '@/pages/car/selectCarType/selectCarType'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '',
        component: carEvaluate
      }, {
        path: '/carEvaluate',
        component: carEvaluate
      }, {
        path: '/applyBM',
        component: applyBM
      }, {
        path: '/offlineManage',
        component: offlineManage
      }, {
        path: '/help',
        component: help
      }, {
        path: '/selectBrand',
        component: selectBrand
      }, {
        path: '/selectSeries',
        component: selectSeries
      }, {
        path: '/selectCarType',
        component: selectCarType
      }]
    }
  ]
})

export default router