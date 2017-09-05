'use strict'
const redis = require('redis')
const publisherClient = redis.createClient()

module.exports = {
  async create (options) {
    try {
      const Order = this
      const order = new Order(options)
      const doc = await order.save()
      publisherClient.publish('updates', JSON.stringify(doc))
      return Promise.resolve(doc)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async updateStatus (options) {
    try {
      const Order = this
      const order = await Order.findById(options.id)

      if (!order) {
        return Promise.reject(new Error('order not found'))
      }

      order.status = options.status
      return Promise.resolve(await order.save())
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
