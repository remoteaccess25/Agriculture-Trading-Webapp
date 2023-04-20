// require controllers
const { register, login } = require('../controllers/auth');


// require express and create a router
const express = require('express')
const router = express.Router()

// registration and login routes
router.route('/register').post(register) // register route
router.route('/login').post(login) // login route 



// export router
module.exports = router