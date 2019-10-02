<template>
  <view>
    <!-- 商品详情轮播图 -->
    <index-swiper :swipers="banners" height="750" :preview="true"></index-swiper>
    <!-- 基础详情 -->
    <detail-info :detail="detail"></detail-info>
    <!-- 商品特性 -->
    <detail-attr :baseAttrs="baseAttrs"></detail-attr>
    <!-- 属性选择 -->
    <view class="p-2">
      <view class="rounded border bg-light-secondary">
        <uni-list-item>
          <view class="d-flex">
            <text class="mr-2 text-muted">已选</text>
            <text>火焰红 64G 标配</text>
          </view>
        </uni-list-item>
        <uni-list-item>
          <view class="d-flex">
            <text class="mr-2 text-muted">配送</text>
            <text class="mr-2">北京 东城区</text>
            <text class="c-main">现配</text>
          </view>
        </uni-list-item>
        <uni-list-item>
          <view class="d-flex a-center">
            <view class="text-muted font d-flex a-center mr-2">
              <view class="iconfont icon-finish c-main"></view>
              小米自营
            </view>
            <view class="text-muted font d-flex a-center mr-2">
              <view class="iconfont icon-finish c-main"></view>
              小米发货
            </view>
            <view class="text-muted font d-flex a-center mr-2">
              <view class="iconfont icon-finish c-main"></view>
              七天无理由退货
            </view>
          </view>
        </uni-list-item>
      </view>
    </view>
    
    <!-- 用户评论 -->
    <detail-comments :comments="comments"></detail-comments>
  </view>
</template>

<script>
  import IndexSwiper from '@/components/index/IndexSwiper.vue'
  import DetailInfo from '@/components/detail/DetailInfo.vue'
  import DetailAttr from '@/components/detail/DetailAttr.vue'
  import DetailComments from '@/components/detail/DetailComments.vue'
  import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"

  export default {
    components: {
      IndexSwiper,
      DetailInfo,
      DetailAttr,
      DetailComments,
      uniListItem
    },
    data() {
      return {
        // 评论
        comments: [{
            userpic: "/static/images/demo/demo6.jpg",
            username: "楚绵",
            create_time: "2019-07-31",
            goods_num: 123,
            context: "评论内容",
            imglist: [
              "/static/images/demo/demo6.jpg",
              "/static/images/demo/demo6.jpg",
              "/static/images/demo/demo6.jpg"
            ]
          },
          {
            userpic: "/static/images/demo/demo6.jpg",
            username: "楚绵",
            create_time: "2019-07-31",
            goods_num: 123,
            context: "评论内容",
            imglist: [
              "/static/images/demo/demo6.jpg",
              "/static/images/demo/demo6.jpg",
              "/static/images/demo/demo6.jpg"
            ]
          },
          {
            userpic: "/static/images/demo/demo6.jpg",
            username: "楚绵",
            create_time: "2019-07-31",
            goods_num: 123,
            context: "评论内容",
            imglist: [
              "/static/images/demo/demo6.jpg",
              "/static/images/demo/demo6.jpg",
              "/static/images/demo/demo6.jpg"
            ]
          }
        ],
        banners: [{
            src: 'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp'
          },
          {
            src: 'https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'
          }
        ],
        detail: {
          title: "小米MIX3 6GB+128GB",
          desc: "磁动力滑盖全面屏 / 前后旗舰AI双摄 / 四曲面彩色陶瓷机身 / 高效10W无线充电",
          pprice: 3299
        },
        baseAttrs: [{
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
          {
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
          {
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
          {
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
          {
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
          {
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
          {
            icon: "icon-cpu",
            title: "CPU",
            desc: "蛟龙845八核"
          },
        ]
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
