'use strict'

const http = require('http')
const app = require('./server')
const config = require('./../config')
//  Connect to db
require('./../db').mongoDB(config)

// Start server
const server = http.createServer(app.callback())
server.listen(config.port, () =>
  console.log(`server started on port: ${config.port}`)
)
