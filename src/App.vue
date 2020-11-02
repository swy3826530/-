<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
	  <Tabbar></Tabbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
	import Tabbar from "components/tabbar/Tabbar.vue"
	export default{
		name:"App",
		components:{
			Tabbar
		},
		methods:{

		}
	}
</script>
<style>
#app p{
	margin: 0;
}
::-webkit-scrollbar {
    width: 0px;
    height: 1px;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
}
</style>
