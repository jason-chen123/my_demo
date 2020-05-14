<template>
  <div class="main">
      <div class="content">
          <div class="newsimg">
            <img src="img/newsinfo/return.png" alt="" @click="back()">
          </div>
          <div class="news_title">
              <!-- 回復正常收貨營業
              <br>
					(2020/02/13) -->
                    {{news.ntitle}}
                    <br>
                    ({{news.ndate}})
          </div>
          <div class="menu-ones">
              <div class="nub_content" style="margin: 0px;padding: 0px;font-size: 17px;text-align: justify;" v-html="message">
                  
              </div>
              
          </div>
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
            news:'',
            message:'',
//             `<p>
// 	尊敬的客戶&nbsp;
// </p>
// <p>
// 	&nbsp;感謝大家一直對龍騰的支持和鼓勵。&nbsp;
// </p>
// <p>
// 	為方便各區的顧客取貨，高士德分店和&nbsp;
// </p>
// <p>
// 	美的路分店於2020年3月27日正式投入&nbsp;
// </p>
// <p>
// 	服務。&nbsp;
// </p>
// <p>
// 	高士德分店&nbsp;
// </p>
// <p>
// 	店鋪位置：爹利仙拿姑娘街34號永寧大&nbsp;
// </p>`
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        getnews(){
       let id=this.$route.query.id;
        this.$axios.get('http://192.168.0.102:4002/getonenews',{
            params:{
                id:id
            }
        }).then((res)=>{
            this.news=res.data[0];
            console.log(this.news);
            this.message=res.data[0].ncontent
        })
        }
    }
}
</script>

<style scoped>
.nub_content>>>p{
    padding:10px
}
</style>

<style lang="scss" scoped>
.menu-ones{
    margin-top: 20px;
}
.nub_content{
    width: 100%;
}
.newsimg{
    text-align: center;
    padding:7px 0px
}
.news_title{
        width: 100%;
    text-align: center;
    padding: 8px 0px;
    background: #0598ce;
    color: #ffffff;
    font-size: 16px;
}
</style>