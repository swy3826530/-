import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import flexible from "./utils/reset.js"

import local from './utils/storage1.js';
Vue.prototype.$local = local;

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 数据请求
import request from './utils/request.js';
Vue.prototype.$request = request;

Vue.filter("glprice",(price)=>{
	return '￥'+price.toFixed(2)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
