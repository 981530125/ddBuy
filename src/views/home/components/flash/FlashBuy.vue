<template>
  <div id="wrapper">
    <div class="titleWrapper" style="position:relative;">
      <van-divider :style="{position:'relative',width:'129px',margin: '0 auto',fontWeight:'bold', color: '#000', borderColor: '#000', padding: '0 16px' }"
>人气商品</van-divider>
      <!-- <div class="title">人气商品</div> -->
      <!-- <van-count-down :time="time"
                      class="countStyle"
                      format="HH mm ss">
        <template v-slot="timeData">
          <span class="item">{{ timeData.hours }}</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down> -->
      <!-- 更多按钮 -->
      <div class="more"
           @click="moreClick">
           <span>更多</span>
           <i class="van-icon van-icon-arrow van-cell__right-icon" style="vertical-align:top;"></i></div>
    </div>
    <!-- 限时抢购商品 遍历父组件传来的数据并传递给子组件-->
    <FlashFood :flash_sale_product_list="flash_sale_product_list" />
  </div>
</template>

<script type="text/javascript">

import FlashFood from './FlashFood'
import { Toast } from 'vant'

export default {
  props: {
    flash_sale_product_list: Array
  },
  data () {
    return {
      // 倒计时时间设置
      time: 30 * 60 * 1000 * 100
    }
  },
  components: {
    FlashFood
  },
  methods: {
    moreClick () {
      Toast({
        message: '更多',
        duration: 800
      });
    },

  }
}
</script>

<style lang="less" scoped>
#wrapper {
  margin: 0 10px;
  margin-top: 0.625rem;
  padding: 0.25rem 0 0.9375rem 0;
}

.titleWrapper {
  margin: 0 0.625rem 0.625rem 0.625rem;
  height: 1.5625rem;
}
.title {
  display: inline-block;
  // border-left: 4px #ff1850 solid;
  padding-left: 0.3125rem;
  height: 1.3125rem;
  line-height: 1.3125rem;
  vertical-align: middle;
  font-size: 1.1875rem;
  float: left;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: black;
}
.countStyle {
  float: left;
  margin-left: 0.7rem;
}

.more {
  position: absolute;
  color: #666;
  top:0;
  right: 0;
  line-height: 24px;
  font-size: 0.4rem;
}
</style>
