'use strict'
const config = require('./../config')
require('./../db').mongoDB(config)
const http = require('http')
const app = require('./server')
const server = http.createServer(app.callback())

server.listen(config.port, () =>
  console.log(`server started on port: ${config.port}`)
)
