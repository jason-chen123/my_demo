import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAMap from 'vue-amap'; // 高德
 
 //使用高德
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'b24c173082ecec2ac12daf2b5dbd9607',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  v: '1.4.4'
});
// import VeLine from 'v-charts/lib/line.common'
// Vue.component(VeLine.name, VeLine)
// Vue.use(VeLine)
// import echarts from 'echarts'
// import {Form} from 'element-ui';
// Vue.use(Form)
Vue.prototype.$axios=axios;
// Vue.prototype.$echarts=echarts
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
