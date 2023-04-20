const express = require('express')
const router = express.Router()

const { getAllFruits,getFruitsRec,getFruit } = require('../controllers/fruits')

// const admin = require('../controllers/auth');

// router.route('/create').get(admin.createProduct)
// router.route('/update').get(admin.updateProduct)
// router.route('/delete').get(admin.deleteProduct)


// router.route('/').get(getAllProducts)/* .post(createProduct) */
router.route('/fruits').get(getAllFruits)/* .delete(deleteProduct).patch(updateProduct) */
router.route('/fruits/:id').get(getFruit)/* .delete(deleteProduct).patch(updateProduct) */
router.route('/recomended/fruits').get(getFruitsRec)/* .delete(deleteProduct).patch(updateProduct) */




module.exports = router