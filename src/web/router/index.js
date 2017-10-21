'use strict'

const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
  ctx.body = 'Learning join and relations in mongodb'
})

module.exports = router
