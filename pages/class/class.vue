<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
		
    <!-- 请求等待 -->
		<loading :show="showLoading"></loading>
		
    <!-- 左侧滚动 -->
		<scroll-view id="leftScroll" scroll-y style="flex: 1;height: 100%;" 
		class="border-right border-light-secondary" :scroll-top="leftScrollTop">
			<view 
      class="border-bottom border-light-secondary py-1 left-scroll-item"
			hover-class="bg-light-secondary"
			v-for="(item,index) in cate" :key="index"
			@tap="changeCate(index)">
				<view 
        class="py-1 font-md text-muted text-center"
				:class="currentIdx === index ? 'class-active' : ''">
					{{item.name}}</view>
			</view>
		</scroll-view>
    
    <!-- 右侧滚动 -->
		<scroll-view 
    scroll-y 
    style="flex: 3.5;height: 100%;" 
		:scroll-top="rightScrollTop" 
    :scroll-with-animation="true"
		@scroll="onRightScroll">
			<view class="row right-scroll-item" v-for="(item,index) in list" 
			:key="index">
				<view class="span24-8 text-center py-2"
				v-for="(item2,index2) in item.list" :key="index2">
					<image :src="item2.src"
					style="width: 120upx;height: 120upx;"></image>
					<text class="d-block">{{item2.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showLoading:true,
				// 当前选中的分类
				currentIdx:0,
        // 左侧渲染列表
				cate:[],
        // 右侧渲染列表
				list:[],
        // 左侧所有位置数组
				leftDomsTop:[],
        // 右侧所有位置数组
				rightDomsTop:[],
        // 右侧滚动距离
				rightScrollTop:0,
        // 左侧滚动距离
				leftScrollTop:0,
        // 左侧单个元素高度
				cateItemHeight:0
			}
		},
		watch: {
			async currentIdx(newValue, oldValue) {
				// 获取scroll-view高度，scrollTop
				let data = await this.getElInfo({
					size:true,
					scrollOffset:true
				})
        
        // 左侧位置显示区域高度
				let H = data.height
        // 左侧位置卷曲位置高度
				let ST = data.scrollTop
        // console.log(this.cateItemHeight,H,ST,newValue,oldValue)
				// 下边
				if ((this.leftDomsTop[newValue]+this.cateItemHeight) > (H+ST) ) {
          console.log(this.leftDomsTop,this.leftDomsTop[newValue],H,ST)
					 return this.leftScrollTop = this.leftDomsTop[newValue]+this.cateItemHeight - H
				}
				// 上边
				if (ST > this.cateItemHeight) {
          console.log(ST);
					this.leftScrollTop = this.leftDomsTop[newValue]
				}
			}
		},
		onLoad() {
			this.getData()
		},
		onReady() {
      // 获取左侧元素位置
			this.getElInfo({
				all:'left',
				size:true,
				rect:true
			}).then(data=>{
				this.leftDomsTop = data.map(item=>{
					this.cateItemHeight = item.height          
					return item.top
				})
        // console.log(this.leftDomsTop)
			})
      // 获取右侧元素位置
			this.getElInfo({
				all:'right',
				size:false,
				rect:true
			}).then(data=>{
				this.rightDomsTop = data.map(item=> item.top)
        // console.log(this.rightDomsTop)
			})
		},
		methods: {
			// 获取节点信息
			getElInfo(obj = {}){
				return new Promise((res,rej)=>{
					let option = {
						size:obj.size ? true : false,
						rect:obj.rect ? true : false,
						scrollOffset:obj.scrollOffset ? true : false,
					}
					const query = uni.createSelectorQuery().in(this);
					let q = obj.all ? query.selectAll(`.${obj.all}-scroll-item`):query.select('#leftScroll')
					q.fields(option,data => {
					  res(data)
					}).exec();
				})
			},
			getData(){
				for (let i = 0; i < 20; i++) {
					this.cate.push({
						name:"分类"+i
					})
					this.list.push({
						list:[]
					})
				}
				for (let i = 0; i < this.list.length; i++) {
					for (let j = 0; j < 22; j++) {
						this.list[i].list.push({ 
							src:"/static/images/demo/cate_03.png",
							name:`分类${i}-商品${j}`,
						})
					}
				}
        // dom更新完成后执行操作
				this.$nextTick(()=>{
					this.showLoading = false
				})
			},
			// 点击左边分类
			changeCate(index){
				this.currentIdx = index
				// 右边scroll-view滚动到对应区块
				this.rightScrollTop = this.rightDomsTop[index] + 0.5
			},
			// 监听右边滚动事件
			async onRightScroll(e){
				// 匹配当前scrollTop所处的索引
				this.rightDomsTop.forEach((item,idx)=>{
					if (item < e.detail.scrollTop) {
						this.currentIdx = idx
						return false
					}
				})
			}
		}
	}
</script>

<style>
.class-active{
	border-left: 8upx solid #FD6801;color: #FD6801!important;
}
</style>
