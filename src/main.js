// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'vant/lib/vant-css/index.css';
import fastclick from 'fastclick'
import './common/scss/common.scss';
// @import '../../common/scss/common.scss';
fastclick.attach(document.body)

Vue.use(Vant);
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
