import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import FastClick from 'fastclick'
FastClick.attach(document.body)/* 解决移动端300ms延迟 */

import VueLazyLoad from 'vue-lazyload'/* 图片懒加载 */
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

import toast from 'components//common/toast/index'
Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
