<template>
	<div class="classify">
		<NavTop :title="title"></NavTop>
		<van-row style="margin-top:46px;" v-if="classifydata.length">
		  <van-col class="leftnav" span="5">
			  <van-sidebar v-model="activeKey">
			    <van-sidebar-item v-for="item in classifydata" :title="item.cat_name" />
			  </van-sidebar>
		  </van-col>
		  <van-col class="rightdata" span="19">
			<div v-for="(item,index) in classifydata[activeKey].children">
				<p class="h2title">-- --- {{item.cat_name}} --- --</p>
				<div class="h3data">
					<van-col @click="ifyClick(item1.cat_name)" v-for="(item1,index1) in item.children" span="8">
						<img :src="item1.cat_icon">
						<p style="text-align: center;">{{item1.cat_name}}</p>
					</van-col>
				</div>
			</div>
		  </van-col>
		</van-row>
	</div>
</template>

<script>
	import NavTop from "../navigation/NavTop.vue"
	export default{
		name:"Classify",
		data(){
			return{
				classifydata:[],
				activeKey:0,
				title:"商品分类",
			}
		},
		created() {
			this.$request.classify().then(res=>{
				this.classifydata = [...res.data.message]
				// console.log(this.classifydata)
			})
		},
		methods:{
			ifyClick(query){
				// console.log(query)
				this.$router.push({
					path:"/goodslist",
					query:{querys:query}
				})
			}
		},
		components:{
			NavTop
		}
	}
</script>

<style>
.van-col{
	box-sizing: border-box;
	font-size: .1rem;

}
.h2title{
	text-align: center;
	width: 100%;
	padding-top: .4rem;
	font-size: .5rem;
}
.h3data img{
	width: 100%;
}
.h3data .van-col{
	padding:0 .4rem 0 .4rem;
}
.van-row{
	width: 100%;
	display: flex;
	
	height: 12rem;
}
.van-sidebar{
	height: 12rem;
	overflow: auto;
}
.rightdata{
	height: 12rem;
	overflow: auto;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 1rem;
}
.h3data{
	display: flex;
	flex-wrap: wrap;
}
</style>
