<template>
  <view class="row j-sb">
    <block
      v-for="(item,idx) in commonList"
      :key ="idx"
    >
      <view>
        <image 
          class="common-list-image"
          :src="item.cover" 
          mode="widthFix"
          lazy-load
        ></image>
       <view class="px-2">
         <view class="font-md">{{item.title}}</view>
         <text class="font text-light-muted">{{item.desc}}</text>
         <view class="d-flex">
           <price>{{item.pprice}}</price>
           <view class="font-sm text-light-muted line-through a-self-end">￥{{item.oprice}}</view>
         </view>
       </view>
      </view>
    </block>
    
  </view>
</template>

<script>
  export default {
    props:{
      commonList: Array
    }
  }
</script>

<style lang="stylus">
  .common-list-image
    width: 372.5upx;
</style>
