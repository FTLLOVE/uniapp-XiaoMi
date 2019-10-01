<template>
	<view class="content">
    <!-- 轮播图 -->
    <index-swiper :swipers="swipers"></index-swiper>
    <!-- 分类图标 -->
    <index-nav :classList="classList"></index-nav>
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

</style>
