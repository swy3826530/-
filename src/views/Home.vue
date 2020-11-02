<template>
  <div class="home">
	<van-search @click="jumpSear" placeholder="请输入搜索关键词" shape="round" />
	<!-- 轮播图 -->
	<Slideshow :slideImg="slideImg"></Slideshow>
	<Navigation></Navigation>
	<!-- 楼层 -->
	<Floor></Floor>
  </div>
</template>

<script>

import Navigation from "components/navigation/Navigation.vue"
import Floor from "components/floor/Floor.vue"
import Slideshow from "components/slideshow/Slideshow.vue"
export default {
	name: 'Home', 
	components: {
		Floor,
		Slideshow,
		Navigation
	},
	data(){
		return{
			slideImg:[]
		}
	},
	created() {
		//轮播图
		this.$request.slideshow().then(res=>{
			this.slideImg = res.data.message
			// console.log(this.slideImg[0].goods_id)
		})
	},
	methods:{
		jumpSear(){
			this.$router.push("search")
		}
	}
}
</script>
<style>
	.home{
		font-size: 0.35rem;
	}
</style>