<template>
 <div>
     <div class="dialog_contain" :class="{'dialog_active':ifOpen}">
       <table >
           <tbody>
               <tr>
                   <td>日期：</td>
                   <td> <div class="block">
    <el-date-picker
      v-model="time"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
                   <td>直达站</td>
                   <td><el-input v-model="input" placeholder="请输入内容"></el-input>
</td>
                   <td>中转至</td>
                   <td><el-input v-model="input" placeholder="请输入内容"></el-input>
</td>
               </tr>
               <tr>
                   <td>卡号：</td>
                   <td><el-input style="width:220px" v-model="input" placeholder="请输入内容"></el-input>
</td>

                   <td>发货人</td>
                   <td><el-input v-model="msg.itemMaster" placeholder="请输入内容"></el-input>
</td>
 
                   <td>电话</td>
                   <td><el-input v-model="input" placeholder="请输入内容"></el-input>
</td>
               </tr>
                 <tr>
                   <td>票号：</td>
                   <td><el-input v-model="msg.itemId"  style="width:220px" placeholder="请输入内容"></el-input>
</td>

                   <td>收货人</td>
                   <td><el-input v-model="input" placeholder="请输入内容"></el-input>
</td>

                   <td>电话</td>
                   <td><el-input v-model="input" placeholder="请输入内容"></el-input>
</td>
               </tr>
               <tr style="height:30px "></tr>
                <tr  style="text-align:center">
                   <td colspan="2">货物名称</td>
                   <td>包装</td>
                   <td>数量</td>
                   <td>运费</td>
                   <td>重量</td>
                   <td>体积</td>
                   <td>结算方式</td>
               </tr>
                <tr  style="text-align:center">
                   <td colspan="2"><el-input style="width:220px" v-model="input" placeholder="请输入内容"></el-input></td>
                   <td><select name="" id="">
                       <option value="wu">无</option>
                        <option value="you">有</option>
                       </select></td>
                   <td><select name="" id="">
                       <option value="wu">无</option>
                        <option value="you">有</option>
                       </select></td>
                   <td><el-input style="width:100px" v-model="input" placeholder="运费" readonly></el-input></td>
                   <td><el-input style="width:100px" v-model="input" placeholder="重量" readonly></el-input></td>
                  <td><el-input style="width:100px" v-model="input" placeholder="体积" readonly></el-input></td>
                   <td><select name="" id="">
                       <option value="wu">到付</option>
                        <option value="you">网上结账</option>
                       </select></td>
               </tr>
           </tbody>
       </table>
         <button @click="openDialog()" class="sendChange">修改</button>
     </div>
 </div>
</template>

<script>
export default {
props:{
    message:{
        type:Object,
        default:()=>{
           return {}
        }
    }
},
data(){
    return{
        ifOpen:false,
        input:'',
        time:'',
        data:this.message,
        msg:{}
    }
},
methods:{
    getParentMsg(msg){
        this.msg=msg;
        console.log(this.msg)
    },
    // stop(){
    //     var mo=function(e){e.preventDefault();};
    //     document.body.style.overflow='hidden';
    //     document.addEventListener("touchmove",mo,false);//禁止页面滑动
    // },
    // /***取消滑动限制***/
    // move(){
    //     var mo=function(e){e.preventDefault();};
    //     document.body.style.overflow='';//出现滚动条
    //     document.removeEventListener("touchmove",mo,false);
    // },
    openDialog(){
        this.$parent.move()
        this.ifOpen=!this.ifOpen
    }
}
}
</script>
<style lang="scss" scoped>
table{
    padding:20px;
    height:80%;
    width: 80%;
    position: absolute;
    background-color: #fff;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
   td{
        border: 1px solid #dddddd;
   }
}
.sendChange{
    outline: 0;
    line-height: 20px;
    height: 43px;
    width: 90px;
    background-color: cyan;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
}
.dialog_contain{
    position:fixed;
    // min-height:300px;
    height:0;
    overflow: hidden;
    // width:600px;
    width:0px;
    // background-color: aqua;
    border-radius: 0;;
    top: 50%;
    left:50%;
    transition: all .1s ease-in;
    transform: translate(-50%,-50%);
    text-align: center;
}
.dialog_active{
min-height: 100%;
width: 100%;
background-color: rgba(99, 100, 98,.5);
// border-radius: 50px;
}
</style>>
