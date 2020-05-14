<template>
  <div class="ruku">
      
     <!-- :data="isSearch===true? items.filter(data => !search || data.itemId==search):datashow" -->
      <el-table
    :data="isSearch===true? items.filter(data => !search || data.itemId==search):datashow"
    :default-sort = "{prop: 'ndate', order: 'descending'}"
    style="width: 100%; font-size:12px">
     <el-table-column
      label="序号">
      <template slot-scope="scope">
          <div  class="name-wrapper">
            <el-tag size="medium">{{ scope.$index+(currentCount-1)*pageSize+1}}</el-tag>
        </div>
      </template>
    </el-table-column>
    
     <el-table-column
      :label="each.name" v-for="(each,i) in title" :key="i">
      <template slot-scope="scope">
          <div  class="name-wrapper">
            <el-tag size="medium">{{ scope.row[each.subname] | getState(each.subname)}}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot="header">
          <div style="display:flex">
               <el-input
            @focus="isSearch=true"
            @blur="isSearch=false"
          v-model="search"
          size="mini"
          placeholder="输入订单编号搜索"/>
          </div>
       
      </template>

      <template slot-scope="scope">
          <div  class="name-wrapper">
            <el-tag size="medium">
                <el-button type="danger" size=mini  @click="handleEdit(scope.row)" circle >操作</el-button>
            </el-tag>
        </div>
      </template>
    </el-table-column>
    <!-- 在table-colum上传递prop -->
     <!-- <el-table-column   prop="ndate" sortable>
      <template slot="header" >
          <span >预计到货时间</span>
      </template>
      <template slot-scope="scope">
          <div class="name-wrapper">
            <el-tag size="medium">{{ scope.row.ndate }}</el-tag>
        </div>
      </template>
    </el-table-column> -->
  </el-table>
  <div>
 <el-pagination
  :total="items.length"
  layout="prev, pager, next" style="text-align:center" @current-change="getCount">
</el-pagination>
</div>
<!-- 弹出 -->
<Dialog :message="{}" ref="dia"></Dialog>
<!-- 遮罩 -->
<div :class="{'zhezhao':isZhezhao}"></div>
  </div>
</template>

<script>
import Dialog from '../components/Dialog'
export default {
    created(){
       this.showdata();
    },
    components:{
        Dialog
    },
    data(){
        return{
            // each:[],
            // 默认第一页
        //  formLabelWidth: '120px',
        //      dialogTableVisible: false,
            isZhezhao:false,
            isSearch:false,
            currentCount:1,
            pageSize:10,
            datashow:[],
            search:'',
            getOneId:[],
            title:[{name:'订单编号',subname:'itemId'},{name:'物流状态',subname:'itemState'},{name:'货主',subname:'itemMaster'},{name:'订单创建人',
            subname:'setMaster'},{name:'预计到货时间',subname:"preTime"}],
            items:[
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:70000,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {   
                    itemId:75432,
                    itemState:0,
                    itemMaster:'阿权',
                    setMaster:'权哥',
                    preTime:'2020-5-1'
                },
                {
                    itemId:75433,
                    itemState:0,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                 {
                    itemId:75433,
                    itemState:1,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                 {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                   {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                   {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                   {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                   {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2110-9-2'
                },
                   {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },
                   {
                    itemId:75433,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2011-1-1'
                },
                   {
                    itemId:75430,
                    itemState:2,
                    itemMaster:'阿陈',
                    setMaster:'陈少',
                    preTime:'2020-5-2'
                },

            ]
        }
    },
    methods:{
        stop(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    },
    /***取消滑动限制***/
    move(){
        var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    },
        // searchId(){
        //     this.items.forEach((ele,i) => {
        //        if(ele.itemId==this.search){
        //            getOneId[0]=ele
        //        }
        //     });
        // },
        handleEdit(data){
            // this.ifZhezhao=true
            // console.log(this.$refs)
            this.$refs.dia.getParentMsg(data)
            this.$refs.dia.openDialog()
            this.stop()
        },
        getCount(count){
            // 改变data里定义的页数
           this.currentCount=count;
           this.showdata()
           console.log(this.currentCount)
        },
        showdata(){
            // (this.currentCount-1)*10,(this.currentCount-1)*10+10-1 |0,10 11,20 21 30
            if(this.currentCount==1){
                this.datashow=this.items.slice(0,10)
            }
          else this.datashow=this.items.slice((this.currentCount-1)*10+1,this.currentCount*10)
        }
    },

    // 过滤器
    filters:{
        getState(value,subname){
            if(subname=='itemState'){
               switch(value){
                       case 0:
                       return '未发货'
                       break;
                       case 1:
                       return '已发货'
                       break;
                       case 2:
                       return '已收货'
                       break;
                       
               }
            }
            else{return value}
        },
    }
}
</script>

<style>
.zhezhao{
    position: fixed;
    z-index: 1000;
    background-color: rgb(99, 100, 98);;
}
.el-table th>.cell {
    text-align: center;
}
.name-wrapper{
    text-align: center;
}
</style>