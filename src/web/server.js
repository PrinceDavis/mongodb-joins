'use strict'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const validator = require('koa-request-validation')
const app = new Koa()
const router = require('./router')

app.use(cors())
  .use(bodyParser())
  .use(validator())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app
