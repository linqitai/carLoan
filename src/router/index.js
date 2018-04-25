import Vue from 'vue'
import Router from 'vue-router'

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
      component: resolve => require(['@/pages/car/carEvaluate'], resolve)
    }, {
      path: '/carEvaluate',
      component: resolve => require(['@/pages/car/carEvaluate'], resolve)
    }, {
      path: '/applyBM',
      component: resolve => require(['@/pages/car/applyBM'], resolve)
    }, {
      path: '/offlineManage',
      component: resolve => require(['@/pages/car/offlineManage'], resolve)
    }, {
      path: '/help',
      component: resolve => require(['@/pages/car/help'], resolve)
    }, {
      path: '/selectBrand',
      component: resolve => require(['@/pages/car/selectCarType/selectBrand'], resolve)
    }, {
      path: '/selectSeries',
      component: resolve => require(['@/pages/car/selectCarType/selectSeries'], resolve)
    }, {
      path: '/selectCarType',
      component: resolve => require(['@/pages/car/selectCarType/selectCarType'], resolve)
    }
    // {
    //   path: '/',
    //   name: 'PageTransition',
    //   component: resolve => require(['@/components/PageTransition'], resolve),
    //   children: [{
    //     path: '',
    //     component: resolve => require(['@/pages/car/carEvaluate'], resolve)
    //   }, {
    //     path: '/carEvaluate',
    //     component: resolve => require(['@/pages/car/carEvaluate'], resolve)
    //   }, {
    //     path: '/applyBM',
    //     component: resolve => require(['@/pages/car/applyBM'], resolve)
    //   }, {
    //     path: '/offlineManage',
    //     component: resolve => require(['@/pages/car/offlineManage'], resolve)
    //   }, {
    //     path: '/help',
    //     component: resolve => require(['@/pages/car/help'], resolve)
    //   }, {
    //     path: '/selectBrand',
    //     component: resolve => require(['@/pages/car/selectCarType/selectBrand'], resolve)
    //   }, {
    //     path: '/selectSeries',
    //     component: resolve => require(['@/pages/car/selectCarType/selectSeries'], resolve)
    //   }, {
    //     path: '/selectCarType',
    //     component: resolve => require(['@/pages/car/selectCarType/selectCarType'], resolve)
    //   }]
    // }
  ]
})

export default router