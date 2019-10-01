<template>
  <view class="card">
    <!-- header -->
    <view 
      class="p-2 c-main-bd"
      :class="getHeadClass"
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
      <slot></slot>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      headTitle: String,
      bodyImage: String,
      // 是否显示下边线
      borderBottom:{
        type: Boolean,
        default: true
      }
    },
    computed:{
      getHeadClass(){
        let borderBottom = this.borderBottom? 'border-bottom':''
        return `${borderBottom}`
      }
    }
  }
</script>

<style>
</style>
