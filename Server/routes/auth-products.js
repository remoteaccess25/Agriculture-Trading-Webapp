// require necessary controllers
const { createProduct, deleteProduct, updateProduct } = require('../controllers/general');

const express = require('express');
const router = express()

// product related authentiacated routes
router.route('/create').post(createProduct) // create new entry in database
router.route('/update/:id').patch(updateProduct) // update existing entry
router.route('/delete/:id').delete(deleteProduct) // delete exiting entry


// export router
module.exports = router
