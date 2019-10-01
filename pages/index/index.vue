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
    <common-list :commonList ="commonList"></common-list>
	</view>
</template>

<script>
  import IndexSwiper from '@/components/index/IndexSwiper.vue'
  import IndexNav from '@/components/index/IndexNav.vue'
  import IndexThreeAdv from '@/components/index/IndexThreeAdv.vue'
  import CommonList from '@/components/common/CommonList.vue'

	export default {
    components:{
      IndexSwiper,
      IndexNav,
      IndexThreeAdv,
      CommonList
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
        },
        // 公共列表数据
        commonList:[{
          cover:'../../static/images/demo/list/1.jpg',
          title:"米家空调",
          desc:"1.5匹变频",
          oprice:2699,
          pprice: 1399
        },
        {
          cover:'../../static/images/demo/list/1.jpg',
          title:"米家空调",
          desc:"1.5匹变频",
          oprice:2699,
          pprice: 1399
        },
        {
          cover:'../../static/images/demo/list/1.jpg',
          title:"米家空调",
          desc:"1.5匹变频",
          oprice:2699,
          pprice: 1399
        }]
			}
		},
		onLoad() {

		},
    // 监听原生点击事件
    onNavigationBarSearchInputClicked(e) {      
        uni.navigateTo({
          url:'../search/search'
        })
      
    },
		methods: {
      
		}
	}
</script>

<style lang="stylus">
.content
  padding-bottom: 1000upx;
  
</style>
