import Vue from 'vue'
import App from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'
//引入路由
import news from './components/news.vue';

//使用路由中间件
Vue.use(VueRouter);
//定义路由规则
const router = new VueRouter({
  routes:[
    { path: '/news',component:news}
  ]
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载路由规则
  router
}).$mount('#app')
