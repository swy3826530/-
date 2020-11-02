import * as types from "./mutation-types";
export default {
  	[types.CHANGEREG](state,payload){
       state.goodsdetails = payload;
		console.log(state.goodsdetails)
  	},
	[types.iscollect](state,payload){
	   state.goodsdetails = payload;
	}
}