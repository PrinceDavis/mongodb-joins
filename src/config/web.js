'use strict'
const commmon = require('./components/common')
const server = require('./components/server')
const mongodb = require('./components/mongodb')

module.exports = Object.assign({}, commmon, server, mongodb)
