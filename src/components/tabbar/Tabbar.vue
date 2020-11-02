<template>
	<div class="tabbar"  v-if="isShow">
		<van-tabbar v-model="active">
		  <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item to="/classify" icon="search">分类</van-tabbar-item>
		  <van-tabbar-item to="/shoppingcart" icon="shopping-cart-o">购物车</van-tabbar-item>
		  <van-tabbar-item to="/my" icon="manager-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default{
		name:"Tabbar",
		data(){
			return{
				active:0,
				path:""
			}
		},
		computed:{
			isShow(){
				switch (this.$route.path){
					case '/goodslist':
					return false;
					case '/details':
					return false;
					   default:
						return true;
						break;
				}
			}
		},
		updated() {
			switch (this.$route.path){
				case '/home':
				return this.active=0;
				case '/classify':
				return this.active=1;
				case '/shoppingcart':
				return this.active=2;
				case '/my':
				return this.active=3;
				   default:
					return true;
					break;
			}
		}
		
	}
</script>

<style>
</style>
