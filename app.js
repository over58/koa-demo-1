const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const middleware = require('./middleware')

// 加载中间件
middleware(app)
// 加载路由
router(app)

app.listen(8083, function() {
  console.log(`program running at port ${8083}`)
})
