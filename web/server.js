'use strict'
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const app = new Koa()
const router = require('./router')

app.use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = app
