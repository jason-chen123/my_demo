import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Writenews from '../views/Writenews'
import Listnews from '../views/Listnews'
import Changenews from '../views/Changenews'
import Login from '../views/Login'
import Emplist from '../views/Emplist'
import Ruku from '../views/Ruku'
import Dingdan from '../views/Dingdan'
import { Store } from 'vuex'
import store from '../store'
import dialog from '../components/Dialog'
import gaode from '../components/gaode'
Vue.use(VueRouter)
// Vue.use(Store)
  const routes = [
    {path:'/',
    redirect:'/login'
    },
    {path:'/dialog',
    name:'dialog',
    component:dialog
    },
    {path:'/gaode',
    name:'gaode',
    component:gaode
    },
  {
    path: '/home',
    name: 'Home',
    meta:{require:true},
    component: Home,
    children:[
      {
      path:'writenews',
      name:'writenews',
      meta:{require:true},
      component:Writenews
      },
      {
        path:'dingdan',
        name:'dingdan',
        meta:{require:true},
        component:Dingdan
        },
      {
      path:'listnews',
      name:'listnews',
      meta:{require:true},
      component:Listnews
      },
      {
        path:'changenews',
        name:'changenews',
        meta:{require:true},
        component:Changenews
      },
      {
        path:'emplist',
        name:'emplist',
        meta:{require:true},
        component:Emplist
      },
      {
        path:'ruku',
        name:'ruku',
        meta:{require:true},
        component:Ruku
      },
  ]
  },
  {
    path:'/login',
    name:'login',
    component:Login
    },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  console.log(from)
  if(to.matched.some(function(item){
    return item.meta.require
  }))    {
    if(store.state.ifLogin){
      next()
    }
    else if(sessionStorage.store){
      next()
    }
    else{ 
      next({
        path:'/login',
        query:{redirect:to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else next()
})
export default router
