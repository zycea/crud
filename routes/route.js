const express = require('express')
const {createdate,
    getdate,
    getdates,
    deletedate,
    updatedate
} = require('../controllers/datecontrollers')

const router = express.Router()

router.get('/',getdates)

router.get('/:id',getdates)

router.post('/', createdate)


router.delete('/:id',deletedate)


router.patch('/:id',updatedate)


module.exports = router