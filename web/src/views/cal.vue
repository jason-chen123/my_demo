<template>
  <div class="main">
      <div class="he_line">
         <p>代收費用自動計算器</p>
      </div>
      <div class="li_he">
          <div class="nue">
              <p>長(CM)</p>
              <input type="number" class="chang" v-model="chang">
          </div>
          <div class="nue">
              <p>寬(CM)</p>
              <input type="number" class="chang" v-model="kuang">
          </div>
          <div class="nue">
              <p>高(CM)</p>
              <input type="number" class="chang" v-model="gao">
          </div>
      </div>
      <div class="li_he">
          <div class="nue">
              <p>重量(KG)</p>
              <input type="number" class="chang" v-model="zhong">
          </div>
          <div class="nue">
              <p>ㅤ</p>
              <img src="img/cal/counted.png" alt="" @click="getMoney(chang,kuang,gao,zhong)">
          </div>
          <div class="nue">
              <p>代收費</p>
              <input type="number" class="chang" v-model="money" readonly>
          </div>
      </div>
             <img src="img/cal/cal-img.png" alt="" style="width:100%;max-width:100%" >
  </div>
</template>

<script>
export default {
data(){
    return{
        chang:'1',
        kuang:'2',
        gao:'3',
        zhong:'4',
        money:'',
    }
},
methods:{
    getMoney(c,k,g,z){
        c=parseFloat(c)
        k=parseFloat(k)
        g=parseFloat(g)
        z=parseFloat(z)
        let total;
        total=c+k+g+z
       total=total.toFixed(2)
        console.log(total)
				if(c==''||c==0||isNaN(c))
				{
					alert('長度不能為空或0');
					return false;
				}
				if(k==''||k==0||isNaN(k))
				{
					alert('寬度不能為空或0');
					return false;
				}
				if(g==''||g==0||isNaN(g))
				{
					alert('高度不能為空或0');
					return false;
				}
				
				if(z==''||z==0||isNaN(z))
				{
					alert('重量不能為空或0');
					return false;
				}
				return true;
			}
}
}
</script>

<style lang="scss">
.li_he{
    overflow: hidden;
    margin: 10px 0px;
}
.main .li_he .nue {
    width: 33%;
    float: left;
    text-align: center;
}
.main .li_he .nue p {
    font-size: 16px;
    color: #ccc;
    text-align: center;
    margin-bottom: 10px;
}
.main .li_he input{
        width: 78px;
    height: 26px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #EEEEEE;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    }
.he_line {
    height: 40px;
    background: #0598ce;
    p{
        line-height: 40px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    }
    
}
</style>>