'use strict'
require('../../load-models')

const Router = require('koa-router')
const mongoose = require('mongoose')

const router = new Router()
const userController = require('./users')(mongoose.model('User'))
const postController = require('./posts')(mongoose.model('Post'))
const commentController = require('./comments')(mongoose.model('Comment'))

router.get('/', async ctx => {
  ctx.body = 'Learning join and relations in mongodb'
})

router.post('/users', userController.create)
router.post('/posts', postController.create)
router.post('/comments', commentController.create)
router.get('/users', userController.all)
router.get('/posts', postController.all)

module.exports = router
