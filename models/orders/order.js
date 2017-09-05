'use strict'
const mongoose = require('mongoose')
const methods = require('./methods')
const Schema = require('./schema')

mongoose.Promise = global.Promise

Schema.statics = {
  create: methods.create,
  updateStatus: methods.updateStatus
}
module.exports = mongoose.model('orders', Schema)
