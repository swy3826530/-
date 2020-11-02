<template>
    <!-- 楼层 -->
    <div class="floor">
        <div class="floorList">
           <div class="floorItem" v-for="(flooritem,index) in floorimg" >

             <div class="floorTitle">
               <img :src="flooritem.floor_title.image_src" alt="">
             </div>

             <div class="floorContent">
                <div class="floorItemMain" v-for="(item,index) in flooritem.product_list" @click="jumpGoodlist(item.navigator_url)" v-if="index == 0">
                     <img :src="item.image_src">
                </div>

                <div class="floorItemMore">
                  <div class="FMoreItem"  v-for="(item2,index2) in flooritem.product_list" @click="jumpGoodlist(item2.navigator_url)"  v-if="index2 != 0">
                     <img :src="item2.image_src" alt="">
                  </div>
                </div>

             </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "floor",
  data() {
    return {
      floorimg: [],
    };
  },
  created() {
    this.$request.floor().then((res) => {
      // console.log(res.data.message);
      this.floorimg = [...res.data.message];
	  // console.log(this.floorimg)
    });
  },
  components: {},
  methods:{
	  jumpGoodlist(id){
		  console.log(id)
		  let ids = id.split("=")[1]
		  // console.log(decodeURI(ids))
		  this.$router.push({
		  	path:"/goodslist",
		  	query:{querys:ids}
		  })
	  }
  }
};
</script>

<style>
/* 楼层 */
.floor{
	margin-bottom: 1.3rem;
}
.floorList{
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
}
.floorTitle img{
	margin-top: .2rem;
	height: 1rem;
}
.floorList .floorItem {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.floorList .floorItem .floorContent{
  width: 100%;
  display: flex;
}
.floorList .floorItem .floorItemMain{
  width: 33%;
  padding: 0.2rem;
}
.floorList .floorItem .floorItemMain img{  
  width: 100%;
  height: 100%;
}
.floorList .floorItem .floorContent .floorItemMore{
  display: flex;
  width: 66%;
  flex-wrap: wrap;
}
.floorList .floorItem .floorContent .floorItemMore .FMoreItem{
  box-sizing: border-box;
  width: 50%;
  padding: 0.2rem;
}
.floorList .floorItem .floorContent .floorItemMore .FMoreItem img{
  width: 100%;
  height: 100%;
}
</style>
