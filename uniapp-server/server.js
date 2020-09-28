// 引入koa
const Koa = require('koa');
const KoaRouter = require('koa-router')

// 1.创建服务器实例
const app= new Koa();

// 3.注册路由
// 3.1创建路由器实例
const router =  new KoaRouter();

// 3.2使用中间件
app.use(router.routes())
	.use(router.allowedMethods());
	
// 3.3注册后端路由
/*
express接收实参:
    1)req->请求报文对象
    2)res->响应报文对象->res.send(数据)
    3)next->执行下一个中间件函数
koa接收实参:
    1)ctx->req+res  ->  ctx.body=响应数据
    2)next->执行下一个中间件函数
*/
// 用于返回首页推荐页面数据
const indexData = require("./datas/index.json")
router.get('/getIndexData',(ctx,next)=>{
	ctx.body=indexData
})

// 2.运行并监听服务器
app.listen(3002, (error) => {
	if (error) {
		console.log('启动服务器失败')
	} else {
		console.log('服务器启动成功,启动与http://localhost:3002上')
	}
})
