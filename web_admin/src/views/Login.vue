<template>
<div class="login-contain">
    <h1>Login</h1>
    <div class="login-info">
        <div class=login-row>
            <h3>账号</h3> <input type="text" placeholder="请输入账号" v-model="uname">
        </div>
       <div class="login-row">
           <h3>密码</h3> <input type="password" placeholder="请输入密码" v-model="pswd">
       </div>
    </div>
    <button @click="sendMsg()">提交</button>
</div>
  
</template>

<script>
export default {
    data(){
        return{
            uname:'',
            pswd:''
        }
    },
    methods:{
        sendMsg(){
            this.$axios.post('http://127.0.0.1:4002/login',{
                params:{
                    uname:this.uname,
                    pswd:this.pswd
                }
            }).then((res)=>{
                if(res.data.code>0){
                    alert('登陆成功');
                    this.$store.commit('saveLogin',res.data.msg);
                    this.$store.commit('login');
                    this.$router.push('/home')
                }else{
                    alert('账号或密码错误')
                }
            })
        }
    }
}
</script>

<style>
.login-contain{
    display: flex;
    flex-direction: column;
    min-height: 600px;
    min-width: 500px;
    flex: 1;
    align-items: center;
}
.login-contain button{
    line-height: 30px;
    width: 100px;
    outline: none;
    color: rgb(244, 248, 248);
    border-radius: 5px;
    background-color: #000 ;
}
.login-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;
}
.login-info input{
    line-height: 30px;
    margin-left: 30px;
    border-radius: 5px;
}
.login-row{
    display: flex;
    flex:1;
    margin:30px
}
</style>