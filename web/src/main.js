import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import Header from './components/Header'
Vue.component('headers',Header)
import { Tabbar, TabbarItem } from 'vant';
import Tabbar_b from './components/tabbar'
import clickUpDown from './assets/API/clickUpDown'
import axios from 'axios'
Vue.prototype.$axios=axios;
Vue.component('tabbar',Tabbar_b)
Vue.use(clickUpDown)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false
Vue.prototype.clickUpDown=clickUpDown
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
