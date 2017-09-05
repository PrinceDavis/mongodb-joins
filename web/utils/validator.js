'use strict'
const Joi = require('joi')

module.exports = {
  body: async (ctx, rules) => {
    const result = Joi.validate(ctx.request.body, rules)
    if (result.error) {
      throw new Error(`validation error ${result.error.message}`)
    }
  }
}
