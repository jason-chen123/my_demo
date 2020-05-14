<template>
  <div class="main">
      <p class="latest_news">最新消息</p>
 <ul class="notices">
     <div v-for="(each,i) in news" :key="i" class="news_contain">
           <li><div class="news_bgcolor" :style="i%2==0 ? '':'background-color:#387ef5'"><router-link :to='`/newsinfo?id=${each.id}`'><span class="triangle"></span><p>{{each.ntitle}}</p><span class="date">{{each.ndate}}</span></router-link></div></li>
           <!-- <li><div class="news_bgcolor" style="background-color:#387ef5"><router-link to='/c'><span class="triangle"></span><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, nesciunt.</p><span class="date">2020/03/22</span></router-link></div></li> -->
     </div>
</ul>
  </div>
</template>

<script>
export default {
    mounted(){
        this.getnews();
    },
    data(){
        return{
            news:[],
        }
    },
    methods:{
          getnews(){
    this.$axios.get('http://192.168.0.102:4002/getnews').then((res)=>{
    this.news=res.data
    })
  }
    }
}
</script>

<style lang="scss" scoped>
.triangle{
background-image: url('../assets/triangle.png');
height: 30px;
    width: 30px;
    display: inline-block;
    // background-color: #0598ce;
    background-position: 4px 3px;
    background-repeat: no-repeat;
    background-size: 80%;
    vertical-align: middle;
}
.main{
    li{
    height: 30px;
    overflow: hidden;
    
    padding: 0px 5px;
    font-size: 14px;
    }
}
.notices{
    margin-top: 20px;
    p{
    text-indent: 8px;
    cursor: pointer;
    font-size: 14px;
    color:#fff
    }
    .news_contain{
        margin-top: -10px;
    }
}
.notices li {
    overflow: hidden;
    line-height: 1;
    position: relative;
    margin: 10px 0px 10px 0px;
    padding: 0px 5px;
    border-bottom: none;
    .date{
        line-height: 30px;
        color: #fff;
    }
    .news_bgcolor{
        background-color:#886aea;
        color:#fff
    }
}
.latest_news{
    width: 100%;
    text-align: center;
    padding: 8px 0px;
    background: #0598ce;
    color: #ffffff;
    font-size: 16px;
}
</style>