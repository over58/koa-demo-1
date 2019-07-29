const Router = require('koa-router')
const router = new Router()
const userRouter = require('./user')
const uploadRouter = require('./upload')
const { sign } = require('jsonwebtoken')
const { sercet } = require('../config')

module.exports = (app) => {
  router.post('/login', async (ctx, next) => {
    const { name , password} = ctx.request.body
    let token = sign({name}, sercet, {
      expiresIn: '3days'
    })
    ctx.response.body = {
      name: name,
      token
    }
  })
  router.use('/user', userRouter.routes(), userRouter.allowedMethods())
  router.use('/upload', uploadRouter.routes(), uploadRouter.allowedMethods())
  app.use(router.routes()).use(router.allowedMethods())
}
