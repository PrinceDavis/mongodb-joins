'use stict'
module.exports = CommentModel => ({
  create: async ctx => {
    // console.log(ctx.request.body)
    ctx.body = await CommentModel.create(ctx.request.body)
  }
})
