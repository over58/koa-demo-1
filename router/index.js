const Router = require('koa-router')
const router = new Router()
const userRouter = require('./user')
const { sign } = require('jsonwebtoken')
const config = require('../config')

module.exports = (app) => {
  router.use('/user', userRouter.routes(), userRouter.allowedMethods())
  router.post('/login', async (ctx, next) => {
    const { name , password} = ctx.request.body
    let token = sign({name}, config.sercet, {
      expiresIn: '3days'
    })
    ctx.response.body = {
      name: name,
      token
    }
  })
  app.use(router.routes()).use(router.allowedMethods())
}
