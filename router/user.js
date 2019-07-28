const Router = require('koa-router')
const userRouter = new Router()

userRouter.get('/', async (ctx, next) => {
  ctx.response.body = '<h3>hello page</h3>'
})

userRouter.get('/:id', async (ctx, next) => {

})

userRouter.post('/', async (ctx, next) => {

})

userRouter.delete('/:id', async (ctx, next) => {

})

userRouter.put('/:id', async (ctx, next) => {

})

module.exports = userRouter