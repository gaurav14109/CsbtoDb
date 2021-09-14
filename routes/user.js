var express = require('express')
const router = express.Router()
const {registration, login} = require('../controller/user')
//Middleware are mostly for authentication
router.post('/registeration', registration)
router.post('/login', login)
module.exports = router