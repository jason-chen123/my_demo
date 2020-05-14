<template>
 <div>
     <div class="genggai"><h1>公告列表</h1></div>
     <el-table
    :data="news"
    style="width: 100%; font-size:18px">
    <el-table-column
      label="日期"
      width="200">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.ndate }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="发布者"
      width="200">
      <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.writer }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="标题"
      width="200">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.ntitle }}</el-tag>
        </div>
      </template>
    </el-table-column>
     <el-table-column
      label="公告内容"
      width="300">
      <template slot-scope="scope">
        <span style="display:contents" v-html='scope.row.ncontent'></span>
      </template>
    </el-table-column>
    <el-table-column label="操作" width='200'>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看并编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
            content:'',
        }
    },
      methods: {
          getnews(){
              this.$axios('http://127.0.0.1:4002/getnews').then((res)=>{
                  this.news=res.data;
                  console.log(res.data)
              })
          },
      handleEdit(index, row) {
        this.$router.push({name:'changenews',params:{news:row}})
      },
      handleDelete(index, row) {
        this.$axios.delete('http://127.0.0.1:4002/delete',{
            params:{
                id:row.id
            }
        }).then((res)=>{
            if(res.data.code>0){
               if(confirm("确实要删除吗？")){
                      alert("已经删除！");
                      this.$router.go(0)
                  }else {
                      alert("已经取消了删除操作");
                  }
            }
            else{
                alert('删除失败')
            }
        })
      }
    }
}
</script>

<style>
el-table_1_column_4 .cell{
font-size:20px;
 overflow:hidden; 
text-overflow:ellipsis; 
white-space:nowrap;
display: block;
max-height: 50px;
}
.el-table .cell span{
    display: contents;
    font-size: 15px;
}
.el-table .cell{
    max-height:70px;
    line-height: 70px;
}
.el-table .cell p{
    margin:0
}
h1,h2,h3,h4{
    margin:0
}
</style>