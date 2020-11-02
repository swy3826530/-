import Vue from 'vue'
import Vuex from 'vuex'
import * as types from "./modules/mutation-types";
import modulesA  from "./modules/moduleA";
import modulesB  from "./modules/moduleB";
import mutations from "./modules/mutations";
import actions from "./modules/actions";
import getters from "./modules/getters";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  goodsdetails:{},
	  iscollect:false
  },
  mutations,
  actions,
  getters,
  modules: {
  	modelea:modulesA,
  	modeleb:modulesB
  }
})
