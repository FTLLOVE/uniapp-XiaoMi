<template>
  <swiper
    indicator-dots 
    autoplay 
    :interval="3000" 
    :duration="1000"
    circular
   >
    <block
      v-for="(item,idx) in swipers"
      :key = "idx"
    >
      <swiper-item>
        <view class="swiper-item" @tap="navigate(idx)">
          <image            
            :src="item.src" 
            mode="widthFix"
            lazy-load
          >
          </image>
        </view>
      </swiper-item>  
    </block>          
  </swiper>
</template>

<script>
  export default {
    props:{
      swipers:Array
    },
    methods:{
      navigate(item){
        console.log(item);
      }
    }
  }
</script>

<style lang="stylus">
  .swiper-item
    image
      height: 350upx;
</style>
