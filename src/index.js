'use strict'
const dontenv = require('dotenv')
dontenv.config()
const type = process.env.PROCESS_TYPE
if (type === 'web') {
  require('./web')
} else {
  throw new Error(`${type} is unsupported type.
  Use one of web ...`)
}
