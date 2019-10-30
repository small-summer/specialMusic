const express=require('express')
const serveIndex=require('serve-index')
const serveStatic=require('serve-static')
const mutiparty=require('multiparty')
const util=require('util')
const app=express()
const serve=serveStatic('./htdocs')
app.use('/',serveIndex('./htdocs',{'icons':true}))
//����ͻ��� get����
app.get('/*',function(req,res){
	serve(req,res)
})
//���������󶨶˿�
app.listen(3000,()=>{
	console.log('server running at http://127.0.0.1:3000')
})
