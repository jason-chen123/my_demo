<template>
<div>
    <div class="clear_tabbar"></div>
  <van-tabbar class="tabbar" v-model='active'>
  <van-tabbar-item v-for="(each,i) in tabbars" :key="i" :to="(each.name)"  class="tabbar-img"><!--icon="img/tabbar/home.png"-->
    <!-- <span>首页</span> -->
    <img slot="icon" slot-scope="props"  :src="props.active ? each.active_img : each.default_img" @click="jumpWechat()"/>
  </van-tabbar-item>

</van-tabbar>
</div>
</template>

<script>
export default {
    data(){
        return{
            active:0,
            tabbars:[{
                name:'/',
                default_img:"img/tabbar/home.png",
                active_img:"img/tabbar/kefu.png"
            },
            {
                name:'/cal',
                default_img:"img/tabbar/cal.png",
                active_img:"img/tabbar/cal2.png"
            },{
                name:'/address',
                default_img:"img/tabbar/address.png",
                active_img:"img/tabbar/address.png"
            },
            {
                name:'/my',
                default_img:"img/tabbar/my.png",
                active_img:"img/tabbar/my.png"
            }]
        }
    },
    methods:{
        // 跳转描点
        jumpWechat(){
            // console.log(this.active)
            if(document.querySelector('#wechat9')==null){
                return
            }
             else if(this.active==1){
                 return
             } 
             else document.querySelector("#wechat9").scrollIntoView(true);
        }
    }
}
</script>

<style>
.clear_tabbar{
      display: block;
    clear: both;
    height: 75px;
}
.van-tabbar-item__icon{
    display: block;
 min-width: 1em;
 width: 70px;
 height: 60px;
 margin-bottom: 0;
}
.van-tabbar-item__icon img {
    width: 100%;
    max-width: 100%;
    height:100%
}
.van-tabbar{
  height:60px;
  box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
    -webkit-box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
    -moz-box-shadow: 0 0 10px 0 rgba(155,143,143,0.6);
}
.van-tabbar-item__icon .van-icon {
    display: block;
    min-width: 1em;
    width: 70px;
    height: 60px;
}
</style>