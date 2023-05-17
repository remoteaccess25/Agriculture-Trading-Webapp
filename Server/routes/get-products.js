
// express and router
const express = require('express')
const router = express.Router()

// necessary controllers
const { getAllFruits,getFruitsRec,getFruit } = require('../controllers/fruits')
const { getAllVegetables,getVegetablesRec,getVegetable } = require('../controllers/vegetables')
const {searchProduct} = require('../controllers/general');


// search bar
router.route('/').post(searchProduct)

// routes for fruits 
router.route('/fruits').get(getAllFruits) // all fruits will be sent
router.route('/fruits/:id').get(getFruit) // perticular fruit will be sent
router.route('/recomended/fruits').get(getFruitsRec) // recomended fruits will be sent

// routes for vegetables
router.route('/vegetables').get(getAllVegetables) // all vegetables will be sent
router.route('/vegetables/:id').get(getVegetable) // perticulat vegetable will be sent
router.route('/recomended/vegetables').get(getVegetablesRec) // recomended vegetables will be sent

// export the router
module.exports = router