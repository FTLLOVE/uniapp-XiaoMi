import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 全局组件使用
import Divider from '@/components/common/Divider.vue';
Vue.component('Divider',Divider)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
