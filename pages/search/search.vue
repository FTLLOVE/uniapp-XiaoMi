<template>
	<view>    
		<card 
      headTitle="热门搜索"
      bodyImage="../../static/images/demo/search-banner.png"
    ></card>
    <!-- 多色按钮 -->
    <view class="px-1 mb-2">
        <random-color
          v-for="(item,idx) in hot"
          :key="idx"
          :item="item"          
        ></random-color>
    </view>
	</view>
</template>

<script>
  import RandomColor from '@/components/search/RandomColor.vue'
	export default {
    components:{
      RandomColor
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
    
		methods: {
			
		}
	}
</script>

<style>

</style>
