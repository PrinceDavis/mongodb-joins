'use strict'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = config => {
  mongoose.connect(config.MONGODB_URI, {
    useMongoClient: true
  })
  .then(db => {})
  .catch(err => console.log(err))
}
