const Product = require('../models/product')


const getProduct = (find, sort) => {

    // find recomended produts
    let result = Product.find(find)

    // sort them based on name
    if (sort) {
        result = result.sort(sort)
    }

    return result

}

module.exports = {
    getProduct
};
