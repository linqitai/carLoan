import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/Button'
import input from '@/components/input'
import previewImg from '@/components/previewImg'
import Lazyload from '@/components/Lazyload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/previewImg',
      name: 'previewImg',
      component: previewImg
    },
    {
      path: '/Lazyload',
      name: 'Lazyload',
      component: Lazyload
    }
  ]
})
