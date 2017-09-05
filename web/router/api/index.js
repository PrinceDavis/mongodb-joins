'use strict'

const Router = require('koa-router')
const router = new Router({prefix: '/v1'})

router.get('/', async ctx => {
  ctx.body = 'welcome to smartchallenge player api'
})

module.exports = router
