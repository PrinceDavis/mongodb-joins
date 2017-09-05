'use strict'
const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  user: {
    name: {type: String, required: true},
    phone: {type: String, required: true}
  },
  item: {
    name: {type: String, required: true},
    price: {type: Number, required: true}
  },
  quantity: {type: Number, required: true},
  status: {type: String, default: 'made', enum: ['made', 'confirmed', 'processing', 'delivered']}
})
