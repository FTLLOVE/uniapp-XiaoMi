import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 全局组件使用
import Divider from '@/components/common/Divider.vue';
import Card from '@/components/common/Card.vue';
import Price from '@/components/common/Price.vue';
Vue.component('Divider',Divider)
Vue.component('Card',Card)
Vue.component('Price',Price)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
