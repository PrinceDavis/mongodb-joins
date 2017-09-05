'use strict'
const joi = require('joi')

const schema = joi.object({
  PORT: joi.number()
    .required()
}).unknown().required()

const { err, value } = joi.validate(process.env, schema)
if (err) {
  throw new Error(`Config, validation error: ${err.message}`)
}

module.exports = {
  PORT: value.PORT
}
