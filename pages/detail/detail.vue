<template>
  <view>
    <!-- 商品详情轮播图 -->
    <index-swiper :swipers="banners" height="750" :preview="true"></index-swiper>
    <!-- 基础详情 -->
    <detail-info :detail="detail"></detail-info>
    <!-- 商品特性 -->
    <detail-attr :baseAttrs="baseAttrs"></detail-attr>
  </view>
</template>

<script>
  import IndexSwiper from '@/components/index/IndexSwiper.vue'
  import DetailInfo from '@/components/detail/DetailInfo.vue'
  import DetailAttr from '@/components/detail/DetailAttr.vue'
  export default {
    components: {
      IndexSwiper,
      DetailInfo,
      DetailAttr
    },
    data() {
      return {
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
