'use strict'

require('./../db')
const http = require('http')
const app = require('./server')
const config = require('./../config')
const server = http.createServer(app.callback())

server.listen(config.port, () =>
  console.log(`server started on port: ${config.port}`)
)
