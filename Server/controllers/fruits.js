const Product = require('../models/product')
const { BadRequestError } = require('../errors/index')
const { getProduct } = require('./utils');
const { StatusCodes } = require('http-status-codes')

// Get all products of perticular type
// url - products/fruits
const getAllFruits = async (req, res) => {

/*     // criteria to find products
    const type = { productType: 'fruit' }

    // find the product
    const result = Product.find(type)

    // sort the by name and size
    retult = result.sort('productName')

    // get the result
    const products = await result */

    const find = { productType: 'fruit' }
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
// url - products/fruits/:id
const getFruit = async (req, res) => {

    // get the id
    const productID = req.params.id

    // find the product
    const product = await Product.findById(productID)

    // product not found, throw error
    if (!product || product.productType !== 'fruit') {
        throw new BadRequestError('Product not found')
    }

    // send response if the product is found
    res
        .status(StatusCodes.OK)
        .json({ stauts: 'success', product })
}




// recomended products
// url - products/recomended/fruits
const getFruitsRec = async (req, res) => {

    // // find recomended produts
    // let result = Product.find({ recomended: 'true', productType: 'fruit' })

    // // sort them based on name
    // result = result.sort('productName')

    // // get the products
    // const products = await result

    const find = { recomended:true }
    const sort = 'productName'

    // get the result
    const products = await getProduct(find, sort)

    // send response
    res
        .status(StatusCodes.OK)
        .json({ stauts: 'success', products, nbHits: products.length })
}




module.exports = { getAllFruits, getFruitsRec, getFruit }










