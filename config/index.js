'use strict'
const processType = process.env.PROCESS_TYPE
let config

try {
  config = require(`./${processType}`)
} catch (ex) {
  if (ex.code === 'MODULE_NOT_FOUND') {
    throw new Error(`No config for process type: ${processType}`)
  }
  throw ex
}

module.exports = config
