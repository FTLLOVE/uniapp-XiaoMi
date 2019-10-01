<template>
  <swiper
    indicator-dots 
    autoplay 
    :interval="3000" 
    :duration="1000"
    :style="getStyle"
    circular
   >
    <block
      v-for="(item,idx) in swipers"
      :key = "idx"
    >
      <swiper-item>
        <view 
          class="swiper-item" 
          :style="getStyle"
          @tap="imagePreview(idx)">
          <image            
            :src="item.src" 
            mode="widthFix"
            lazy-load
          >
          </image>
        </view>
      </swiper-item>  
    </block>          
  </swiper>
</template>

<script>
  export default {
    props:{
      swipers:Array,
      height:{
        type: String,
        default: "350rpx"
      },
      preview:{
        type: Boolean,
        default: false
      }
    },
    computed:{
      getStyle(){
        return `height:${this.height}rpx`
      },
      getUrls(){
         let arr = this.swipers.map(item=>item.src)
         
         return arr
      }
    },
    methods:{
      navigate(item){
        console.log(item);
      },
      // 图片预览功能
      imagePreview(item,idx){
        if(this.preview){
          return uni.previewImage({
            current:idx,
            urls: this.getUrls,
            indicator:'default'
          })
        }
      }
    }
  }
</script>

<style lang="stylus">
  .swiper-item
    image
      height: 350upx;
</style>
