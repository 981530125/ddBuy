<!--
 * @Description: 我的->我的订单->订单类型
 * @FilePath: /ddBuy/src/views/mine/Children/MyOrderChildren/OrderType.vue
 -->
<template>
	<div id="orderType">
		<div v-if="orderTypeDataArray.length>0">
			<div v-for="(item,index) in orderTypeDataArray"
				:key="index"
				class="product-card">
				<van-row type="flex" v-for="(gitem,index) in item.goodlist" :key="index">
					<van-col span="8">
						<img :src="gitem.product_image" style="width:80px;height:80px;"/>
					</van-col>
					<van-col span="11" style="font-size:14px;">
						<div >{{gitem.product_name}}</div>
						<div>12313</div>
					</van-col>
					<van-col span="5" style="font-size:14px;">
						<div>￥{{gitem.current_unit_price}}</div>
						<div>{{gitem.quantity}}</div>
					</van-col>
				</van-row>
			</div>


			<!-- <van-card
				v-for="(item,index) in orderTypeDataArray"
				:key="index"
				class="product-card"
				num="2"
				desc="描述信息"
				title="商品标题"
				thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
			>
				<div v-for="(gitem,index) in item.goodlist" :key="index">
					<div slot="price">{{gitem.index}}</div>
				</div>
				<div v-for="(gitem,index) in item.goodlist" :key="index">
					<div slot="price">{{gitem.index}}</div>
				</div>
			</van-card> -->
		</div>
		<div v-else
			class="noDataPlaceHold">
			<img src="./../../../../images/mine/noData.jpeg"
			alt="">
			<span class="desc">暂时还没有相关订单</span>
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapState, mapGetters, mapMutations } from 'vuex'
import { getOrderlist,BASE_URL } from '@/serve/api/index.js'
export default {
	props: {
		type: Number
	},
	mounted () {
		let _this = this;
		//
		_this.getorderlist();
	},
	computed: {
		// 用户信息
		...mapGetters({
			userinfo:'USER_INFO',
		}),
	},
	data () {
		return {
			orderTypeDataArray:[]
		}
	},
	components: {

	},
	methods: {
		getorderlist:function(){
			let _this = this;
			let type = _this.type;
			let data = {
				status:type,
				user_id:_this.userinfo.user_id
			}
			getOrderlist(data).then(response => {
				if(response.code == 20000 && response.msg == 'ok'){
					_this.orderTypeDataArray = response.data.list;
				}
			})
		}
	}
}
</script>

<style lang="less" scoped>
#orderType {
  margin-top: 2.4rem;
//   height: 20rem;
  .product-card{
	  padding: 10px 20px;
	  background-color: #fff;
  }
  .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
    .desc {
      color: grey;
      font-size: 0.6rem;
    }
  }
  .noData {
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
</style>
