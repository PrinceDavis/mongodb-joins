'use strict'
module.exports = PostModel => ({
  create: async ctx => {
    ctx.body = await PostModel.create(ctx.request.body)
  },

  all: async ctx => {
    ctx.body = await PostModel.find({})
      .populate('creator', ['fullname', 'username'])
  }
})
