<template>
  <view class="d-flex">
    <view  class="three-ad-l">
      <image          
        :src="threeAdv.big.src"
        lazy-load
      ></image>
    </view>
    <view 
      class="three-ad-r d-flex flex-column j-sb"
    >
      <image
        :src="threeAdv.smallBottom.src"
        lazy-load
      ></image>
      <image
        :src="threeAdv.smallTop.src"
        lazy-load
      ></image>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      threeAdv: Object
    }
  }
</script>

<style lang="stylus">
  .three-ad-l
    width: 373upx;
    height: 530upx;
    margin-right: 2upx;
  .three-ad-r
    image
      width: 375upx;
      height: 263upx; 
</style>
