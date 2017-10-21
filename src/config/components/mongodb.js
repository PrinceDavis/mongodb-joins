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
  mongodb_uri: value.MONGODB_URI
}
