// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'

import './mock/mockServer' // 加载mockServer即可
// 引入VueLazyload插件
import VueLazyload from 'vue-lazyload'
// 将一张loading图片加载进来
import loading from './common/imgs/loading.gif'
import './filters'// 加载过滤器

/* eslint-disable no-new */

Vue.config.productionTip = false

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
/*

 */
