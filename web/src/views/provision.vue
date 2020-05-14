<template>
  <div class="main">
    <div class="title_pro">常見問題</div>
    <ul>
      <li class="firstChild">
        <div class="header">
          <img :src="clear==true?'img/provision/arrow.png':'img/provision/arrow2.png'" alt />
          <div class="txt2" @click="slideUpDown()">★新手★請看代收條款</div>
        </div>
        <div class="menu-twos" style="display: block" ref="menu" id="menu">
          <div class="nub_content">
            <span style="font-size:18px;color:#FFFFFF;background-color:#E53333;">
              <strong>龍騰淘寶代收條款:</strong>
            </span>
            <br />
            <span style="font-size:18px;">1.填寫收貨人信息時，請按照本店代收流程正確填寫信息。</span>
            <br />
            <span style="font-size:18px;">2<span style="font-size:18px;line-height:27px;">.</span>由於貨物運送至澳門有機會被海關扣檢，所以貨物有機會被海關拆開檢查，本公司概不負責。
            </span>
            <br />
            <span style="font-size:18px;">3<span style="font-size:18px;line-height:27px;">.</span>嚴禁寄運非法，冒牌，侵权等所有違法物品到澳，否則將承擔一切法律責任，本公司概不負責並有追究之權利。
            </span>
            <br />
            <span style="font-size:18px;">4.貨物簽收後，本公司通知後30日內，未到店內取貨，本公司有權加收存倉費或者視為棄件處理。</span>
            <br />
            <span style="font-size:18px;">5.賠償問題，如因本公司簽收後造成遺失，本公司有義務作出賠償，賠償金額最高上限為100mop<span style="font-size:18px;line-height:27px;">。</span>
            </span>
            <br />
            <span style="font-size:18px;"> 6.如海關檢查留倉，天災，火災，颱風不可抗力導致充公損壞，延遲所有損失本公司均不會作出賠償<span style="font-size:18px;line-height:27px;">。</span></span>
            <span style="font-size:18px;"></span>
            <span style="font-size:18px;"></span>
            <br />
            <p>
              <span style="font-size:16px;"></span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            clear:true
        }
    },
    methods:{
        slideUpDown(){
          this.clickUpDown.clickUpDown('700px','menu',700)
          this.clear=!this.clear
        }
    }
};
</script>

<style lang="scss" scoped>
.title_pro {
  width: 100%;
  text-align: center;
  padding: 8px 0px;
  background: #0598ce;
  color: #ffffff;
  font-size: 16px;
}
.header{
    height:30px
}
.main {
  ul {
    margin-top: 20px;
    .firstChild {
      border: 0;
      height: auto;
      overflow: hidden;
      margin: 10px 0px;
      padding: 0px 5px;
    }
  }
}
.header {
  display: flex;
  align-items: center;
}
.arrow {
  float: left;
  width: 30px;
  height: 30px;
  background: url("../assets/arrow.png") no-repeat center center;
  -webkit-background-size: 30px 30px;
  background-size: 30px 30px;
}
.txt2 {
  color: #1d2088;
  font-size: 16px;
  margin-left: 6px;
}
</style>