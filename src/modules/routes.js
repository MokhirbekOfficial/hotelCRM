const { Router } = require('express')
const router = new Router()
const admin = require('./admin/admin')
const token = require('./tokenChecker/token')

router
    .post('/', admin.getAdmin)
    .post('/token', token.tokenchecker)

module.exports = router