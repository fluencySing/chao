import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueWechatTitle from 'vue-wechat-title'

Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(VueWechatTitle)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
