<template>
  <view 
    class="mr-2 d-flex  c-main a-self-start"
    :class="priceSize"
   >
    <text 
      class="font"
      :class="textSize"
     >￥</text>
    <!-- 价格 -->
    <slot></slot>
  </view>
</template>

<script>
  export default {
    props:{
      priceSize:{
        type: String,
        default: "font-md"
      },
      textSize:{
        type:String,
        default: "font-sm"
      }
    }
  }
</script>

<style>
</style>
