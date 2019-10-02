<template>
  <view class="p-2">
  		<view class="font-lg">{{detail.title}}</view>
  		<view class="font text-light-muted mb-1 line-h-sm">
  			{{detail.desc}}
  		</view>
  		<price priceSize="font-lg" unitSize="font">
  		{{detail.pprice}}</price>
  	</view>
</template>

<script>
  export default {
    props:{
      detail:Object
    }
  }
</script>

<style>
</style>
