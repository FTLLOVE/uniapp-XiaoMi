<template>
	<view>
    <!-- 热门搜索 -->
		<card 
      headTitle="热门搜索"
      bodyImage="../../static/images/demo/search-banner.png"
    >     
    </card>
     <!-- 多色按钮 -->
     <view class="px-1 mb-2">
         <random-color
           v-for="(item,idx) in hot"
           :key="idx"
           :item="item"          
         ></random-color>
     </view>  
     <divider></divider>
    <!-- 常用分类 -->
   <card
      headTitle="常用分类"
      :borderBottom="false"
    >  
      <view class="px-1 mb-2">
          <random-color
            v-for="(item,idx) in hot"
            :key="idx"          
            :item="item"
            :color="false"
          ></random-color>
      </view>
    </card>
    <divider></divider>
    
    <!-- 搜索记录 -->
    <card headTitle="搜索记录">
      <uni-list-item title="小米" :showArrow="false"></uni-list-item>
      <uni-list-item title="小米" :showArrow="false"></uni-list-item>
    </card>
   
	</view>
</template>

<script>
  import RandomColor from '@/components/search/RandomColor.vue'
  import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"

	export default {
    components:{
      RandomColor,
      uniListItem
    },
		data() {
			return {
				hot:[
              { name:'领券中心' },
              { name:'Redmi K20' },
              { name:'RedmiBook 14' },
              { name:'智能积木 越野四驱车' },
              { name:'手环 腕带' },
            ]
			}
		}, 
    onNavigationBarButtonTap(e) {
      if(e.index === 0){
        uni.navigateTo({
          url:"../search-list/search-list"
        })
      }
    },
		methods: {
			
		}
	}
</script>

<style>

</style>
