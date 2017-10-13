import Vue from 'vue'
import Router from 'vue-router'
import carEvaluate from '@/pages/car/carEvaluate'
import applyBM from '@/pages/car/applyBM'
import offlineManage from '@/pages/car/offlineManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'carEvaluate',
      component: carEvaluate
    },
    {
      path: '/applyBM',
      name: 'applyBM',
      component: applyBM
    },
    {
      path: '/offlineManage',
      name: 'offlineManage',
      component: offlineManage
    }
  ]
})
