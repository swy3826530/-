import axios from "axios";
//推荐使用es6promise实现
export default function request(options,success,error){
	// 1.创建axios实例
	return new Promise((resolve,reject)=>{
		const instance = axios.create({
			baseURL:"https://api-hmugo-web.itheima.net",
			timeout:5000,
			headers:{"Content-type":"application/x-www-form-urlencoded"}
		})
		// 配置请求拦截
		// 请求拦截配置
		
		
		
		instance(options).then(res=>{
			resolve(res)
		}).catch(err=>{
			reject(err)
		})
	})
}