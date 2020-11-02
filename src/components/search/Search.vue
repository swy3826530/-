<template>
	<div class="search">
		<NavTop :title="title"></NavTop>
		<van-search v-model="value" @keydown="goodsSearch" placeholder="请输入搜索关键词" shape="round" />
		<div>
			<ul>
				<li class="resultList" @click="jumpGoods(item.goods_id)" v-for="(item,index) in this.result">{{item.goods_name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import NavTop from "../navigation/NavTop.vue"
	import {CHANGEREG} from "../../store/modules/mutation-types.js"
	export default{
		name:"Search",
		data(){
			return{
				value:"",
				title:"搜索中心",
				result:[]
			}
		},
		methods:{
			goodsSearch(){
				this.$request.goodslist(this.value).then(res=>{
					this.result=res.data.message.goods
					console.log(this.result)
				})
			},
			jumpGoods(id){
				console.log(id)
				this.$request.goodsdetails(id).then(res=>{
					// this.goodsdetaild = res.data.message
					this.$store.commit(CHANGEREG,res.data.message)
				})
				this.$router.push({
					path:"/details"
				},function(){
					
				},function(){
					
				})
			}
		},
		components:{
			NavTop
		}
	}
</script>

<style>
	.search{
		margin-top: 46px;
	}
	.resultList{
		font-size:.3rem;
		border-bottom: 1px solid #000000;
		height: .3rem;
		overflow:hidden;
		text-align: left;
		padding: .15rem;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		line-clamp: 1;
		-webkit-box-orient: vertical;
	}
</style>
