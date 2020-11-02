<!-- 轮播图 -->
<template>
	<div>
		<van-swipe :height="200" class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item,index) in slideImg">
				<img @click="btngoods(item.goods_id)" style="height: 5rem;width: 7.5rem;" :src="item.image_src">
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import {CHANGEREG} from "../../store/modules/mutation-types.js"
	export default{
		name:"Slideshow",
		data(){
			return{
				goodsdetaild:{}
			}
		},
		props:{
			slideImg:{
				type:Array
			}
		},
		methods:{
			btngoods(id){
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
		}
	}
</script>

<style>
	.my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
</style>
