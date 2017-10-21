'use strict'

const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  fullname: {type: String, required: true},
  username: { type: String, required: true },
  friends: [
    { type: mongoose.Schema.ObjectId, ref: 'User' }
  ]
})

module.exports = mongoose.model('User', Schema)
