import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'
import carEvaluate from '@/pages/car/carEvaluate'
import applyBM from '@/pages/car/applyBM'
import offlineManage from '@/pages/car/offlineManage'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)
const router = new Router({
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
      }]
    }
  ]
})

export default router