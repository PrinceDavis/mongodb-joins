'use strict'

const joi = require('joi')

const schema = joi.object().keys({
  MONGODB_URL: joi.string()
    .required()
}).unknown().required()

const { err, value } = joi.validate(process.env, schema)
if (err) {
  throw new Error(`Config, validation error: ${err.message}`)
}

module.exports = {
  MONGODB_URI: value.MONGODB_URI
}
