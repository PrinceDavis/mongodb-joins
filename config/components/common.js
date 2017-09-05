'use strict'
const Joi = require('joi')
const schema = Joi.object().keys({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'staging']).required(),
  DOMAIN: Joi.string().required()
}).unknown().required()

const { error, value } = Joi.validate(process.env, schema)

if (error) {
  throw new Error(`Config, validation error: ${error.message}`)
}

module.exports = {
  ENV: value.NODE_ENV,
  DOMAIN: value.DOMAIN
}
