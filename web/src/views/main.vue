<template>
<div>
  <div class="main">
      <ul class="main_contain">
        <li><img src="img/main/ind-ico1.png"  @click="jumpUrl('/cal')" alt=""><span>代收計算</span></li>
        <li><img src="img/main/ind-ico2.png"  @click="jumpUrl('/my')" alt=""><span>我的帳戶</span></li>
        <li><img src="img/main/ind-ico3.png"  @click="jumpUrl('/address')" alt=""><span>代收貨地址</span></li>
        <li><img src="img/main/ind-down.png"  @click="jump()" alt=""><span>客戶端下載</span></li>
        <li><img src="img/main/ind-ico6.png"  @click="jumpUrl('/provision')" alt=""><span>代收條款</span></li>
        <li><img src="img/main/ind-ico30.png" @click="jumpUrl('/jifen')" alt=""><span>余額/積分</span></li>
        <li><img src="img/main/ind-ico4.png"  @click="jumpUrl('/news')" alt=""><span>最新消息</span></li>
        <li><img src="img/main/ind-ico8.png"  @click="jumpWechat()" alt=""><span>微信客服</span></li>
      </ul>
<van-swipe class="my-swipe" :autoplay="3000"  indicator-color="white" height=150 style="width:100%">
  <van-swipe-item><img src="img/main/swipe01.jpg" alt="" class="swipe_t"></van-swipe-item>
  <van-swipe-item><img src="img/main/swipe02.jpg" alt="" class="swipe_t"></van-swipe-item>
</van-swipe>

<ul class="notices">
  <li class="latest"><span style="color: #00489c;">最新消息</span><span> <router-link to='/news' style="color: #00489c;">更多</router-link></span></li>
  <li v-for="(each,i) of news" :key="i"><router-link :to="`/newsinfo?id=${each.id}`"><img src="img/main/icon.png" alt="" > <p>{{each.ntitle}}</p><span class="date">{{each.ndate}}</span></router-link></li>
 <!-- <li><img src="img/main/icon.png" alt=""> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nesciunt.</p><span class="date">2020/03/22</span></li>
  <li><img src="img/main/icon.png" alt=""> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nesciunt.</p><span class="date">2020/03/22</span></li>
   <li><img src="img/main/icon.png" alt=""> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nesciunt.</p><span class="date">2020/03/22</span></li> -->
</ul>
  <div class="bg_content">
    <img src="img/main/header.gif"  style='width: 100%;
    max-width: 100%;' alt="">
  </div>
  <!-- 以下店名 -->
  <!-- 分割 -->
  <div v-for="(each,i) in title_bg.length" :key="i">
      <div style="width: 100%;
    overflow: hidden;
    margin-top: 15px; text-align:center">
  <img :src="title_bg[i]" alt="" style="width: 100%;">
  </div>
  <img :src="sub_bg[i]" alt="" style="width:100%" :id="'wechat'+i" >
  </div>
  <!-- <img src="img/main/wechat.png" alt="" style="width:100%;max-width:100%" > -->
<!--   
  <div style="width: 100%;
    overflow: hidden;
    margin-top: 15px;"></div>
  <img src="img/main/duchuan.png" alt="" style="width:100%">
  <img src="img/main/main02.gif" alt=""  style="width:100%"> -->
</div>
<div >
</div>
</div>
</template>

<script>
export default {
  mounted(){
    this.getnews()
  },
  data(){
    return{
      news:[],
      title_bg:["img/main/dianming.png","img/main/duchuan.png","img/main/fuan.png","img/main/xiahuan.png",
      "img/main/gaoshide.png","img/main/meide.png","img/main/qingzhou.png","img/main/erlonghou.png","img/main/liansheng.png",
      "img/main/wechat.png"
      ],
      sub_bg:["img/main/mian_01.gif","img/main/main02.gif","img/main/main03.gif","img/main/main04.png","img/main/main05.jpg",
      "img/main/main066.jpg","img/main/main07.jpg","img/main/main08.jpg","img/main/main09.jpg","img/main/header.gif"],
    }
  },
  methods:{
    jump(){
      window.location.href="http://longteng.zshongliu.com/appdown.html";
    },
    jumpUrl(url){
    this.$router.push(url)
  },
  jumpWechat(){
    document.querySelector('#wechat9').scrollIntoView(true)
  },
  getnews(){
    this.$axios.get('http://192.168.0.102:4002/getnews').then((res)=>{
    this.news=res.data
    })
  }
  }
}
</script>
<style lang='scss'>
.main {
    width: 100%;
    min-width: 300px;
    max-width: 640px;
    margin: 0px auto;
    padding: 0px;
    overflow: hidden;
    margin-top:5px;
}
.notices{
  background-color: #fff;
  display:flex;
  flex-direction: column;
  font-size: 16px;
    color: #666666;
    .latest{
      display: flex;
      justify-content: space-between;
      border-bottom: 0;
    }
  li{
       line-height:35px;
      border-bottom: 1px solid #00489c;
      position: relative;
    p{
      display: inline-block;
      width: 64%;
       white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    font-size: 16px;
    color: #666666;
    vertical-align: middle;
    }
  }
}
.date{
position: absolute;
right:10px;
line-height: 45px;
}
</style>
<style lang="scss" scoped>

.bg_content{
  width: 100%;
    overflow: hidden;
    margin-top: 5px;
}
// .notices{
//   background-color: #fff;
//   display:flex;
//   flex-direction: column;
//   font-size: 16px;
//     color: #666666;
//     .latest{
//       display: flex;
//       justify-content: space-between;
//     }
//   li{
//        line-height:44px;
//       border-bottom: 1px solid #00489c;
//       position: relative;
//     p{
//       display: inline-block;
//       width: 60%;
//        white-space: nowrap;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     word-break: break-all;
//     font-size: 16px;
//     color: #666666;
//     vertical-align: middle;
//     }
//   }
// }


  .swipe_t{
    height:100%;
    width:100%
  }
  .main_contain{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
      position: relative;
      width:25%;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
    margin-bottom: 10px;
    span{
      display: inline-block;
    font-size: 12px;
    color: #666;
    }
      img{
        width: 100%;
        width: 70%;
        max-width: 70px;
      }
      span{
            display: inline-block;
    font-size: 12px;
    color: #666;

      }
    }
  }
</style>