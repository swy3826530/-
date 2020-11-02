<template>
    <!-- 楼层 -->
    <div class="floor">
        <div class="floorList">
           <div class="floorItem" v-for="(flooritem,index) in FloorDataList" >

             <div class="floorTitle">
               <img :src="flooritem.floor_title.image_src" alt="">
             </div>

             <div class="floorContent">
                <div class="floorItemMain" v-for="(floorProductItem,floorProducIndex) in flooritem.product_list" v-if="floorProducIndex == 0">
                     <img :src="floorProductItem.image_src" alt="">
                </div>

                <div class="floorItemMore">
                  <div class="FMoreItem"  v-for="(floorProductItem2,floorProducIndex2) in flooritem.product_list"  v-if="floorProducIndex2 != 0">
                     <img :src="floorProductItem2.image_src" alt="">
                  </div>
                </div>

             </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Swiper",
  data() {
    return {
      FloorDataList: [],
    };
  },
  created() {
    // 轮播
    this.$request.getFloordata().then((res) => {
      // console.log(res);
      this.FloorDataList = [...res.message];
    });
  },
  components: {},
};
</script>

<style>
/* 楼层 */
.floorList{
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
