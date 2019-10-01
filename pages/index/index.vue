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
    <view class="card">
      <!-- 标题 -->
      <view 
        class="font-md font-weight p-2 border-bottom c-main-bd"
      >wzjNB</view>
      <!-- 内容 -->
      <view>
        <!-- 图片 -->
        <image 
          src="../../static/images/demo/demo4.jpg" 
          mode="widthFix">
        </image>
      </view>
    </view>
	</view>
</template>

<script>
  import IndexSwiper from '../../components/index/IndexSwiper.vue'
  import IndexNav from '../../components/index/IndexNav.vue'
  import IndexThreeAdv from '../../components/index/IndexThreeAdv.vue'
  

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
  padding-bottom: 100upx;
</style>
