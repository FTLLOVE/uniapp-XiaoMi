<template>
  <view>
    <!-- 排序和筛选 -->
    <view class="d-flex border-top border-bottom  search-choose a-center">
      <view v-for="(item,idx) in screen.list" :key="idx" class="flex-1 d-flex a-center j-center font-md" @tap="changeScreen(idx)">
        <text :class="screen.currentIndex === idx? 'c-main' : 'text-muted'">{{item.name}}</text>
        <view>
          <view class="iconfont icon-paixu-shengxu line-h0 c-main font-lg" :class="item.status===1?'main-text-color':'text-light-muted'"></view>
          <view :class="item.status===2?'c-main':'text-light-muted'" class="iconfont icon-paixu-jiangxu line-h0  font-lg"></view>
        </view>
      </view>
      <view @tap="showRight = true" class="flex-1 d-flex a-center j-center font-md">
        <text class=" c-main">筛选</text>
      </view>
    </view>

    <!-- 列表 -->
    <block v-for="(item,index) in list" :key="index">
      <search-list :item="item" :index="index"></search-list>
    </block>
        
    <!-- 抽屉组件 -->
    <uni-drawer :visible="showRight" mode="right" @close="showRight = false">
      <card headTitle="服务" :borderBottom="false">
        <!-- 单选按钮 -->
        <my-radio-group :label="label" :selected.sync="label.selected">
        </my-radio-group>
      </card>

      <!-- 按钮组 -->
      <view class="d-flex position-fixed bottom-0 right-0 w-100 border-top border-light-secondary">
        <view class="flex-1 bgc-main text-white font-md py-2 text-center" hover-class="bgc-hover">确定</view>
        <view class="flex-1 font-md py-2 text-center" hover-class="bg-light-secondary">重置</view>
      </view>
    </uni-drawer>
  </view>
</template>

<script>
  import uniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer.vue'
  import MyRadioGroup from '@/components/common/MyRadioGroup.vue'
  import SearchList from '@/components/search/SearchList.vue'
  export default {
    components: {
      uniDrawer,
      MyRadioGroup,
      SearchList
    },
    data() {
      return {
        // 搜索列表数据
        list: [{
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          },
          {
            title: "真无限蓝牙耳机",
            titlepic: "/static/images/demo/demo6.jpg",
            desc: "雅致简约 / 分体式入耳 / 收纳盒充电 / 蓝牙5.0 / 触控操作",
            pprice: 100,
            comment_num: 1300,
            good_num: "98%"
          }
        ],
        showRight: false,
        screen: {
          currentIndex: 0,
          list: [{
              name: "综合",
              status: 1
            },
            {
              name: "销量",
              status: 0
            },
            {
              name: "价格",
              status: 0
            }
          ]
        },
        // 单选按钮
        label: {
          selected: 0,
          list: [{
              name: "选项一"
            },
            {
              name: "选项二"
            },
            {
              name: "选项三"
            },
          ]
        }
      }
    },
    methods: {
      // 1、切换排序
      changeScreen(index) {
        // 判断当前点击是否已经是激活状态
        let oldIndex = this.screen.currentIndex
        let oldItem = this.screen.list[oldIndex]
        if (oldIndex === index) {
          return oldItem.status = oldItem.status === 1 ? 2 : 1
        }
        let newIitem = this.screen.list[index]
        // 移除旧激活状态
        oldItem.status = 0
        this.screen.currentIndex = index
        // 增加新激活状态
        newIitem.status = 1
      }
    }
  }
</script>

<style lang="stylus">
.search-choose 
  height: 100upx;
</style>
