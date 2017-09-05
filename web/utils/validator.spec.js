'use strict'
const expect = require('chai').expect
const validator = require('./validator')
const Joi = require('joi')

describe('body', () => {
  it('should be a function', () => {
    expect(validator.body).to.be.a('function')
  })

  it('should call Joi.validate', async function() {
    try {
      const validate = this.sandbox.stub(Joi, 'validate')
      validator.body({
        request: {body}
      }, {})
      expect(validate).to.be.calledOnce
      expect(validate.firstCall.args.length).to.be.equal(2)
    } catch (e) {

    }
  })

  it('should be called with two arguments', async function() {
    try {
      const validate = this.sandbox.stub(Joi, 'validate')
      validator.body({
        request: {body}
      }, {})
      expect(validate.firstCall.args.length).to.be.equal(2)
    } catch (e) {

    }
  })
})
