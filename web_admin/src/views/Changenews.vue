<template>
  <div class="rich_content">
      <div class="genggai">
          <h1>公告修改</h1>
      </div>
      <div class="yulan" id="yulan">
         <div class="menu-ones">
             <div class="nub_content" style="margin: 0px;padding: 0px;font-size: 17px;text-align: justify;" v-html="content"> </div>
        </div>
    </div>
    <div class="title">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
<el-button type="primary" @click="submit">提交</el-button>
<el-button type="primaruy" style="margin-left:100px" @click="clickUpDown()">预览</el-button>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
    mounted(){
        this.rights=this.$store.state.login[0].rights
        this.getnews()
    },
  components: {
    quillEditor
  },
  data () {
  return {
      id:'',
    content: '',
    editorOption: {
      action:'',
      methods:'post'
    },
    title:'',
    rights:''
  }
},
methods: {
    clickUpDown() {
      // console.log(1)
      this.clear = false;
      let slide = {
        down: function(div) {
          div.style.height = "500px";
        },
        up: function(div) {
          div.style.height = "0";
        }
      };
      var _this = this;
      function toggleSlide(id, s) {
        var div = document.getElementById(id),
        // 此时自身高度 不包括边框
          div_height = div.offsetHeight;
          // div_height=div.style.height;
          console.log(div_height)
        div.style.transition = "height " + s + "ms";
        div.style.overflow = "hidden";
        if (div_height) {
          console.log(9)
          slide.up(div);
        //   div.classList.remove("zhezhao");
          _this.clear = true;
        } else {
          console.log(8)
          slide.down(div);
        }
      }
      toggleSlide("yulan", "300");
      // console.log(this.clear)
    },
    getnews(){
        let news=this.$route.params.news;
        this.title=news.ntitle;
        this.content=news.ncontent;
        this.id=news.id
        console.log(this.content)
    },
  submit () {
    if(this.rights=='user'){
        alert('权限不够,请联系管理员');
        return
    }
    else{
    let year=new Date().getFullYear();
    let month= new Date().getMonth()+1;
    let day= new Date().getDate();
    let p_time=year+'-'+month+'-'+day
    console.log(p_time)
    console.log(this.$refs.text.value);
    this.$axios.put('http://127.0.0.1:4002/updata',{
        // 暂时通过uname用户名来进行发布者名字
        // id:this.$store.state.uname,
        id:this.id,
        title:this.title,
        content:this.content,
        date:p_time
    }).then((res)=>{
        console.log(res.data)
      if(res.data.code>0){
        alert('文章发表成功');
        this.content='',
        this.title=''
      }
      else{
        alert('文章发表失败')
      }
    })
  }       
    }
},
// editorOption里是放图片上传配置参数用的，例如：
// action:  '/api/product/richtext_img_upload.do',  // 必填参数 图片上传地址
// methods: 'post',  // 必填参数 图片上传方式
// token: '',  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
// name: 'upload_file',  // 必填参数 文件的参数名
// size: 500,  // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
// accept: 'multipart/form-data, image/png, image/gif, image/jpeg, image/bmp, image/x-icon,image/jpg'  // 可选 可上传的图片格式
components: {
    quillEditor
  }
}
</script>

<style>
.genggai{
    height: 50px;
    text-align: center;
    font-size: 30px;
}
.rich_content{
  min-height: 1000px;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
    height: 400px;
    font-size:20px;
}
</style>