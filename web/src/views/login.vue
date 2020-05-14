<template>
  <div class="main">
      <div class="title">
          己註冊用戶登入
      </div>
      <div class="cform">
          <table cellpadding="0" cellspacing="8">
						
						<tbody><tr>
							<td width="28%" align="right">
								電話號碼:
							</td>
							<td align="left">
								<input type="number" class="unyxec" style="width: 90%" id="username" name="username" value="">
							</td>
						</tr>
						<tr>
							<td align="right">
								登入密碼:
							</td>
							<td align="left">
								<input type="password" class="unyxec" style="width: 90%" id="password" name="password" value="">
							</td>
						</tr>
						<tr>
							<td height="60" colspan="2">
							<img src="img/login/sure.png" alt="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/login/zhuce.png" style="height: 38px; width:102px; text-align: center;padding-left:30px">
							
							</td>
							
						</tr>
					</tbody></table>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cform{
    overflow: hidden;
    padding: 10px 20px;
    line-height: 30px;
}
table{
    width:100%;
    td{
     padding: 5px;
    text-align: center;
    font-size: 12px;
    input{
     height: 30px;
    padding: 2px 5px;
    width: 180px;
    line-height: 30px;
    border: 1px solid #000000;
    }
    }
    
}
</style>