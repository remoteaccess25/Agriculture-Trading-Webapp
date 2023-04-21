const Product = require('../models/product')
const { BadRequestError } = require('../errors/errors')
const { getProduct } = require('./utils');
const { StatusCodes } = require('http-status-codes')

// Get all products of perticular type
// url - products/vegetables
const getAllVegetables = async (req, res) => {

    /*     // criteria to find products
        const type = { productType: 'vegetable' }
    
        // find the product
        const result = Product.find(type)
    
        // sort the by name and size
        retult = result.sort('productName') */

    const find = { productType: 'vegetable' }
    const sort = 'productName'

    // get the result
    const products = await getProduct(find, sort)

    // throw error if bad request
    if (!products) {
        throw new BadRequestError('Product not found')
    }

    // send the response 
    res
        .status(StatusCodes.OK)
        .json({ stauts: 'success', products, nbHits: products.length })
}



// single product request (cards)
// url - products/vegetables/:id
const getVegetable = async (req, res) => {

    // get the id
    const productID = req.params.id

    // find the product
    const product = await Product.findById(productID)

    // product not found, throw error
    if (!product || product.productType !== 'vegetable') {
        throw new BadRequestError('Product not found')
    }

    // send response if the product is found
    res
        .status(StatusCodes.OK)
        .json({ stauts: 'success', product })
}




// recomended products
// url - products/recomended/vegetables
const getVegetablesRec = async (req, res) => {

    /*     // find recomended produts
        let result = Product.find({ recomended: 'true' })
    
        // sort them based on name
        result = result.sort('productName')
    
        // get the products
        const products = await result */

    const find = { productType: 'vegetable', recomended: true }
    const sort = 'productName'

    const products = await getProduct(find, sort)

    // send response
    res
        .status(StatusCodes.OK)
        .json({ stauts: 'success', products, nbHits: products.length })
}




module.exports = { getAllVegetables, getVegetable, getVegetablesRec }










