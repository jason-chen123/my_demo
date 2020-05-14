<template>
  <div>
      <div class="genggai"><h1>员工管理</h1></div>
      <el-table
    :data="emplist"
    style="width: 100%; font-size:18px">
    <el-table-column
      label="用户"
      width="300">
      <template slot-scope="scope">
            <el-tag size="medium">{{ scope.$index+1 }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="用户名"
      width="300">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.uname }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
     <el-table-column
      label="权限"
      width="300">
      <template slot-scope="scope">
        <span>
            {{scope.row.rights=='admin'?'管理员':'普通用户'}}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="权限操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row.id,scope.row.uname)" v-show="scope.row.rights=='user'">提升权限</el-button>
          <!--  -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id,scope.uname)"  v-show="scope.row.rights=='user'">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
    mounted(){
        this.getemplist()
    },
    data(){
        return{
            emplist:[]
        }
    },
    methods:{
        getemplist(){
            this.$axios('http://127.0.0.1:4002/getemplist').then((res)=>{
                if(res.data.code>0){
                    this.emplist=res.data.msg
                }
                else{
                    alert('获取失败，请重试')
                }
            })
        },
        handleEdit(id,uname){
            // console.log(id+'|'+uname)
            if(this.$store.state.login[0].rights=='user'){
                alert('无权限修改，请联系管理员');
                return
            }
             else this.$axios.put('http://127.0.0.1:4002/rights',{
                params:{
                    id:id,
                    uname:uname
                }
            }).then((res)=>{
                if(res.data.code>0){
                    alert('已提升权限');
                    this.$router.go(0)
                }
                else{
                    alert('提升权限失败')
                }
            })
        },
        handleDelete(id,uname){
             if(this.$store.state.login[0].rights=='user'){
                alert('无权限删除用户，请联系管理员');
                return
            }
            else{this.$axios.delete('http://127.0.0.1:4002/deleteemp',{
            params:{
                id:id,
                uname:uname
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
        }}
    }
}
</script>

<style>

</style>