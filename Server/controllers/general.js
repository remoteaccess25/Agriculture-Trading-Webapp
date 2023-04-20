const Product = require('../models/product')
const {BadRequestError} = require('../errors/index')


// Get all products of perticular type
const getAllProducts = async (req, res) => {

    // get the type
    const productID = req.params.id

    // find the product
    const product = await Product.findById(productID)

    // throw error if bad request
    if (!product) {
        throw new BadRequestError('Product not found')
    }

    // send the response 
    res.status(200).json({ stauts: 'success', product })
}




const getProductsRec = async (req, res) => {
    const { name, /* type, */ city/* , recomended */ } = req.query
    console.log(req.query)
    
    let queryObject = {}
    if (name) {
        queryObject.productName = { $regex: name, $options: 'i' }
    }
    /* if (type) {
        queryObject.productType = { $regex: type, $options: 'i' }
    } */
    if (city) {
        queryObject.city = { $regex: city, $options: 'i' }
    }
    /*    if (recomended) {
        queryObject.recomended = recomended === 'true' ? true : false
    } */
    let result = Product.find(queryObject)
    /*     if (recomended)
    result = result.sort('productName')
    else  */if (name)
    result = result.sort('-recomended -maxPrice -minPrice')
    else
    result = result.sort('name -recomended')
    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}



// single product request (cards)
const getProduct = async (req, res) => {

    // get the id
    const productID = req.params.id
    
    // find the product
    const product = await Product.findById(productID)
    
    // product not found, throw error
    if (!product) {
        throw new BadRequestError('Product not found')
    }
    
    // send response if the product is found
    res.status(200).json({ stauts: 'success', product })
}



const getFruits = () => {

    // get id 
    const fruitId = req.params.id
    
    // check if id is present or not
    if (!fruitId) {
        
    }

}

















// const createProduct = async (req, res) => {
//     const product = await Product.create(req.body)
//     res.status(201).json({ status:'success',msg:"Product added sucessfully" })
// }

// const deleteProduct = async (req, res) => {
//     const productID = req.params.id
//     const product = await Product.findOneAndDelete({ _id: productID })
//     if (!product) {
//         return res.status(400).json({ stauts: 'failed', msg: 'Product not found' })
//     }
//     res.status(200).json({stauts:'success',msg:'Product deleted sucessfully'})

// }

// const updateProduct = async (req, res) => {
//     const productID = req.params.id
//     const product = await Product.findByIdAndUpdate({ _id: productID }, req.body, { new: true, runValidators: true })
//     if (!product) {
//         return res.status(400).json({ stauts: 'failed', msg: 'Product not found' })
//     }
//     res.status(200).json({ stauts: 'success', msg: 'Product Updated sucessfully' })
// }


module.exports = { getAllProducts,/*  createProduct, deleteProduct, updateProduct, */ getProduct }










