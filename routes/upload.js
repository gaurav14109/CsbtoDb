var express = require('express')
const router = express.Router()
const {fileUpload}  = require('../controller/fileUpload')
const {insertRecord} = require('../controller/insertRecord')
const {isAuthenticated} = require('../middleware/auth')
//Middleware are mostly for authentication
router.post('/', isAuthenticated,fileUpload,insertRecord)

module.exports = router