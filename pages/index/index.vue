<template>
	<view class="content">
    <!-- 轮播图 -->
    <index-swiper :swipers="swipers"></index-swiper>
    <!-- 分类图标 -->
    <index-nav :classList="classList"></index-nav>
    <!-- 分割区域 -->
    <divider></divider>
    <!-- 三格广告 -->
    <index-three-adv :threeAdv="threeAdv"></index-three-adv>
    <!-- 分割区域 -->
    <divider></divider>
    <!-- 全局Card组件 -->
    <card :headTitle="'wzjNB'"></card>
    <!-- 公共列表组件 -->
    <view class="row">
      <view>
        <image 
          class="common-list-image"
          src="../../static/images/demo/list/1.jpg" 
          mode="widthFix"
          lazy-load
        ></image>
       <view class="px-2">
         <view class="font-md">米家空调</view>
         <text class="font text-light-muted">wzjNB</text>
         <view class="d-flex">
           <price>1399</price>
           <view class="font-sm text-light-muted line-through a-self-end">$2699</view>
         </view>
       </view>
      </view>
    </view>
	</view>
</template>

<script>
  import IndexSwiper from '@/components/index/IndexSwiper.vue'
  import IndexNav from '@/components/index/IndexNav.vue'
  import IndexThreeAdv from '@/components/index/IndexThreeAdv.vue'
  

	export default {
    components:{
      IndexSwiper,
      IndexNav,
      IndexThreeAdv
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
        }],
        // 三栏广告
        threeAdv:{
          big:{
            src:"../../static/images/demo/demo1.jpg"
          },
          smallTop:{
            src:"../../static/images/demo/demo2.jpg"
          },
          smallBottom:{
            src:"../../static/images/demo/demo2.jpg"
          }
        }
			}
		},
		onLoad() {

		},
		methods: {
      
		}
	}
</script>

<style lang="stylus">
.content
  padding-bottom: 1000upx;
  .common-list-image
    width: 372.5upx;
</style>
