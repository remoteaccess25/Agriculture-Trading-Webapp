const Product = require("../models/product");
const {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} = require("../errors/errors");
const { getProduct } = require("./utils");
const { StatusCodes } = require("http-status-codes");

// search bar - searching product by name
// url - products/
const searchProduct = async (req, res) => {
  // search criteria
  const search = req.body;
  const sort = "productName";

  // make the search case insensitive
  if (search.productName) {
    search.productName = { $regex: search.productName, $options: "i" };
  }

  // get products
  const products = await getProduct(search, sort);

  // if no product found throw Badrequest error
  if (!products) {
    throw new BadRequestError("Product Not found");
  }

  if (products.length > 0) {
    const productsWithImages = products.map(product => {
      const productWithImage = product.toObject();
      // Assuming the image filenames are stored in the "image" property of each product
      productWithImage.image = `${req.protocol}://${req.get('host')}/uploads/${product.image}`;
      return productWithImage;
    })
    
    
    
    
    
    // send response
    res.status(StatusCodes.OK).json({ status: "success", products:productsWithImages });
}
};

// create new entry (product) - authenticated only
// url - /admin/create
const createProduct = async (req, res) => {
  // set createdBy and updatedBy to userID
  req.body.createdBy = req.user.userId;
  req.body.updatedBy = req.user.userId;

  try {
    let image = null;
    if (req.file) {
      image = req.file.filename;
    }

    const {
      productName,
      productType,
      marketName,
      city,
      minPrice,
      maxPrice,
      managerName,
      marketContact,
      recomended,
    } = req.body;


    console.log("image",req.body)

    // create the new product
    const product = await Product.create({
      productName,
      productType,
      marketName,
      city,
      minPrice,
      maxPrice,
      managerName,
      marketContact,
      recomended,
      image,
      createdBy: req.user.userId,
      updatedBy:req.user.userId
    });

    // throw error if unable to create product
    // if (!product) {
    //     throw new InternalServerError('Unable to create product')
    // }

    // send response

    return res.status(200).json({ message: "added sucessfully", product });
  } catch (error) {
    console.log(error);
  }
};

// update product - authenticated only
// url - /admin/update
const updateProduct = async (req, res) => {
  // check if the body is empty or not. If yes throw error
  if (!Object.keys(req.body).length) {
    throw new BadRequestError("Please provide data");
  }
  // console.log(req.body.length)

  // destructure the request
  const {
    user: { userId },
    params: { id: productId },
  } = req;

  // set updated by to userId
  req.body.updatedBy = userId;

  // findAndUpdate
  const product = await Product.findByIdAndUpdate(
    { _id: productId },
    req.body,
    { new: true, runValidators: true }
  );

  // if product does not exit throw notFoundError
  if (!product) {
    throw new NotFoundError(`No Product with id ${productId}`);
  }

  // send response of successfull operation
  res
    .status(StatusCodes.OK)
    .json({
      status: "success",
      msg: "Product data updated successfully",
      product,
    });
};

// delete product - authenticated only
// url - /admin/delete
const deleteProduct = async (req, res) => {
  // destructure req
  const {
    params: { id: productId },
  } = req;

  // delete product
  const product = await Product.findOneAndRemove({ _id: productId });

  // throw error if no product with the respective id exists
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
};

module.exports = { searchProduct, createProduct, updateProduct, deleteProduct };
