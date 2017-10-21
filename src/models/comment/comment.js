'use strict'
const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  post: { type: mongoose.Schema.ObjectId, ref: 'Post' },
  body: { type: String, required: true }
})

module.exports = mongoose.model('Comment', Schema)
