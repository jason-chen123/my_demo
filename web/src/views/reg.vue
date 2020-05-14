<template>
<div style="max-width:640px;margin:auto">
    <div class="title main">
	歡迎登入或注冊
	</div>
    <div style="width: 100%; margin: 20px auto; margin-top: 50px;  overflow:hidden; text-align: center">
        <router-link to="/register"><img src="img/reg/zhuce.png" style="width: 45%; text-align: center"></router-link> <span style="margin:0 7px">&nbsp;&nbsp;&nbsp;&nbsp;</span><router-link to='/login'><img src="img/reg/login.png" style="width: 45%;text-align: center"></router-link>
	</div>
   <div style="width: 100%;margin: 20px auto; overflow:hidden;text-align: center" >
       <p style="font-size:18px;margin-top:2px">( 忘記密碼? )</p>
   </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>

.title{
    text-align: center;
    height: 40px;
    position: relative;
    background: #0598ce;
    color: #fff;
    font-size: 16px;
    line-height: 40px;
}
</style>