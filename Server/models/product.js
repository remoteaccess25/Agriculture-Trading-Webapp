
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Product name must be provided'],
        trim: true
    },
    productType: {
        type: String,
        required: [true, 'Product type must be provided'],
        emun: {
            values: ['vegetable', 'fruit'],
            message: '{VALUE} is not supported'
        },
    },
    productSize: {
        type: String,
        emun: {
            values: ['small', 'regular', 'large'],
            message: '{VALUE} is not supported'
        },
        default: 'regular'
    },
    marketName: {
        type: String,
        required: [true, 'Market name must be provided'],
        trim: true
    },
    city: {
        type: String,
        required: [true, 'City name must be provided'],
        trim: true
    },
    minPrice: {
        type: Number,
        required: [true, 'Minimum price observed must be provided']
    },
    maxPrice: {
        type: Number,
        required: [true, 'Max price observerd must be provided']
    },
    managerName: {
        type: String,
        required: [true, `Market manager's name must be provided`],
        trim: true
    },
    marketContact: {
        type: Number,
        required: [true, `Market's contact must be provided`],
        match: [/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, 'Enter valid Phone Number']
    },
    recomended: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    },
    updatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }/* ,
    image: {
        data: Buffer,
        contentType: String,
        required:[true,'Please provide image']
    } */

}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)

