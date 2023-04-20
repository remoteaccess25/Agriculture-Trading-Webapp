const express = require('express')
const router = express.Router()

const { getAllProducts, createProduct, deleteProduct, updateProduct,getProduct } = require('../controllers/pruducts')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').delete(deleteProduct).patch(updateProduct).get(getProduct)

// router.get('/',getAllProducts)

// router.get('/', (req, res) => {
//     res.send('aai ghal')
// })

module.exports = router
