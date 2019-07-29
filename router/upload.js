const { sercet } = require('../config')
const jwt = require('koa-jwt')({sercet})
const fs = require('fs')
const uploadRouter = require('koa-router')()
const path = require('path')
const multer = require('koa-multer')
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../upload/'))
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
    cb(null, fileFormat[0] + '_' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
var upload = multer({ storage: storage });

uploadRouter.get('/', async (ctx, next) => {
  files = fs.readdirSync(path.join(__dirname, '../upload'))
  await ctx.render('upload', {
    files
  })
})

uploadRouter.get('/:id', async (ctx, next) => {

})

uploadRouter.post('/', upload.single('file'), async (ctx, next) => {
  ctx.response.body = ctx.req.file
})

uploadRouter.delete('/:id', jwt, async (ctx, next) => {

})

uploadRouter.put('/:id', jwt, async (ctx, next) => {

})

module.exports = uploadRouter