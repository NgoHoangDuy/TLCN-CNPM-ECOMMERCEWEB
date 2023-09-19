const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

// create new products test => api/v1/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});
//
// Get single product details   =>   /api/v1/products?keyword=value
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;
  const productsCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeatures.query;
  let filteredProductsCount = products.length;

  apiFeatures.pagination(resPerPage);
  products = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    productsCount,
    resPerPage,
    filteredProductsCount,
    products,
  });
});
// delete product by admin => /api/v1?id=value
exports.deleteProducts = catchAsyncErrors(async (res, req, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.status(200).json({
        success: true,
        product,
      });
    } else {
      return next(new ErrorHandler("Product not found", 404));
    }
  } catch (error) {}
});
