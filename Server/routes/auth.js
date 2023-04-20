// require controllers
const { register,login } = require('../controllers/auth');


// require express and create a router
const express = require('express')
const router = express.Router()

// create routes
router.route('/register').post(register)
router.route('/login').post(login)


// export router
module.exports = router