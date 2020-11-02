import * as types from "./mutation-types";
export default {
  state: {
  	 numA:1
  },
  mutations: {
  	[types.INCREMENT](state){
  		console.log("-------");
  		state.numA++;
  	}
  },
  actions: {
  	[types.INCREMENT]({state,commit,rootState}){
  		console.log(rootState.modeleb.numB);
  		commit(types.INCREMENT);
  	}
  },
  getters:{
      changNum(state){
      	return state.numA*2;
      }
  }
}