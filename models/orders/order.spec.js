'use strict'
const Order = require('./order')
const expect = require('chai').expect

describe('create', function() {
  it('should be a function', () => {
    expect(Order.create).to.be.a('function')
  })

  it('return an error when no argument is given', async function() {
    const create = this.sandbox.stub(Order, 'create')
    const ValidationError = new Error('hello')
    create.withArgs({}).rejects(ValidationError)
    try {
      const result = await Order.create({})
    } catch (e) {
      expect(e).to.be.equal(ValidationError)
    }
  })

  it('return an error unless called with the right arguments', async function() {
    const orderParams = {
      user: {
        name: 'ossaija',
        phone: '08136868448'
      },
      item: {
        name: 'bread',
        price: 500
      },
      quantity: 4,
    }
    const create = this.sandbox.stub(Order, 'create')
    create.withArgs(orderParams).resolves(orderParams)
    const result =  await Order.create(orderParams)
    expect(result).to.be.equal(orderParams)
  })
})

describe('updateStatus', () => {
  it('should be a function', () => {
    expect(Order.updateStatus).to.be.a('function')
  })
})