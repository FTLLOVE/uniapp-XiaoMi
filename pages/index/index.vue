<template>
	<view class="content">
    <!-- 轮播图 -->
    <index-swiper :swipers="swipers"></index-swiper>
    <!-- 分类图标 -->
    <index-nav :classList="classList"></index-nav>
    <!-- 分割区域 -->
    <divider></divider>
    <!-- 三格广告 -->
    <view class="d-flex">
      <view  class="three-ad-l">
        <image          
          src="../../static/images/demo/demo1.jpg"
          lazy-load
        ></image>
      </view>
      <view 
        class="three-ad-r d-flex flex-column j-sb"
      >
        <image
          src="../../static/images/demo/demo2.jpg"
          lazy-load
        ></image>
        <image
          src="../../static/images/demo/demo2.jpg"
          lazy-load
        ></image>
      </view>
    </view>
    <!-- 分割区域 -->
    <divider></divider>
	</view>
</template>

<script>
  import IndexSwiper from '../../components/index/IndexSwiper.vue'
  import IndexNav from '../../components/index/IndexNav.vue'
	export default {
    components:{
      IndexSwiper,
      IndexNav      
    },
		data() {
			return {
        // 轮播图数据
				swipers:[
          {
            src:"../../static/images/demo/demo4.jpg"
          },
          {
            src:"../../static/images/demo/demo4.jpg"
          }
        ],
        // 分类图标数据
        classList:[{
          src:"/static/images/indexnav/1.png",
          text:"新品发布"
        }]
			}
		},
		onLoad() {

		},
		methods: {
      
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
