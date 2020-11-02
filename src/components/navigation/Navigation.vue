<template>
	<div name="navigation">
		<ul style="display: flex;">
			<li class="navigation" @click="jumpClass"  v-for="(item,index) in navigation"><img :src="item.image_src"></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"Slideshow",
		created() {
			  //导航图
			this.$request.navigation().then(res=>{
				this.navigation = res.data.message
			})
		},
		data(){
			return{
				navigation:[]
			}
		},
		methods:{
			jumpClass(){
				this.$router.push("/classify")
			}
		}
	}
</script>

<style>
	.navigation{
		width: 1.8rem;
	}
	.navigation img{
		width: 2rem;
	}
</style>
