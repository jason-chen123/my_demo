import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import cal from '../views/cal'
import reg from '../views/reg'
import news from '../views/news'
import newsinfo from '../views/newsinfo'
import address from '../views/address'
import my from '../views/my'
import register from '../views/register'
import provision from '../views/provision'
import login from '../views/login'
Vue.use(VueRouter)
import { Swipe, SwipeItem } from 'vant';
import store from '../store'
import jifen from '../views/jifen'
Vue.use(Swipe,SwipeItem);

  const routes = [
  {
    path: '/',
    name: 'main',
    component: main
  },
  {
    path: '/newsinfo',
    name: 'newsinfo',
    component: newsinfo
  },
  {
    path:'/login',
    name:'login',
    component:login
  },
  {
    path: '/news',
    name: 'news',
    component: news
  },
  {
    path: '/reg',
    name: 'reg',
    component: reg,
  },
  {
    path:'/register',
    name:'register',
    component:register
  },
  {
    path:'/provision',
    name:'provision',
    component:provision
  },
  {
    path: '/cal',
    name: 'cal',
    component: cal
  },
  {
    path: '/address',
    name: 'address',
    meta:{require:true},
    component: address
  },
  {
    path: '/jifen',
    name: 'jifen',
    meta:{require:true},
    component: jifen
  },
  {
    path: '/my',
    name: 'my',
    meta:{require:true},
    component: my
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(from)
  if(to.meta.require){
    if(store.state.login){
      next()
    }
    else{ 
      next({
        path:'/reg',
        query:{redirect:to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else next()
})

export default router
