const express = require('express')
const router = express.Router()

const {list,read,create,update,remove} = require('../Controller/test')

//http://localhost:5000/api/test
router.get('/test',list)

router.get('/test/:id', read)

router.post('/test', create)

router.put('/test/:id',update)

router.delete('/test/:id',remove)




module.exports = router