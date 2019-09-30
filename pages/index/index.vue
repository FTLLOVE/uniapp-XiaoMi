<template>
	<view class="content">
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay :interval="3000" :duration="1000">
      <swiper-item>
        <view class="swiper-item">
          <image 
            src="../../static/images/demo/demo4.jpg" 
            mode="widthFix"
            lazy-load
          >
          </image>
        </view>
      </swiper-item>      
    </swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
