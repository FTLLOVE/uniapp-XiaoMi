<template>
  <view class="card">
    <!-- header -->
    <view 
      class="p-2 border-bottom c-main-bd"
    >
      <slot name="head">
        <text class="font-md font-weight">{{headTitle}}</text>
      </slot>
    </view>
    <!-- body -->
    <view>
      <!-- 图片 -->
      <image 
        v-if="bodyImage"
        :src="bodyImage" 
        mode="widthFix">
      </image>
      <slot name="body"></slot>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      headTitle: String,
      bodyImage: String
    }
  }
</script>

<style>
</style>
