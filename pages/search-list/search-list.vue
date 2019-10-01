<template>
  <view>
    <!-- 排序和筛选 -->
    <view class="d-flex border-top border-bottom search-choose a-center">
      <view class="flex-1 d-flex a-center j-center font-md">
        <text class=" c-main">综合</text>
        <view>
          <view class="iconfont icon-paixu-shengxu line-h0 c-main font-lg"></view>
          <view class="iconfont icon-paixu-jiangxu line-h0 text-light-muted font-lg"></view>
        </view>
      </view>
      <view class="flex-1 d-flex a-center j-center font-md">
        <text class="text-muted">销量</text>
        <view>
          <view class="iconfont icon-paixu-shengxu line-h0 text-light-muted font-lg"></view>
          <view class="iconfont icon-paixu-jiangxu line-h0 text-light-muted font-lg"></view>
        </view>
      </view>
      <view class="flex-1 d-flex a-center j-center font-md">
        <text class="text-muted">价格</text>
        <view>
          <view class="iconfont icon-paixu-shengxu line-h0 text-light-muted font-lg"></view>
          <view class="iconfont icon-paixu-jiangxu line-h0 text-light-muted font-lg"></view>
        </view>
      </view>
      <view class="flex-1 d-flex a-center j-center font-md">
        <text class="c-main">筛选</text>        
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="stylus">
.search-choose 
  height: 100upx;
</style>