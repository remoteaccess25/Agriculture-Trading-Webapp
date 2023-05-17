const Product = require('../models/product')

const getAllProducts = async (req, res) => {
    const { name, type, city, recomended } = req.query
    const queryObject = {}
    if (name) {
        queryObject.productName = {$regex:name,$options:'i'}
    }
    if (type) {
        queryObject.productType = { $regex: type, $options: 'i' }
    }
    if (city) {
        queryObject.city = { $regex: city, $options: 'i' }
    }
    if (recomended) {
        queryObject.recomended = recomended === 'true' ? true : false
    }
    let result = Product.find(queryObject)
    if (recomended)
        result = result.sort('productName')
    else if (name)
        result = result.sort('-recomended -maxPrice -minPrice')
    else    
        result = result.sort('-recomended')

    const products = await result
    res.status(200).json({products,nbHits:products.length})
}

const createProduct = async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({ status:'success',msg:"Product added sucessfully" })
}

const deleteProduct = async (req, res) => {
    const productID = req.params.id
    const product = await Product.findOneAndDelete({ _id: productID })
    if (!product) {
        return res.status(400).json({ stauts: 'failed', msg: 'Product not found' })
    }
    res.status(200).json({stauts:'success',msg:'Product deleted sucessfully'})
    
}

const updateProduct = async (req, res) => {
    const productID = req.params.id
    const product = await Product.findByIdAndUpdate({ _id: productID }, req.body, { new: true, runValidators: true })
    if (!product) {
        return res.status(400).json({ stauts: 'failed', msg: 'Product not found' })
    }
    res.status(200).json({ stauts: 'success', msg: 'Product Updated sucessfully' })
}

const getProduct = async (req, res) => {
    const productID = req.params.id
    const product = await Product.findById(productID)
    if (!product) {
        return res.status(400).json({ stauts: 'failed', msg: 'Product not found' })
    }
    res.status(200).json({ stauts: 'success', product })
}

module.exports = { getAllProducts, createProduct, deleteProduct, updateProduct, getProduct }