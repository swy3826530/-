<template>
	<div class="seen">
	  <div class="seens">
	   <div class="comm" v-if="data" v-for="(item,index) in data" v-model="data">
	    <div class="comm_l">
	     <input type="checkbox" v-model="item.isChecked">
	    </div>
	    <div class="comm_img">
	     <img :src="item.goods_small_logo"></div>
	    <div class="comm_title">
	     <p>{{item.goods_name}}</p >
	     <p>
	      <span style="color:red;">￥{{item.num*item.goods_price}}</span>
	      <span>
			<van-stepper v-model="item.num" @plus="add(index)" @minus="min(index)" />
		  </span>
	      <span style="font-size: 0.3rem;">
			  <button>删除</button>
		  </span>
	     </p >
	    </div>
	    <div class="bar">
	     <van-submit-bar  button-text="提交订单" >
			<dev style="position: absolute;left:0;">
				<input type="checkbox" :checked="isCheckAll" @click="checkAll" /> 全选
			</dev>
		  <p style="font-size:.3rem;position:absolute;right:130px;top:5px;">合计:<span style="color:red;">{{sumPrice |glprice}}</span></p>
		  <p style="font-size:.3rem;position:absolute;right:130px;bottom:5px;">包含运费</p>
	     </van-submit-bar>
	    </div>
	   </div>
	   <div class="comm" v-else>
	    没有商品
	   </div>
	  </div>
	 </div>
</template>

<script>
	export default{
		name:"CartList",
		data(){
			return{
				data:[],
				totalprices:0
			}
		},
		mounted() {
			this.data=JSON.parse(localStorage.getItem("goods"))
			console.log(this.data)
		},
		computed:{
			sumPrice(){
				this.totalprices=0
				this.data.forEach(item=>{
					if(item.isChecked)
					this.totalprices = this.totalprices+item.num*item.goods_price
				})
				return this.totalprices
			},
			isCheckAll(){
				return this.data.every(item=>item.isChecked)
			}
		},
		methods:{
			add(index){
				console.log(index)
				this.data[index].num++
			},
			min(index){
				this.data[index].num--
			},
			glprice(price){
				return '￥'+price.toFixed(2)
			},
			checkAll(){
				var flag = !this.isCheckAll
				this.data.forEach(item=>item.isChecked =flag)
			}
		}
	}
</script>

<style>
	.seen {
	  position: absolute;
	  padding-bottom: .3rem;
	  overflow: auto;
	  font-size: .5rem;
	 }
	 .seen p{
		font-size: .4rem; 
	 }
	
	 .van-submit-bar {
	  bottom: 1rem;
	  border: 1px solid #C8C8C8;
	 }
	
	 .comm {
	  width: 100%;
	  height: 2rem;
	  border-bottom: 1px solid #C8C8C8;
	  display: flex;
	  justify-content: center;
	  align-items: auto;
	 }
	
	 .comm img {
	  width: 1.5rem;
	  height: 1.5rem;
	 }
	
	 .comm_l {
	  flex: 1;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	 }
	
	 .comm_img {
	  flex: 3;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	
	 }
	
	 .comm_title {
	  flex: 6;
	 }
	
	 .comm_title p {
	  height: 50%;
	 }
	
	 .comm_title p:nth-child(1){
	  font-size: 0.3rem;
	  text-overflow: -o-ellipsis-lastline;
	  overflow: hidden;
	  padding-top: .2rem;
	  height: .8rem;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  line-clamp: 2;
	  -webkit-box-orient: vertical;
	
	 }
	
	 .comm_title p:nth-child(2) {
	  display: flex;
	  justify-content: space-around;
	  align-items: center;
	
	 }
	
	 .comm_title p:nth-child(2) span {
	  /* padding: 0.5rem; */
	 }
</style>
