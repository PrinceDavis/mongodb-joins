'use strict'

const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: {type: mongoose.Schema.ObjectId, ref: 'Comment'}
})

module.exports = mongoose.model('Post', Schema)
