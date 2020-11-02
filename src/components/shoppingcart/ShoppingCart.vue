<template>
	<div class="shopping">
		<NavTop :title="title"></NavTop>
		<div class="shopingadd">
			<button class="address">请选择收货地址</button>
		</div>
		<div class="shopcart">
			<p style="color: red;font-size:.3rem;">购物车</p>
		</div>
		<CartList></CartList>
	</div>
</template>

<script>
	import NavTop from "components/navigation/NavTop.vue"
	import CartList from "components/shoppingcart/CartList.vue"
	export default{
		name:"ShoppongCart",
		data(){
			return{
				title:"购物车",
			}
		},
		components:{
			NavTop,
			CartList
		}
	}
</script>

<style scoped>
	.shopping{
		font-size: .3rem;
	}
	.shopingadd{
		margin-top:46px;
		display: flex;
		justify-content:center
	}
	.address{
		width: 150px;height: 30px;
		text-align: center;
		font-size: .3rem;
		margin: .3rem;
		background-color: #07C160;
		color: white;
		border: 0px;
	}
	.shopcart{
		height: 20px;
		border-bottom: 1px solid red;
		border-top: 1px solid red;
		padding: .05rem;
	}
	.cartList{
		display: flex;
		height: 100px;
	}
	.cartList_img{
		width: 150px;
	}
	.cartList_img img{
		width: 100%;
	}
</style>
