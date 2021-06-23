<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:16:39
 * @Description: 首页->Nav组件
 * @FilePath: /ddBuy/src/views/home/components/nav/Nav.vue
 -->
<template>
	<div id="wrapper">
		<van-grid :column-num="5" :border="false">
			<van-grid-item style="color:#000;" v-for="(nav,index) in nav_list"
				:key="nav.cid"
				:icon-prefix="'iconfont'"
				:icon="nav.icon_url"
				:text="nav.name"
				@click="gotoCategory(index)">
				<span slot="icon" style="font-size:16px;" :class="'iconfont '+nav.icon_url"></span>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script type="text/javascript">

export default {
  props: {
    nav_list: Array
  },
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    gotoCategory (index) {
		// if(index == '9'){
		// 	this.$router.push({ name: 'category', params: { currentIndex: 0 } })
		// }else{
			this.$router.push({ name: 'category', params: { currentIndex: index } })
		// }
      
    }
  }
}
</script>

<style lang="less" scoped>
	#wrapper{
		margin: 0 10px;
		margin-top: 10px;
		overflow: hidden;
		border-radius: 8px;
	} 
</style>

