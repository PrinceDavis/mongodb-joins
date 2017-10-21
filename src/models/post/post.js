'use strict'

const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

Schema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'post'
})

Schema.pre('findOne', autoPopulateComments)
Schema.pre('find', autoPopulateComments)
module.exports = mongoose.model('Post', Schema)

function autoPopulateComments (next) {
  this.populate('comments', 'body')
  next()
}
