<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-10 15:03:29
 * @Description: 我的->我的订单
 * @FilePath: /ddBuy/src/views/mine/Children/MyOrder.vue
 -->
<template>
  <div id="myOrder">
    <van-nav-bar title="我的订单"
                 :border=false
                 :fixed="true"
                 @click-left="onClickLeft"
                 left-arrow
                 style="height:2.5rem" />
    <van-tabs v-model="active"
              animated
              swipeable
              sticky
              :border="false"
              :offset-top="47"
              ref="tabs"
              @change="changtab"
              type="line"
              color="##ff8097"
              title-active-color="##ff8097"
              animated:yes>
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <OrderType :type="-1" ref="all"/>
      </van-tab>
      <!-- 待支付 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>
        <OrderType :type="10" ref="wait"/>
      </van-tab>
      <!-- 待收货 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>
        <OrderType :type="40" ref="unfinish"/>
      </van-tab>
      <!-- 待评价-->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>
        <OrderType :type="50" ref="unassess"/>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script type="text/javascript">
import OrderType from './MyOrderChildren/OrderType'
export default {
	data () {
		return {
			typeArray: [],
			// 路由传递过来的数据 active
			active: this.$route.params.active,
			itemsTitle: ['全部', '待支付', '待收货', '待评价'],
			reftype:['all','wait','unfinish','unassess'],
		}
	},
	components: {
		OrderType
	},
	methods: {
		onClickLeft () {
			this.$router.back();
		},
		getAllorderlist:function(){
			this.typeArray = ['1']
    },
    changtab:function(name,title){
		let _this = this;
		let reftype = _this.reftype[name];
		let type = -1;
		if(_this.$refs[reftype]){
			switch (reftype) {
				case 'all':
					type = -1;
					break;
				case 'wait':
					type = 10;
					break;
				case 'unfinish':
					type = 40;
					break;
				case 'unassess':
					type = 50;
					break;
				default:
					type = -1;
					break;
			}
			_this.$refs[reftype].getorderlist(type);
		}
    }
	},
	mounted () {
		this.getAllorderlist()
	},
	created () {

	}
}
</script>

<style lang="less" scoped>
#myOrder {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: #f5f5f5;
  .van-icon {
    color: #dedede;
  }
}
</style>
