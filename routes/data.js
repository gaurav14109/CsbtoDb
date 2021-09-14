var express = require('express')
const router = express.Router()
const {getData,newData, updateData, deleteData} = require('../controller/data')
const {isAuthenticated} = require('../middleware/auth')

router.get('/',getData)

router.post('/',isAuthenticated,newData)

router.put('/:id',isAuthenticated, updateData)

router.delete('/:id',isAuthenticated, deleteData)

module.exports = router;