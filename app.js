const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const view = require('koa-views')
const router = require('./router')

// 静态文件目录
app.use(serve('./static'))

// 视图文件目录
app.use(view('./view'))

// 为了方便获取body中的参数
app.use(bodyParser())

// 加载路由
router(app)

app.listen(8083, function() {
  console.log(`program running at port ${8083}`)
})
