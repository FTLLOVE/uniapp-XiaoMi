<template>
  <view class="row j-center m-2">
    <block
      v-for="(item,idx) in classList"
      :key="idx"
    >
      <view 
        class="span-4 class-content d-flex flex-column a-center j-center py-1"
        @tap="navigate"
      >
        <image 
          :src="item.src" 
          mode="widthFix"
          lazy-load
         ></image>
         <view>{{item.text}}</view>
      </view>
    </block>      
  </view>
</template>

<script>
  export default {
    props:{
      classList: Array
    },
    methods:{
      // 页面跳转
      navigate(){
        console.log(1);
      }
    }
  }
</script>

<style lang="stylus">
  .class-content
    image
      width: 60upx;
      height: 60upx;
</style>
