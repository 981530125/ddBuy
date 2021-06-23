<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-12-03 14:38:29
 * @Description: Home 首页模块
 * @FilePath: /ddBuy/src/views/home/Home.vue
 -->
<template>
  <div id="home">
    <div v-if="!isShowLoading">
      <!-- 头部地理位置和搜索框 -->
      <div class="head">
        <div class="headbck" :style="'background-color:'+setsowcolor"></div>
        <Header></Header>
        <!-- 轮播图 -->
        <Sowing :sowing_list="sowing_list" @getindex = "getindex" />
        <!-- tip -->
        <!-- <Tip :home_ad="home_ad" /> -->
      </div>
      <!-- Nav -->
      <Nav :nav_list="nav_list" />
      <!-- 跳转到会员界面 -->
      <!-- <VipTip></VipTip> -->


      <!-- 人气商品 -->
      <FlashBuy :flash_sale_product_list="flash_sale_product_list" />
      <!-- 特色专区 -->
      <!-- <SpecialZone :specialZone="specialZone" /> -->
      <!--TabbarItem 商品 -->
      <!-- <TabbarGoodsItem :tabbar_all_product_list="tabbar_all_product_list"
                       :flash_sale_product_list="flash_sale_product_list" /> -->
      <!-- 最底部 -->
      <van-divider>我是有底线的</van-divider>
    </div>
    <!-- 数据加载提示gif -->
    <Loading :show="isShowLoading" />
    <!-- 回到顶部按钮 -->
    <v-top />
  </div>
</template>

<script type="text/javascript">

import { getHomeData,BASE_URL } from './../../serve/api/index.js'
import { showBackIcon, animate } from './../../config/global.js'

// 引入Vuex
import { mapMutations, mapState } from 'vuex'

import { ADD_TO_CART } from './../../config/pubsub_type.js'

// 引入页面组件
import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import VipTip from './components/myVip/VipTip'
import FlashBuy from './components/flash/FlashBuy'
import SpecialZone from './components/special/SpecialZone'
import TabbarGoodsItem from './components/tabbar/TabbarGoodsItem'
import Loading from '../../components/loading/LoadingGif'

export default {
  computed: {
    ...mapState(['userInfo']),
  },
  created () {
  },
  mounted () {
    // 0.数据初始化
    this._initData();
  },
  data () {
    return {
      HttpUrl:BASE_URL,
      sowing_list: [],              // 首页轮播图数据
      isShowLoading: true,          // 是否加载动画
      nav_list: [],
      flash_sale_product_list: [],  // 限时抢购
      tabbar_all_product_list: [],
      specialZone: {},               // 特色专区数据
	  home_ad: '',                    // 首页广告
	  setsowcolor:'#fff'
    }
  },
  components: {
    Header,
    Sowing,
    Tip,
    Nav,
    VipTip,
    FlashBuy,
    SpecialZone,
    TabbarGoodsItem,
    Loading,
  },
  methods: {
    // Vuex中的方法
    ...mapMutations(['ADD_GOODS', 'ADD_TO_CART']),
    // 数据初始化
    _initData () {
		let _this = this;

		getHomeData().then(response => {
			// console.log(JSON.stringify(response));
			// console.log(response);
			if (response.code == '20000') {
			// 给轮播组件 sowing_list赋值
				this.sowing_list = response.data.icon_list;
				if(this.sowing_list.length>0){
					this.sowing_list.map(item=>{
					let filelist = item.icon_list;
						if(filelist.length>0){
							filelist.map(fitem=>{
								if(!fitem.icon_url.includes('http')){
									fitem.icon_url = this.HttpUrl+fitem.icon_url;
								}
							})
						}
					})
				}
        let nav_list = response.data.producttype_list.slice(1,12);
        let typeobj = {
          cid: 10000,
          icon_url: "icon-icon-test1",
          id: "58ff0496936edf747a8b4612",
          name: "全部",
          products: [],
        }
        nav_list.push(typeobj);
				this.nav_list = nav_list;

				this.flash_sale_product_list = response.data.product_list;
				this.tabbar_all_product_list = response.data.product_list;
				this.isShowLoading = false
				// 给特色专区赋值
				// this.specialZone = response.data.special_zone;
				// 获取首页广告图
				// this.home_ad = response.data.home_ad.image_url;
			}
		}).catch(error => {
			console.log(error);
		});
	},
	getindex:function(data){
		let _this = this;
		_this.setsowcolor = _this.sowing_list[data].background_image;
	}
  },
}
</script>

<style lang="less" scoped>
	#home {
		background-color: #f5f5f5;
		padding-bottom: 3rem;
		.head {
			margin-top: -3rem;
			width: 100%;
			position: relative;
			// background-image: url("http://518taole.7-orange.cn/backImage.png");
			background: #f7f7f7;
			overflow: hidden;
			// box-shadow: 0 0 5px #888888;
			// border-top-left-radius: 0px;
			// border-top-right-radius: 586px 0px;
			// border-bottom-right-radius: 586px 104px;
			// border-bottom-left-radius: 586px 104px;
			.headbck{
				position: absolute;
				top:0;
				left: 0;
				height: 250px;
				// filter: blur(15px);
				width: 100%;
				//   background-color: #fa0000;
				&:after{
					content: "";
					width:100%;
					height:100%;
					position: absolute;
					left:0;
					top:0;
					background: inherit;
					filter: blur(2px);
					z-index: 2;
				}
			}
		}
	}
	.van-divider {
		background-color: #f5f5f5;
		margin: 0;
	}
</style>
