<template>
	<div class="goodslist">
		<NavTop style="z-index:999;" :title="title"></NavTop>
		<van-search style="margin-top: 46px;" class="sear" @click="jumpSear" placeholder="请输入搜索关键词" shape="round" />
		<van-tabs v-model="active">
			<van-tab title="综合">
				<van-list
				  v-model="loading"
				  :finished="finished"
				  finished-text="没有更多了"
				  @load="onLoad"
				>
					<div  class="goodsdatawarp" @click="jumpgoods(item.goods_id)" v-for="(item,index) in goodsdata">
						<div class="goodsDataPic">
							<img v-if="!item.goods_small_logo" src="http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg">
							<img v-else :src="item.goods_small_logo">
						</div>
						<div class="goodsrightdata">
							<p>{{item.goods_name}}</p>
							<br>
							<span style="color: red;">￥ {{item.goods_price}}</span>
						</div>
					</div>
				</van-list>
			</van-tab>
			<van-tab title="销量">暂无数据</van-tab>
			<van-tab title="价格">暂无数据</van-tab>
		</van-tabs>
		
	</div>
</template>

<script>
	import {CHANGEREG} from "../../store/modules/mutation-types.js"
	import {EventBus} from "utils/event-bus.js"
	import NavTop from "../navigation/NavTop.vue"
	export default{
		name:"GoodsList",
		data(){
			return{
				title:"商品列表",
				active:0,
				query:"",
				goodsdata:"",
				loading: false,
				finished: false,
			}
		},
		components:{
			NavTop
		},
		created() {
			this.query=this.$route.query.querys;
			this.$request.goodslist(this.query).then(res=>{
				this.goodsdata=[...res.data.message.goods]
				// console.log(this.goodsdata)
			})
		},
		methods: {
		    onLoad() {
		      // 异步更新数据
			  this.finished = true
		    },
			jumpgoods(id){
				// console.log(id)
				this.$request.goodsdetails(id).then(res=>{
					// this.goodsdetaild = res.data.message
					this.$store.commit(CHANGEREG,res.data.message)
				})
				this.$router.push({
					path:"/details"
				},function(){
					
				},function(){
					
				})
			},
			jumpSear(){
				this.$router.push("search")
			}
		}
	}
</script>

<style>

	.goodslist{
		height: 100%;
	}
	.van-tabs__line{
		width: 2.5rem;
		height: .02rem;
	}
	.van-tab--active{
		color: red;
	}
	.van-cell{
		line-height: 15px;
	}
	.van-search__content--round{
		border-radius: 7px;
	}
	.goodsdatawarp{
		height: 100px;
		font-size: .3rem;
		display: flex;
	}

	.goodsdatawarp .goodsDataPic{
		padding: 3%;
		width: 30%;
		box-sizing: border-box;
	}
	.goodsdatawarp .goodsDataPic img{
		width: 100%;
		display: inline-block;
	}
	.van-tab__pane{
		margin-bottom: 1rem;
	}
	.goodsrightdata{
		display: inline-block;
		font-size: 0.3rem;
		width: 67%;
		padding: 3%;
		box-sizing: border-box;
	}
	.goodsrightdata p {
		overflow: hidden;
		text-overflow: ellipsis;/*当对象文本溢出时显示省略标记（...）*/
		display:-webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
