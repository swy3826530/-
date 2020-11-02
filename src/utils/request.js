import request from "../assets/network.js"
// 轮播图
function slideshow(){
	return request({
		url:"/api/public/v1/home/swiperdata"
	})
}
//导航图
function navigation(){
	return request({
		url:"/api/public/v1/home/catitems"
	})
}
//楼层
function floor(){
	return request({
		url:"/api/public/v1/home/floordata"
	})
}
//商品详情
function goodsdetails(id){
	return request({
		url:"/api/public/v1/goods/detail?goods_id="+id
	})
}
//商品分类
function classify(){
	return request({
		url:"/api/public/v1/categories"
	})
}
//商品列表
function goodslist(query){
	return request({
		url:"/api/public/v1/goods/search?query="+query
	})
}
//商品搜索
function goodsSearch(query){
	return request({
		url:"/api/public/v1/goods/qsearch="+query
	})
}

export default{
slideshow,
navigation,
floor,
goodsdetails,
classify,
goodslist,
goodsSearch
}