<template>
  <view
    :style="RandomColor"
    class="px-2 py-1 d-inline-block border m-1"
  >
    {{item.name}}
  </view>
</template>

<script>
  export default {
    props:{
      item: Object,
      color: {
        type: Boolean,
        default: true
      }
    },   
    computed:{
     RandomColor(){
       if(!this.color){
         return `border:0;background:#f5f5f5`
       }
       let color = {
         borderColor:[ '#EEA6AA','#DD6A4B','#98D5D8','#9DBE93','#BCCD99' ],
         background: [ '#F8EAE9','#FFBEC6','#E8F6F6','#E4F5E2','#F2F6E8' ]
       }
       let idx = Math.floor(Math.random()*color.borderColor.length)
       let bdc = color.borderColor[idx]
       let bgc = color.background[idx]
       return `background: ${bgc};border-color: ${bdc}`
     }
    }
  }
</script>

<style>
</style>
