<template>
	<div class="navtop">	
		<van-nav-bar
		  :title="title"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
	</div>
</template>

<script>
	export default{
		name:"NavTop",
		methods: {
		    onClickLeft() {
			  this.$router.go(-1)
		    }
		},
		props:{
			title:String
		}
	}
</script>

<style>
	.navtop{
		position: fixed;
		top: 0;
		width: 100%;
		height: 46px;
	}
	.navtop .van-nav-bar{
		background-color: red;	
	}
	.van-nav-bar__title{
		color: #fff;
	}
	.van-nav-bar .van-icon{
		color: #fff;
	}
	.van-nav-bar__text{
		color: #fff;
	}
</style>
