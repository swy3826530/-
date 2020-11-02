<template>
	<div class="details">
		<NavTop :title="title"></NavTop>
		<div class="lunbo">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="(item,index) in details.pics">
					<img :src="item.pics_big_url">
				</van-swipe-item>
			</van-swipe>
		</div>
		
		<van-goods-action style="width: 100%;">
		  <van-goods-action-icon icon="chat-o" text="客服" dot />
		  <van-goods-action-icon icon="cart-o" @click="jumpcart" text="购物车" :badge="lit.length" />
		  <van-goods-action-icon icon="shop-o" text="店铺" badge="" />
		  <van-goods-action-button @click="addCart" type="warning" text="加入购物车" />
		  <van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		<h6 class="price">￥ {{details.goods_price}}</h6>
		<div class="goods_description">
			<p class="goods_title">{{details.goods_name}}</p>
			<div class="collect" >
				<p>
					<van-icon @click="collect($event)" size="25px" name="star-o"/>收藏
				</p>
			</div>
		</div>
		<hr style="margin:0;height:.1rem;background-color: #E8E8E8;">
		<div class="fenge">图文详情</div>
		<ul>
			<li v-html="details.goods_introduce"></li>
		</ul>
	</div>
</template>

<script>
	import NavTop from "components/navigation/NavTop.vue"
	import {iscollect} from '../../store/modules/mutation-types.js'
	export default{
		name:"Details",
		data(){
			return{
				title:"商品详情",
				lit:[]
			}
		},
		computed:{
			details:function(){
				// console.log(this.$store.state.goodsdetails)
				return this.$store.state.goodsdetails
			}
		},
		methods: {
			collect(e){
				this.$store.state.iscollect=!this.$store.state.iscollect
				if(this.$store.state.iscollect){
					e.target.className= "van-icon van-icon-star"
					e.target.style.color = "red"
				}else{
					e.target.className= "van-icon van-icon-star-o"
					e.target.style.color = ""
				}
			},
			jumpcart(){
				this.$router.push({
					path:"/shoppingcart"
				},function(){
					
				},function(){
					
				})
			},
			addCart(){
				  let lodatas = this.$store.state.goodsdetails
				// console.log(this.lit)
				let arr ={
					goods_name:lodatas.goods_name,
					goods_id:lodatas.goods_id,
					goods_small_logo:lodatas.goods_small_logo,
					goods_price:lodatas.goods_price,
					num:1,
					isChecked:true
				}
				if(this.$local.getLocal("goods")){
					console.log("已经有goods了")
					//有内容
					let rel = true;
					this.lit=this.$local.getLocal("goods")
					this.lit.map(item=>{
						if(item.goods_id == arr.goods_id){
							item.num++;
							rel =false
							// console.log(this.lit)
							console.log("goods中商品数量重复,num+1")
						}
					})
					console.log(rel)
					if(rel){
						this.lit.push(arr)
					}
					
					this.$local.setLocal("goods",this.lit)
				}else{
					// this.lit=[];
					console.log("goods第一次写入")
					this.lit.push(arr);
					this.$local.setLocal("goods",this.lit)
				}
				
			}
		},
		components:{
			NavTop
		}
	}
</script>

<style>
	.details{
		width: 100%;
		overflow: hidden;
	}
	.lunbo{
		margin-top: .92rem;
		width: 7.5rem;height: 6rem;
	}
	.my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: .4rem;
		height: 6rem;
	    text-align: center;
	    background-color: #39a9ed;
	  }
	  .van-swipe-item img{
		  height: 100%;
		  width: 100%;
	  }
	  .goods_description{
		  border-top: 1px solid #969799;
		  display: flex;
		  font-size:.3rem;
		  padding: .1rem;
	  }
	  .goods_title{
		  font-size:.3rem;
		  font-weight: 500;
	  }
	  .collect{
		  border-left: .02rem solid;
		  padding-left: .12rem;
	  }
	  .collect p{
		  width: .62rem;
		  height:1rem;
	  }
	  .price{
		margin: 0;
		font-size:.3rem;
		color: red;
		padding: 2%;
	  }
	  .fenge{
		  font-size: .3rem;
		  color: red;
		  padding: 2%;
	  }
</style>
