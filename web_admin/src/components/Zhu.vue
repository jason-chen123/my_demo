<template>
<div style="text-align:center">
    <h1 class="ding_title">各网点出入库统计</h1>
 <ve-histogram :data="chartData_churuku" :settings="chartSettings" :extend="extend" ></ve-histogram>

</div>

</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common'
export default {
      components:{
      VeHistogram
    },
    props:{
      chartData_churuku:{
        type:Array,
        default:[]
      }
    },
    name:'Zhu',
      data () {
          this.extend={
      legend: {
        show: true,
        bottom: "bottom"
      },
      color: ["#FFCC07",'#1F75F1'],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",//type:"cross"
          crossStyle: {
            color: "#999"
          }
        }
      }
    };
    //    this.extend = {
    //        title: { text: 2020 + "年数据统计", left: "center" },
    //         legend: {
    //      show: true,
    //      bottom: "bottom"
    //       },
    //   color:['#FFCC07','#1F75F1'],
    //     series: {
    //       label: {
    //         normal: {
    //           show: true
    //         }
    //       }
    //     }}
      this.chartSettings = {
        metrics: ['出库数量', '入库数量'],
        // dimension: ['日期'],
        // yAxisName: ['数值'],
        // xAxisName:['日期']
      }
      
      return {
        // chartData_churuku:{
        //   columns: ['收货店铺', '出库数量', '入库数量'],
        //   rows: [
        //     { '收货店铺': '广福祥', '出库数量': 1393, '入库数量': 1093},
        //     { '收货店铺': '渡船巷', '出库数量': 3530, '入库数量': 3230,},
        //     { '收货店铺': '福安街', '出库数量': 2923, '入库数量': 2623,},
        //     { '收货店铺': '下环街', '出库数量': 1723, '入库数量': 1423,},
        //     { '收货店铺': '高士德', '出库数量': 3792, '入库数量': 3492, },
        //     { '收货店铺': '美的', '出库数量': 4593, '入库数量': 4293, },
        //     { '收货店铺': '青州', '出库数量': 2332, '入库数量': 4444, },
        //     { '收货店铺': '二龙喉', '出库数量': 5000, '入库数量': 7000, },
        //     { '收货店铺': '连胜街', '出库数量': 1032, '入库数量': 2400, }
        //   ]
        // },
      }
    },
}
</script>

<style>

</style>