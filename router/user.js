const userRouter = require('koa-router')()
const { sercet } = require('../config')
const jwt = require('koa-jwt')({sercet})

userRouter.get('/', async (ctx, next) => {
  // 用来测试模版引擎
  await ctx.render('index', {
    title: '用户列表',
    users: [
      'Tom',
      'Marry',
      'Jack'
    ]
  })
})

userRouter.get('/:id', async (ctx, next) => {

})

userRouter.post('/', jwt, async (ctx, next) => {

})

userRouter.delete('/:id', jwt, async (ctx, next) => {

})

userRouter.put('/:id', jwt, async (ctx, next) => {

})

module.exports = userRouter