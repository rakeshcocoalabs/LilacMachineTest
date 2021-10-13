const express = require('express')
const router = express.Router()

const controller = require('../controllers/todo')







router.post('/add', controller.add)
router.patch('/update/:id', controller.update)

router.get('/details/:id', controller.details)
router.get('/list', controller.list)
router.delete('/remove/:id', controller.remove)
router.patch('/soft-remove/:id', controller.softRemove)


module.exports = router