'use strict'
const joi = require('joi')
const schema = joi.object().keys({
  NODE_ENV: joi.string()
    .allow(['development', 'production', 'test', 'staging']).required(),
  PROCESS_TYPE: joi.string().required(),
  LOGGER_LEVEL: joi.string()
  .allow(['test', 'error', 'warn', 'info', 'verbose', 'debug', 'silly'])
  .when('NODE_ENV', {
    is: 'development',
    then: joi.default('silly')
  })
  .when('NODE_ENV', {
    is: 'production',
    then: joi.default('info')
  })
  .when('NODE_ENV', {
    is: 'test',
    then: joi.default('warn')
  })
}).unknown().required()

const { error, value } = joi.validate(process.env, schema)

if (error) {
  throw new Error(`Config, validation error: ${error.message}`)
}

module.exports = {
  env: value.NODE_ENV,
  process: {
    type: value.PROCESS_TYPE
  },
  logger: {
    level: value.LOGGER_LEVEL
  }
}
