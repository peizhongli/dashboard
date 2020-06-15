import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../views/mainPage1'//首页
import page2 from '../views/mainPage2'//需要跳转的页面 给组件重新命名
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'page1',
      component: page1,
    },
    {//需要跳转的页面
        path:'/page2',
        name:'page2',
        component:page2,//组件名字
      
    }
  ]
})