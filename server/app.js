const express =require('express');
const app=express();
const session=require('express-session');
// 加入bodypaser之后会多出来一个属性
const bodyParser=require('body-parser');
const cors =require('cors')
const mysql=require('mysql')
const pool=mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   database:"demo_03",
   port:3306,
   connectionLimit:20
})
// 1
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json())

app.use(session({
    secret:'128位字符串',  //这是安全字符串，只为加密
    resave:true,        //保存每次请求时都更新并保存数据
    saveUninitialized:true //保存初始话的数据
}));
// app.all('*', function(req, res, next) {
 
//     res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
     
//     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
     
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
     
//     next();
     
//     });

   app.use(cors({
//     origin:['http://127.0.0.1:8080','http://localhost:8081','http://localhost:8080','http://192.168.0.101:8080','http://192.168.88.101:8080',
// 'http://192.168.0.102:8080','http://127.0.0.1:8080'],//['http://127.0.0.1:8080','http://localhost:8080','http://192.168.0.101:8080']
      origin:'*',
      credentials:true
   }));
   app.get('/sth',(req,res)=>{
	res.send('hha')
})

   //获取员工列表
   app.get('/getemplist',(req,res)=>{
   	var sql='SELECT id,uname,rights FROM demo3_admin';
   	pool.query(sql,(err,result)=>{
   		if(err)throw err;
   		if(result.length>0){
   			res.send({code:1,msg:result})
   		}
   		else res.send({code:-1})
   	})
   })
   //提升员工权限
   app.put('/rights',(req,res)=>{
   	var id=req.body.params.id;
   	var uname=req.body.params.uname;
// 	console.log(req.body.params)
   	var sql='UPDATE demo3_admin SET rights=? WHERE id=?&&uname=?';
   	pool.query(sql,['admin',id,uname],(err,result)=>{
   		if(err)throw err;
   		if(result.affectedRows>0){
   			res.send({code:1})
   		}
   		else res.send({code:-1})
   	})
   })
   //删除员工
   app.delete('/deleteemp',(req,res)=>{
   var id=req.query.id;
   var uname=req.query.uname;
   id=parseInt(id)
//  console.log(req.query)
    var sql='DELETE FROM demo3_admin WHERE id=?';
    pool.query(sql,[id,uname],(err,result)=>{
        if (err)throw err;
       if(result.affectedRows>0){
           res.send({code:1})
       }
       else res.send({code:-1})
    })
})
   //提交新闻
   app.post('/writenews',(req,res)=>{
   	//使用body-parser
   	var{title,content,date,nimg,writer}=req.body.params;
   	if(!nimg){
   		nimg=''
   	}
   	var sql='INSERT INTO writenews VALUES(null,1,?,?,?,?,?)';
   	pool.query(sql,[writer,title,content,nimg,date],(err,result)=>{
   		if(err) throw err;
   		else if(result.affectedRows>0){
   			res.send({
   				code:1,
   			});
   			return
   		}else{
   			res.send({code:-1})
   		}
   	})
   })
   //获取所有新闻
   app.get('/getnews',(req,res)=>{
   	var sql ='SELECT * FROM writenews'
   	pool.query(sql,(err,result)=>{
   		if(err)throw err;
// 		console.log(result);
   		res.send(result)
   	})
   })
   //获取id为XXX的新闻
   app.get('/getonenews',(req,res)=>{
   	var id=req.query.id;
   	var sql ='SELECT * FROM writenews WHERE id = ?'
   	pool.query(sql,id,(err,result)=>{
   		if(err)throw err;
   		console.log(result);
   		res.send(result)
   	})
   })
   //修改id为XXX的新闻
   app.put('/updata',(req,res)=>{
// 	console.log(req)
console.log(req.body)
	var id=req.body.id;
	var ntitle=req.body.title;
	var ncontent=req.body.content;
//	console.log(id)
//	console.log(ntitle)
//	console.log(ncontent)
    var sql='UPDATE writenews SET ntitle=?,ncontent=? WHERE id=?'
    pool.query(sql,[ntitle,ncontent,id],(err,result)=>{
        if(err)throw err;
//      console.log(result)
		if(result.affectedRows>0){
			res.send({code:1})
		}else res.send({code:-1})
    })
})
   //删除id为xxx的新闻
   app.delete('/delete',(req,res)=>{
   var id=req.query.id
   id=parseInt(id)
//  console.log(req.query)
    var sql='DELETE FROM writenews WHERE id=?';
    pool.query(sql,[id],(err,result)=>{
        if (err)throw err;
       if(result.affectedRows>0){
           res.send({code:1})
       }
       else res.send({code:-1})
    })
})
   //登陆页面
   app.post('/login',(req,res)=>{
   	var uname=req.body.params.uname;
   	var pswd= req.body.params.pswd;
   	var sql='SELECT * FROM demo3_admin WHERE uname=?&&upwd=?';
   	pool.query(sql,[uname,pswd],(err,result)=>{
   		if(err)throw err;
   		else if(result.length>0){
   			res.send({code:1,msg:result})
   		}else{
   			res.send({code:-1})
   		}
   	})
   })
//app.use(cors({
//  origin:'*',//['http://127.0.0.1:8080','http://localhost:8080','http://192.168.0.101:8080']
//  credentials:true
//}));
app.listen(4002);