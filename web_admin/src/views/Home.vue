<template>
  <el-container  style="min-height: 1000px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>公告列表</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/home/writenews">发布公告</el-menu-item>
          <el-menu-item index="/home/listnews">公告列表</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
            <el-submenu index="2">
        <template slot="title"><i class="el-icon-user-solid"></i>员工列表</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/home/emplist">员工管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    <el-submenu index="3">
        <template slot="title">、业务处理</template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="/home/ruku">入库管理</el-menu-item>
          <el-menu-item index="/home/dingdan">数据展示</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 20">
        <i class="el-icon-user" style="margin: 0 15px;font-size:25px"></i>
      <span style='margin-right:10px'>{{rights=='user'?'用户':'管理员'}}</span> <span style="margin-right:10px">{{uname}}</span>
      <!-- 注销 -->
      <span @click="cancel()" style="cursor:pointer">注销</span>
    </el-header>
    <el-main>
        <router-view></router-view>
        <!-- <button @click="getstore()">ceshi</button> -->
    </el-main>
    <!-- <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main> -->
  </el-container>
</el-container>
</template>

<script>
export default {
    mounted(){
       this.uname=this.$store.state.login[0].uname;
       this.rights=this.$store.state.login[0].rights
        // this.$axios.get('http://127.0.0.1:4002/sth').then((res)=>{
        //     console.log(res)
        // })
    },
data() {
      // const item = {
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // };
      return {
        // tableData: Array(20).fill(item)
        uname:'',
        rights:''
      }
    },
    methods:{
      getstore(){
        alert(this.$store.state.ifLogin)
      },
      cancel(){
        this.$store.commit('cancelLogin');
        //清空storage
        sessionStorage.clear()
        this.$router.push('/login')
      }
    }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>