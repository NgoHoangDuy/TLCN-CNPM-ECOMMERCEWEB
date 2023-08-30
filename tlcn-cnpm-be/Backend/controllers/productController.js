const Product = require("../models/product");
// create new products test => api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};
//
// Get single product details   =>   /api/v1/products?keyword=value
exports.getProducts = async (req, res, next) => {
  const resPerPage = 4;

  let products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};
