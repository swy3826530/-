/* utils.js提供项目的工具函数 判断手机号是否正确
	checkPhone
*/
function checkPhone(phone){
	if( !(/^1[3456789]\d{9}$/.test(phone) ) ){
		return false
	}else{
		return true
	}
}

export default {
	checkPhone
}