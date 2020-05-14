<template>
  <div class="rich-contain" id="rich-contain">
    <div class="rich-top rich-border">
        <h1 class="ding_title">订单统计</h1>
          <ve-line :data="chartData_dingdan" :settings="chartSettings" :extend="extend"></ve-line>
    </div>
    <div class="rich-bottom ">
      <div class="rich-bleft">
          <Zhu :chartData_churuku='chartData_churuku'></Zhu>
      </div>
       <div class="rich-bright">
          <div class="daiban">
            <img src="../assets/fenge.jpg" alt="" class="daiban_img">
            <div class="daiban_top">
              <h3 class="ding_title">代办提醒</h3>
              <h1 class="subtitle"><i class="el-icon-suitcase" style="color:blue;font-size:20px"></i> 入库管理</h1>
              <div class="subtitle_contain">
                <span> <i class='el-icon-s-order' style="color:#dddddd"></i>草稿</span>
                <span><i class="el-icon-loading" style="color:blue"></i> 执行中</span>
                <span class="count">60</span>
                <span class="count">700</span>
              </div>
            </div>
            <div class="daiban_bottom">
              <h1 class="subtitle"><i class="el-icon-suitcase" style="color:#FEB300;font-size:20px"></i> 出库管理</h1>
               <div class="subtitle_contain">
                <span> <i class='el-icon-s-order' style="color:#dddddd"></i>草稿</span>
                <span><i class="el-icon-loading" style="color:blue"></i> 执行中</span>
                <span class="count">60</span>
                <span class="count">700</span>
              </div>
            </div>
          </div>
          <div class="kunei">
            <h3 class="ding_title">库内统计</h3>
            <div class="kunei_contain">
               <ul class="items_contain">
              <li>4</li>
              <li>库内总数</li>
            </ul>
             <ul class="items_contain">
              <li>288</li>
              <li>库位总数</li>
            </ul>
             <ul class="items_contain">
              <li>560</li>
              <li>客户总数</li>
            </ul>
             <ul class="items_contain">
              <li>2300</li>
              <li>物品总数</li>
            </ul>
             <ul class="items_contain">
              <li>130</li>
              <li>品牌总数</li>
            </ul>
            </div>
          </div>
       </div>
    </div>

  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import Zhu from '../components/Zhu'
export default {
      components:{
      VeLine,
      // VeHistogram,
      Zhu
    },
      data () {
       this.extend = {
          // title: { text: this.currentYear + "年数据统计", left: "center" },
        series: {
          label: {
            normal: {
              show: true
            }
          }
        }}
      this.chartSettings = {
        xAxisName:['日期']
      }
      
      return {    chartData_churuku:{
          columns: ['收货店铺', '出库数量', '入库数量'],
          rows: [
            { '收货店铺': '广福祥', '出库数量': 9393, '入库数量': 1093},
            { '收货店铺': '渡船巷', '出库数量': 3530, '入库数量': 3230,},
            { '收货店铺': '福安街', '出库数量': 2923, '入库数量': 2623,},
            { '收货店铺': '下环街', '出库数量': 1723, '入库数量': 1423,},
            { '收货店铺': '高士德', '出库数量': 3792, '入库数量': 3492, },
            { '收货店铺': '美的', '出库数量': 4593, '入库数量': 4293, },
            { '收货店铺': '青州', '出库数量': 2332, '入库数量': 4444, },
            { '收货店铺': '二龙喉', '出库数量': 5000, '入库数量': 7000, },
            { '收货店铺': '连胜街', '出库数量': 1032, '入库数量': 2400, }
          ]
        },
        chartData_dingdan: {
          columns: ['日期', '下单用户', '运费金额'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093,'运费金额':1000},
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230,'运费金额':3230 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623 ,'运费金额':830},
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423 ,'运费金额':8230},
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492 ,'运费金额':20230},
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293,'运费金额':4230 },
             { '日期': '1/7', '访问用户': 1393, '下单用户': 1093 ,'运费金额':3530},
            { '日期': '1/8', '访问用户': 3530, '下单用户': 3230 ,'运费金额':1230},
            { '日期': '1/9', '访问用户': 2923, '下单用户': 2623 ,'运费金额':7230},
            { '日期': '1/10', '访问用户': 1723, '下单用户': 1423,'运费金额':5230 },
            { '日期': '1/11', '访问用户': 3792, '下单用户': 3492,'运费金额':38230 },
            { '日期': '1/12', '访问用户': 4593, '下单用户': 4293 ,'运费金额':3230}
          ]
        }
      }
    },
}
</script>

<style>
ul{
  list-style-type: none;
}
.kunei_contain{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 80%;
}
.items_contain li:first-child{
  font-size: 20px;
  font-weight: 600;
  color:#5C5C66
}
.kunei_contain ul{
  width: 50%;
  padding: 0;
  background-image: url('../assets/fenge.jpg');
  background-position: 10px 10px;
      background-position: 145px 71px;
  /* margin-top: 25px; */
}
.subtitle_contain{
  margin-top: 20px;
  /* display: flex;
  justify-content: space-between; */
}
.subtitle{
  margin-top: 20px;
  
}
.count{
  color:#4657FF;
  font-size:20px;
  font-weight: 600;
}
.subtitle_contain>span{
  
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding: 10px;
}
.ding_title{
  padding: 10px 0; 
  margin-bottom: 15px;
  border-bottom: 2px solid rgb(191, 201, 224);
}
.rich-contain{
  width: 100%;
  /* border: 1px solid #000; */
}
.rich-border{
  /* margin-bottom: 20px; */
  border: 20px solid #F8FAFF;
}
.rich-bottom{
  width: 100%;
  display: flex;
}
.rich-bleft{
  width: 50%;
}
.rich-bright{
  width: 50%;
  display: flex;
  text-align: center;
}
.daiban{
  position: relative;
width: 50%;
display: flex;
flex-direction: column;
  /* border: 1px 10px solid #F8FAFF; */
  /* background-image: url('../assets/fenge.jpg'); */
  /* background: no-repeat;
  background-position: 10px 10px; */
}
.daiban_img{
      position: absolute;
    z-index: -1;
    height: 25%;
    width: 100%;
    top: 38%;
}
.daiban_top{
  height:50%;
  position: relative;
}
.subtitle{
  margin-top: 10 0px;
}
.daiban_bottom{
  height:50%;

}
.kunei{
  width:50%;

}
</style>