'use strict'

module.exports = UserModel => ({
  create: async ctx => {
    ctx.body = await UserModel.create(ctx.request.body)
  },

  all: async ctx => {
    ctx.body = await UserModel.find({})
    .populate('friends')
  }
})
