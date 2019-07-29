const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const views = require('koa-views')
const koaNunjucks = require('koa-nunjucks-2');
const path = require('path')

module.exports = function(app) {
  // 静态文件目录， 注意是执行时的路径相对于app.js来说
  app.use(serve('./static'))
  
  // 使用模版引擎
  app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      trimBlocks: true
    }
  }));
  
  // 视图文件目录
  // app.use(views(__dirname + '/views'), {
  //   extension: 'html'
  // })
  
  // 为了方便获取http请求body中的参数
  app.use(bodyParser())
}
